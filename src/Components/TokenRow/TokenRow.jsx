import React from "react";

const TokenRow = ({ pool }) => {
  // Extract token data for readability
  const { token0, token1 } = pool.pair;


  return (
    <tr>
      <td>{pool.pair.exchange.name == 'Unknown'?
      <><img src='/img/dummyimage.png'/>{pool.pair.exchange.name}</>:<><img src={pool.pair.exchange.logo}/>{pool.pair.exchange.name}</>}</td>
      <td>{token0 ? token0.symbol : 'N/A'}/{token1 ? token1.symbol : 'N/A'}</td>
      <td>{pool.price}</td>
      <td>{pool.price_change_1h}</td>
      <td>{pool.price_change_4h}</td>
      <td>{pool.price_change_5min}</td>
      <td>{pool.price_change_24h}</td>
      <td>{pool.trades_1h}</td>
      <td>{pool.trades_1min}</td>
      <td>{pool.trades_4h}</td>
      <td>{pool.trades_5min}</td>
      <td>{pool.trades_12h}</td>
      <td>{pool.trades_15min}</td>
      <td>{pool.trades_24h}</td>
      <td>{pool.volume_1h}</td>
      <td>{pool.volume_1min}</td>
      <td>{pool.volume_4h}</td>
      <td>{pool.volume_5min}</td>
      <td>{pool.volume_12h}</td>
      <td>{pool.volume_15min}</td>
      <td>{pool.volume_24h}</td>
    </tr>
  );
};

export default TokenRow;
