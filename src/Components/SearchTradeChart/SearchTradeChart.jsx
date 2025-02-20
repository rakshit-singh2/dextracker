import React, { useEffect, useRef } from 'react';
import TradingViewWidget from 'react-tradingview-widget';

const SearchTradeChart = ({ priceHistory, historyName, historySymbol }) => {
    return (
        <div className='mt-3' style={{ width: '100%', height: '400px' }}>
            <TradingViewWidget
                symbol={historySymbol} // The symbol to display (e.g., 'NASDAQ:AAPL')
                interval="D" // Default interval (daily chart)
                autosize
                theme="light" // You can also set to 'dark' for dark mode
                locale="en" // Set the locale (language)
                range="YTD" // Optional: range of the chart (for example, 'YTD' for year-to-date)
            />
        </div>
    );
};

export default SearchTradeChart;
