import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_POSITIONS = gql`
  query GetPositions($poolId: ID!) {
    positions(where: { pool: $poolId }) {
      owner
    }
  }
`;

const TokenRowUniswapV3Base = ({ pool }) => {
  const { loading, error, data } = useQuery(GET_POSITIONS, {
    variables: { poolId: pool.id },
  });

  const currentTimestamp = Math.floor(Date.now() / 1000);

  // Calculate pool age
  const ageInSeconds = currentTimestamp - parseInt(pool.createdAtTimestamp);
  const years = Math.floor(ageInSeconds / (365.25 * 24 * 3600));
  const months = Math.floor((ageInSeconds % (365.25 * 24 * 3600)) / (30.44 * 24 * 3600));
  const days = Math.floor(((ageInSeconds % (365.25 * 24 * 3600)) % (30.44 * 24 * 3600)) / (24 * 3600));
  const hours = Math.floor(((ageInSeconds % (365.25 * 24 * 3600)) % (30.44 * 24 * 3600)) % (24 * 3600) / 3600);

  if (loading)
    return (
      <tr>
        <td colSpan="12" style={{ textAlign: "center" }}>
          Loading...
        </td>
      </tr>
    );

  if (error)
    return (
      <tr>
        <td colSpan="12" style={{ textAlign: "center", color: "red" }}>
          Error: {error.message}
        </td>
      </tr>
    );

  // Calculate fee differences
  function calculateFeeDifferences(poolHourData, currentTimestamp) {
    const poolData = [...poolHourData].sort((a, b) => parseFloat(a.periodStartUnix) - parseFloat(b.periodStartUnix));
    const timePeriods = { "24h": 86400, "5h": 18000, "1h": 3600, "5min": 300 };

    const latestFees = parseFloat(poolData[poolData.length - 1]?.feesUSD || 0);
    let feeDifferences = {};

    for (const [period, seconds] of Object.entries(timePeriods)) {
      const targetTimestamp = currentTimestamp - seconds;
      const closestEntry = poolData.slice().reverse().find((entry) => entry.periodStartUnix <= targetTimestamp);

      if (closestEntry) {
        const previousFees = parseFloat(closestEntry.feesUSD || 0);
        feeDifferences[period] =
          previousFees === 0 ? 0 : ((latestFees - previousFees) / previousFees) * 100;
      } else {
        feeDifferences[period] = 0;
      }
    }

    return feeDifferences;
  }

  const differences = calculateFeeDifferences(pool.poolHourData, currentTimestamp);

  // Unique Owners
  const owners = data.positions.map((position) => position.owner);
  const uniqueOwners = new Set(owners);

  // Render differences
  const renderDifference = (value) => {
    if (value === 0) return <td>{value.toFixed(2)}%</td>;
    if (value > 0) return <td className="primary">+{value.toFixed(2)}%</td>;
    return <td className="text-danger">{value.toFixed(2)}%</td>;
  };

  return (
    <tr>
      <td className="d-flex align-items-center gap-2">
                <img src={`img/crypto/bitcoin.png`} alt="" />
                {
                    pool.token0.symbol.length > 10
                        ? pool.token1.symbol.slice(0, 10) + "..."
                        : pool.token1.symbol
                }
                /
                {
                    pool.token1.symbol.length > 10
                        ? pool.token0.symbol.slice(0, 10) + "..."
                        : pool.token0.symbol
                }
            </td>
      <td>
        {parseFloat(pool.token0Price).toFixed(5)} {pool.token1.symbol}
      </td>
      <td>
        {years > 0 && `${years}y`} {months > 0 && `${months}m`} {days > 0 && `${days}d`} {hours > 0 && `${hours}h`}
      </td>
      <td>{pool.swaps.length}</td>
      <td>${parseFloat(pool.volumeUSD).toFixed(2)}</td>
      <td>{uniqueOwners.size}</td>
      {renderDifference(differences["5min"])}
      {renderDifference(differences["1h"])}
      {renderDifference(differences["5h"])}
      {renderDifference(differences["24h"])}
      <td>${parseFloat(pool.liquidity).toFixed(2)}</td>
      <td>$4.1M</td>
    </tr>
  );
};

export default TokenRowUniswapV3Base;
