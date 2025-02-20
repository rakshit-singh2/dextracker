import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts'; // Import ECharts
import moment from 'moment'; // To format timestamps

const ListTradeChart = ({ priceHistory, historyName, historySymbol }) => {
    const chartRef = useRef(null); // Ref to the chart container

    useEffect(() => {
        if (priceHistory && priceHistory.length > 0) {
            const chartInstance = echarts.init(chartRef.current); // Initialize ECharts instance

            // Format the price history for charting
            const labels = priceHistory.map(item => moment(item.time).format('MMM D, YYYY')); // Use the 'time' field to format date
            const prices = priceHistory.map(item => item.close); // Use the 'close' field for the price

            // Define the chart options
            const chartOptions = {
                title: {
                    text: `${historyName} (${historySymbol}) Price History`,
                    left: 'center',
                    top: 20,
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: (params) => {
                        const date = params[0].axisValueLabel;
                        const price = params[0].data;
                        return `${date}: $${price.toFixed(2)}`;
                    },
                },
                xAxis: {
                    type: 'category',
                    data: labels, // The formatted date labels
                    boundaryGap: false, // Prevent space before the first data point
                    axisLabel: {
                        rotate: 45, // Rotate labels for readability
                    },
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                    axisLabel: {
                        formatter: '{value}', // Format Y-axis labels (optional)
                    },
                },
                series: [
                    {
                        name: 'Price History',
                        type: 'line',
                        data: prices,
                        smooth: true, // Smoothing the line
                        areaStyle: {}, // Optional: filled area below the line
                        lineStyle: {
                            color: '#4cd964', // Line color
                        },
                        itemStyle: {
                            color: '#4cd964', // Data points color
                        },
                    },
                ],
            };

            // Set the chart options
            chartInstance.setOption(chartOptions);

            // Cleanup on component unmount
            return () => {
                chartInstance.dispose(); // Dispose the chart instance when the component unmounts
            };
        }
    }, [priceHistory, historyName, historySymbol]);

    // If no price history is available, show a loading message or error
    if (!priceHistory || priceHistory.length === 0) {
        return <p>No price history available or loading...</p>;
    }

    return (
        <div className="chart-container bg-trasparent" style={{ width: '100%', height: '400px',  backgroundColor: 'transparent'}} ref={chartRef}></div>
    );
};

export default ListTradeChart;
