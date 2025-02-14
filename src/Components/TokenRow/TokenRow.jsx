import React from "react";
import { Link } from "react-router-dom";
import dummy from "../../../public/img/dummyimage.png"


const TokenRow = ({ pool }) => {
  // Extract token data for readability
  const { token0, token1 } = pool.pair;

  // Function to format numbers to 2 decimal places
  const formatNumber = (num) => {
    return num ? num.toFixed(2) : "0.00";
  };

  return (




    <Link className="ds-dex-table-row ds-dex-table-row-top"
      to={`pair/${pool.pair.address}`}
      style={{ textDecoration: "none", color: "inherit" }} // No underline and inherit text color
    >
      <tr>
        <td>
          <img id="logo" src={pool.pair.exchange.logo ? pool.pair.exchange.logo : '/img/dummyimage.png'} />
        </td>
        <td>
          {token0 ? token0.symbol : "N/A"}/{token1 ? token1.symbol : "N/A"}
        </td>
        <td>{formatNumber(pool.price)}</td>
        <td>{formatNumber(pool.price_change_1h)}</td>
        <td>{formatNumber(pool.price_change_4h)}</td>
        <td>{formatNumber(pool.price_change_5min)}</td>
        <td>{formatNumber(pool.price_change_24h)}</td>
        <td>{formatNumber(pool.trades_1h)}</td>
        <td>{formatNumber(pool.trades_1min)}</td>
        <td>{formatNumber(pool.trades_4h)}</td>
        <td>{formatNumber(pool.trades_5min)}</td>
        <td>{formatNumber(pool.trades_12h)}</td>
        <td>{formatNumber(pool.trades_15min)}</td>
        <td>{formatNumber(pool.trades_24h)}</td>
        <td>{formatNumber(pool.volume_1h)}</td>
        <td>{formatNumber(pool.volume_1min)}</td>
        <td>{formatNumber(pool.volume_4h)}</td>
        <td>{formatNumber(pool.volume_5min)}</td>
        <td>{formatNumber(pool.volume_12h)}</td>
        <td>{formatNumber(pool.volume_15min)}</td>
        <td>{formatNumber(pool.volume_24h)}</td>
      </tr>
    </Link>

  );
};

export default TokenRow;
