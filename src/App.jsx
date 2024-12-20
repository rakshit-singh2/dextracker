import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navgation from "./Components/Navgation/Navgation";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { ApolloProvider } from "@apollo/client";
import { clients } from "./constants/constants";

const App = () => {
  const [chain, setChain] = useState('etherium');  // Default to Ethereum chain
  const [swap, setSwap] = useState("uniswapv3");  // Default to UniswapV3
  const [selectedClient, setSelectedClient] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1); // Remove leading slash
    const pathSegments = path.split('-'); // Split by hyphen

    if (pathSegments.length === 2) {
      const [swap, chain] = pathSegments;
      setChain(swap);
      setSwap(chain);
    } else {
      console.log("Path format is incorrect");
    }
  }, [location]);

  useEffect(() => {
    const client = clients[chain].graph?.[swap];
    if (client) {
      setSelectedClient(client);  // Update client when chain or swap changes
    } else {
      console.error(`Apollo client not found for chain ${chain} and swap ${swap}`);
    }
  }, [location]); // Re-run when chain or swap changes

  return (
    <>
      <header>
        <Navgation/>
        <Header/>
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
