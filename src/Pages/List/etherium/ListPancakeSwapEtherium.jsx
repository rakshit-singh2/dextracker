import React, { useState } from "react";
import { useQuery, gql } from '@apollo/client';
import TokenRowPancakeSwapEtherium from "../../Components/TokenRow/etherium/TokenRowPancakeSwapEtherium";

const ListPancakeSwapEtherium = () => {
  const GET_POOLS = gql`
  query GetPools($first: Int!, $skip: Int!) {
    pools(first: $first, skip: $skip, orderDirection: desc) {
      id
      swaps {
        id
        amountUSD
      }
      createdAtTimestamp
      volumeUSD
      sqrtPrice
      token0 {
        id
        symbol
        name
        decimals
        totalSupply
        derivedBNB
        volumeUSD
      }
      token1 {
        id
        symbol
        name
        decimals
        totalSupply
        derivedBNB
        volumeUSD
      }
      feeTier
      liquidity
      liquidityProviderCount
      tick
      token0Price
      token1Price
      totalValueLockedUSD
      poolDayData(orderBy: id) {
        feesUSD
        open
        low
        liquidity
        id
        high
        date
        close
      }
    }
  }
`;

  const [page, setPage] = useState(1);
  const first = 100;
  const skip = (page - 1) * first;

  const { loading, error, data } = useQuery(GET_POOLS, {
    variables: { first, skip }
  });

  console.log({ loading, error, data });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div id="page-content-wrapper" className="page-content-wrapper">
      <div className="centercontent container-fluid main-content px-2">
        <div className="col-12">
          <div className="mainchart px-3 px-md-4 py-3 py-lg-4">
            <div className="sticky-top lang-select d-flex justify-content-left">
              <button className="gcolor nav-link outline-btn-big py-2 active">Top Pools</button>
            </div>

            <div className="pb-2 pt-3 price-table scrollme">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th className="fw-bold">Token</th>
                    <th className="fw-bold">Price</th>
                    <th className="fw-bold">Age</th>
                    <th className="fw-bold">Txns</th>
                    <th className="fw-bold">Volume</th>
                    <th className="fw-bold">Liquidity</th>
                    <th className="fw-bold">MCAP</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data && data.pools && data.pools.length > 0 ? (
                      data.pools.map((pool, index) => (
                        <TokenRowPancakeSwapEtherium key={index} pool={pool} />
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">No tokens available or loading...</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
              <div className="buttongroup">
                <div>Page {page}</div>
                <button className="previous" onClick={handlePrevious}>&laquo; Previous</button>
                <button className="next" onClick={handleNext}>Next &raquo;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPancakeSwapEtherium;
