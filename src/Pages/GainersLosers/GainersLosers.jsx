import React, { useState } from "react";
import { useQuery, gql } from '@apollo/client';
import TokenRowUniswapV3Etherium from "../../Components/TokenRow/etherium/TokenRowUniswapV3Etherium";

const GainersLosers = () => {
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
        derivedETH
        totalSupply
        volumeUSD
      }
      token1 {
        id
        symbol
        name
        decimals
        totalSupply
        derivedETH
        totalSupply
        volumeUSD
      }
      feeTier
      liquidity
      liquidityProviderCount
      tick
      token0Price
      token1Price
      totalValueLockedUSD
      poolHourData(orderBy: txCount) {
        close
        feesUSD
        high
        id
        liquidity
        low
        open
        periodStartUnix
      }
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
    variables: { first, skip },
  });
  // console.log({ loading, error, data });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const handleNext = async () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevious = async () => {
    setPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div id="page-content-wrapper" className="page-content-wrapper">
      <div className="centercontent container-fluid main-content px-2">
        <div className="col-12">
          <div className="mainchart px-3 px-md-4 py-3 py-lg-4 ">

            <div className="lang-select d-flex justify-content-left">

              <div className="nice-select" tabIndex="0">
                <span className="current"><i className="fa fa-clock-o" aria-hidden="true"></i> Last 24 hours</span>
                <ul className="list">
                  <li data-value="english" className="option selected">English</li>
                  <li data-value="bangla" className="option">Bangla</li>
                  <li data-value="arabic" className="option">Arabic</li>
                </ul>
              </div>


              <button className="gcolor nav-link outline-btn-big py-2 active" id="pills-deep-tab" data-bs-toggle="pill" data-bs-target="#exchange" type="button" role="tab" aria-selected="true"><i className="fa fa-fire" aria-hidden="true"></i> Trending
                <span><a href="#">5M</a></span>
                <span><a href="#">1H</a></span>
                <span><a href="#">6H</a></span>
                <span><a href="#">24H</a></span>
              </button>
              <button className="top gcolor nav-link outline-btn-big py-2 active" id="pills-deep-tab" data-bs-toggle="pill" data-bs-target="#exchange" type="button" role="tab" aria-selected="true"><i className="fa fa-arrow-down" aria-hidden="true"></i> Losers</button>

              <button className="top gcolor nav-link outline-btn-big py-2 active" id="pills-deep-tab" data-bs-toggle="pill" data-bs-target="#exchange" type="button" role="tab" aria-selected="true"><i className="fa fa-bar-chart" aria-hidden="true"></i><b> Volume  </b>$100K</button>

              

              <button className="top gcolor nav-link outline-btn-big py-2 active" id="pills-deep-tab" data-bs-toggle="pill" data-bs-target="#exchange" type="button" role="tab" aria-selected="true"><i className="fa fa-rocket" aria-hidden="true"></i> <b>Liquidity</b> $250K</button>

             

              <button className="top gcolor nav-link outline-btn-big py-2 active" id="pills-deep-tab" data-bs-toggle="pill" data-bs-target="#exchange" type="button" role="tab" aria-selected="true"><i className="fa fa-sliders" aria-hidden="true"></i> Filters</button>

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
                    <th className="fw-bold">Makers</th>
                    <th className="fw-bold">5M</th>
                    <th className="fw-bold">1h</th>
                    <th className="fw-bold">5h</th>
                    <th className="fw-bold">24h</th>
                    <th className="fw-bold">Liquidity</th>
                    <th className="fw-bold">MCAP</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data && data.pools && data.pools.length > 0 ? (
                      data.pools.map((pool, index) => (
                        <TokenRowUniswapV3Etherium key={index} pool={pool} />
                      ))
                    ) : (
                      <tr>
                        <td colSpan="11">No tokens available or loading...</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
              <div className="buttongropu">
                <div>
                  Page {page}
                </div>
                <button className="previous" onClick={handlePrevious}>&laquo; Previous  </button>
                <button className="next" onClick={handleNext}>Next  &raquo;</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GainersLosers;

