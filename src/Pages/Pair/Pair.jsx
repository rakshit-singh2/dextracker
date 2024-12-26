import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useParams } from 'react-router-dom';
import poolabi from '../../constants/poolabi.json';
import { useWatchContractEvent } from 'wagmi';
import { wagmiconfig, viemClients } from '../../wagmiconfig/wagmiconfig';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Utility function to safely convert Hex to BigInt
const hexToBigInt = (hex) => {
    // Check if the hex string is valid (it should only contain characters 0-9 and a-f)
    if (!/^0x[0-9a-fA-F]+$/.test(hex)) {
        console.error(`Invalid hex string: ${hex}`);
        return BigInt(0); // Return 0 for invalid hex
    }

    // Remove the 0x prefix before conversion
    const cleanHex = hex.slice(2);

    // Check for overflow/invalid lengths
    if (cleanHex.length > 16) {
        console.warn(`Hex string is too large: ${hex}`);
        return BigInt(0); // Handle the large value gracefully
    }

    try {
        return BigInt(hex);
    } catch (error) {
        console.error(`Failed to convert ${hex} to BigInt`, error);
        return BigInt(0); // Return 0 if conversion fails
    }
};

const fetchLogs = async (chain, pairaddress, chunkSize = 100_000) => {
    const logs = [];
    const latestBlockNumber = await viemClients[parseInt(chain)].getBlockNumber();
    let startBlock = parseInt(latestBlockNumber) - 10000;
    const toBlock = parseInt(latestBlockNumber);

    while (startBlock <= toBlock) {
        const endBlock = Math.min(startBlock + chunkSize - 1, toBlock);
        const chunkLogs = await viemClients[parseInt(chain)].getLogs({
            address: pairaddress,
            fromBlock: BigInt(startBlock),
            toBlock: BigInt(endBlock),
        });

        logs.push(...chunkLogs);
        startBlock = endBlock + 1;
    }

    return logs;
};

const Pair = () => {
    const { chain, pairaddress } = useParams();
    const [logs, setLogs] = useState([]);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Trading Volume',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const logsData = await fetchLogs(chain, pairaddress);
                setLogs(logsData);

                // Process data for chart
                const labels = [];
                const data = [];
                logsData.forEach(log => {
                    const blockTimestamp = parseInt(log.blockTimestamp, 16); // Convert timestamp from hex
                    const date = new Date(blockTimestamp * 1000); // Convert to milliseconds
                    labels.push(date.toLocaleString()); // Add formatted date
                    data.push(parseInt(log.data.substring(0, 18), 16)); // Assuming the first 18 characters represent the trade volume
                });

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Trading Volume',
                            data,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            fill: true,
                        },
                    ],
                });
            } catch (error) {
                console.error("Error fetching logs:", error);
            }
        };

        fetchData();
    }, [chain, pairaddress]);

    useWatchContractEvent({
        address: pairaddress,
        abi: poolabi,
        chainId: parseInt(chain),
        config: wagmiconfig,
        eventName: 'Swap',
        onLogs(logs) {
            console.log('New logs!', logs);
            setLogs((prevLogs) => [...prevLogs, ...logs]);
        },
    });

    // Helper function to determine if it's a "Buy" or "Sell"
    const getTradeType = (log) => {
        const data = log.data;
        const topics = log.topics;

        // Assuming token0 is bought if it is the one being swapped from
        const token0Amount = hexToBigInt(data.substring(0, 18)); // Assuming first part of data represents token0 amount
        const token1Amount = hexToBigInt(data.substring(18, 36)); // Assuming next part represents token1 amount

        console.log(`Token0 Amount: ${token0Amount}, Token1 Amount: ${token1Amount}`);

        // Swap is typically: when a user sells token0 to buy token1
        // We can assume token0 is being sold for token1
        if (token0Amount > token1Amount) {
            return 'Sell';  // User is selling token0
        } else if (token1Amount > token0Amount) {
            return 'Buy';  // User is buying token0
        }

        return 'Unknown'; // Unable to determine
    };

    return (
        <div>
            <h1>Pair Logs</h1>
            <div>{logs.length} logs found</div>

            {/* Trading Table */}
            <table>
                <thead>
                    <tr>
                        <th>Block Number</th>
                        <th>Transaction Hash</th>
                        <th>Timestamp</th>
                        <th>Trade Type</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => {
                        const blockTimestamp = parseInt(log.blockTimestamp, 16);
                        const date = new Date(blockTimestamp * 1000).toLocaleString();
                        const tradeType = getTradeType(log);  // Determine if it's a buy or sell
                        return (
                            <tr key={index}>
                                <td>{log.blockNumber}</td>
                                <td>{log.transactionHash}</td>
                                <td>{date}</td>
                                <td>{tradeType}</td>
                                <td>{log.data}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Chart */}
            <div>
                <h2>Trading Volume Over Time</h2>
                <Line data={chartData} />
            </div>
        </div>
    );
};

export default Pair;
