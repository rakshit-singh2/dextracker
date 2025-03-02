import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useParams } from 'react-router-dom';
import poolabi from '../../constants/poolabi.json';
import { useWatchContractEvent } from 'wagmi';
import { wagmiconfig, viemClients } from '../../wagmiconfig/wagmiconfig';
import { decodeEventLog } from 'viem';

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
                    const blockTimestamp = parseInt(log.blockTimestamp, 16);
                    const date = new Date(blockTimestamp * 1000);
                    labels.push(date.toLocaleString());
                    data.push(parseInt(log.data.substring(0, 18), 16));
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
        abi: [
            {
                anonymous: false,
                inputs: [
                    { indexed: true, internalType: "address", name: "sender", type: "address" },
                    { indexed: true, internalType: "address", name: "recipient", type: "address" },
                    { indexed: false, internalType: "int256", name: "amount0", type: "int256" },
                    { indexed: false, internalType: "int256", name: "amount1", type: "int256" },
                    { indexed: false, internalType: "uint160", name: "sqrtPriceX96", type: "uint160" },
                    { indexed: false, internalType: "uint128", name: "liquidity", type: "uint128" },
                    { indexed: false, internalType: "int24", name: "tick", type: "int24" },
                ],
                name: "Swap",
                type: "event",
            },
        ],
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
        console.log({ log })
        const { data, topics } = log;
        console.log({ data, topics })
    
        try {
            const decodedLog = decodeEventLog({
                abi: [
                    {
                        anonymous: false,
                        inputs: [
                            { indexed: true, internalType: "address", name: "sender", type: "address" },
                            { indexed: true, internalType: "address", name: "recipient", type: "address" },
                            { indexed: false, internalType: "int256", name: "amount0", type: "int256" },
                            { indexed: false, internalType: "int256", name: "amount1", type: "int256" },
                            { indexed: false, internalType: "uint160", name: "sqrtPriceX96", type: "uint160" },
                            { indexed: false, internalType: "uint128", name: "liquidity", type: "uint128" },
                            { indexed: false, internalType: "int24", name: "tick", type: "int24" },
                        ],
                        name: "Swap",
                        type: "event",
                    },
                ],
                data,
                topics,
            });
    
            console.log({ decodedLog });
            const { amount0, amount1 } = decodedLog.args;
    
            // Determine trade type based on the amounts
            return amount0 > 0 ? "Buy" : "Sell";
        } catch (error) {
            console.error("Failed to decode event log:", error);
            return "Unknown";
        }
    };
    

    return (
        <div>
            <h1>Pair Logs</h1>
            <div>{logs.length} logs found</div>

            {/* Trading Table */}
            <table style={{ marginLeft: '400px', overflowX: 'auto', whiteSpace: 'nowrap', width: '300px', border: '1px solid #ccc' }}>
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
                    {/* {logs.map((log, index) => {
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
                    })} */}
                    {logs.length>1 && <tr>
                                <td>{logs[1].blockNumber}</td>
                                <td>{logs[1].transactionHash}</td>
                                <td>{new Date(parseInt(logs[1].blockTimestamp, 16) * 1000).toLocaleString()}</td>
                                <td>{getTradeType(logs[1])}</td>
                                <td>{logs[1].data}</td>
                            </tr>}
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
