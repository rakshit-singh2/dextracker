import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import moment from 'moment'; // To format timestamps

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PriceChart = ({ priceHistory, historyName, historySymbol }) => {
    const [chartData, setChartData] = useState(null);
    console.log("Price H",{priceHistory})
    useEffect(() => {
        console.log(priceHistory);  // Log the priceHistory to verify if it's empty or undefined
        if (priceHistory && priceHistory.length > 0) {
            const labels = priceHistory.map(item => moment(item[0]).format('MMM D, YYYY'));
            const prices = priceHistory.map(item => item[1]);
    
            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: 'Price History',
                        data: prices,
                        borderColor: '#4bc0c0',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true,
                        tension: 0.4,
                    },
                ],
            });
        } else {
            console.error("No price history data available!");
            setChartData(null); // Or show an error message or fallback UI
        }
    }, [priceHistory]);
    

    // If the chart data is still being loaded, show a loading message
    if (!chartData) {
        return <p>Loading chart...</p>;
    }

    return (
        <div className="chart-container">
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Price History Over Time',
                        },
                        tooltip: {
                            mode: 'nearest',
                            intersect: false,
                        },
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Date',
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: historySymbol,
                            },
                            min: 0, // Optional: to set a minimum value for Y axis
                        },
                    },
                }}
            />
        </div>
    );
};

export default PriceChart;
