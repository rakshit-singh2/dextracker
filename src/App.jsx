import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navgation from "./Components/Navgation/Navgation";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { ApolloProvider } from "@apollo/client";
import { clients } from "./constants/constants";

const App = () => {
  const [chain, setChain] = useState('1');
  const [swap, setSwap] = useState("UniswapV3");
  console.log({ chain, swap })
  const selectedClient = clients[chain]?.[swap];
  console.log({ selectedClient })
  if (!selectedClient) {
    console.error(`Apollo client not found for chain ${chain} and swap ${swap}`);
  }

  return (
    <>
      <header>
        <Navgation setChain={setChain} setSwap={setSwap} />
        <Header setSwap={setSwap} />
      </header>
      {selectedClient ? (
        <ApolloProvider client={selectedClient}>
          <Outlet />
        </ApolloProvider>
      ) : (
        <div>Error: Apollo client is not available for the selected configuration.</div>
      )}
      <Footer />
    </>
  );
};

export default App;
