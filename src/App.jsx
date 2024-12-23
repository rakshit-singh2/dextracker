import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navgation from "./Components/Navgation/Navgation";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { ApolloProvider } from "@apollo/client";
import { clients } from "./constants/constants";

const App = () => {
  const [chain, setChain] = useState('1');  // Default to Ethereum chain
  const [swap, setSwap] = useState("UniswapV3");  // Default to UniswapV3
  const [selectedClient, setSelectedClient] = useState(null);

  // Dynamically select the client based on chain and swap
  useEffect(() => {
    const client = clients[chain]?.[swap];
    if (client) {
      setSelectedClient(client);  // Update client when chain or swap changes
    } else {
      console.error(`Apollo client not found for chain ${chain} and swap ${swap}`);
    }
  }, [chain, swap]); // Re-run when chain or swap changes

  return (
    <>
      <header>
        <Navgation setChain={setChain} setSwap={setSwap} />
        <Header setSwap={setSwap} />
      </header>

      {/* Only render ApolloProvider if a valid client is selected */}
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
