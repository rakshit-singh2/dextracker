import React from 'react'
import { gql, useQuery } from '@apollo/client';

const GET_POSITIONS = gql`
  query GetPositions($poolId: ID!) {
    positions(where: { pool: $poolId }) {
      owner
    }
  }
`;
const TokenRow = ({ index, pool }) => {
    const { loading, error, data } = useQuery(GET_POSITIONS, {
        variables: { poolId: pool.id },
    });

    // console.log(pool)
    const currentTimestamp = Math.floor(Date.now() / 1000);

    // Difference in seconds
    const ageInSeconds = currentTimestamp - parseInt(pool.createdAtTimestamp);

    // Calculate years
    const years = Math.floor(ageInSeconds / (365.25 * 24 * 3600));
    const remainingSecondsAfterYears = ageInSeconds % (365.25 * 24 * 3600);

    // Calculate months
    const months = Math.floor(remainingSecondsAfterYears / (30.44 * 24 * 3600));
    const remainingSecondsAfterMonths = remainingSecondsAfterYears % (30.44 * 24 * 3600);

    // Calculate days
    const days = Math.floor(remainingSecondsAfterMonths / (24 * 3600));

    // Calculate hours
    const hours = Math.floor((remainingSecondsAfterMonths % (24 * 3600)) / 3600);


    if (loading)
        return (
            <tr>
                <td colSpan="12" style={{ textAlign: 'center' }}>
                    Loading...
                </td>
            </tr>
        );

    // Error state
    if (error)
        return (
            <tr>
                <td colSpan="12" style={{ textAlign: 'center', color: 'red' }}>
                    Error: {error.message}
                </td>
            </tr>
        );

    const owners = data.positions.map(position => position.owner);
    const uniqueOwners = new Set(owners);
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
            <td>{parseFloat(pool.token0Price).toFixed(6)} {
                pool.token1.symbol.length > 10
                    ? pool.token0.symbol.slice(0, 10) + "..."
                    : pool.token0.symbol
            }</td>
            <td>{years > 0 && years + 'y'} {months > 0 && months + 'm'} {days > 0 && days + 'd'} {hours > 0 && hours + 'h'}</td>
            <td>{pool.swaps.length}</td>
            <td>${parseFloat(pool.volumeUSD).toFixed(2)}</td>
            <td>{uniqueOwners.size}</td>
            <td className="primary">+0.33%</td>
            <td className="text-danger">+1.33%</td>
            <td className="primary">+2.33%</td>
            <td className="primary">+5.33%</td>
            <td>${pool.liquidity}</td>
            <td>$4.1M</td>
        </tr>
    )
}

export default TokenRow