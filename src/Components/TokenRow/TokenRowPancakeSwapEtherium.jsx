import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_TOKENS = gql`
  query GetTokens($block: Block_height) {
    tokens(block: $block, first: 10, orderBy: tradeVolumeUSD, orderDirection: desc) {
      id
      symbol
      name
      tradeVolumeUSD
      totalSupply
      reserveUSD
    }
  }
`;

const TokenRowPancakeSwapEtherium = ({ pool }) => {
  const { loading, error, data } = useQuery(GET_TOKENS, {
    variables: { block: pool.blockHeight },
  });

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

  return (
    <tr>
      <td>{data.tokens[0]?.symbol}</td>
      <td>{data.tokens[0]?.name}</td>
      <td>${parseFloat(data.tokens[0]?.tradeVolumeUSD).toFixed(2)}</td>
      <td>{data.tokens[0]?.totalSupply}</td>
      <td>${parseFloat(data.tokens[0]?.reserveUSD).toFixed(2)}</td>
    </tr>
  );
};

export default TokenRowPancakeSwapEtherium;
