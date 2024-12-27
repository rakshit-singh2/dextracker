import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navgation from "./Components/Navgation/Navgation";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { ApolloProvider } from "@apollo/client";
import { clients } from "./constants/constants";
import Home from "./Components/Home/Home";

const App = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split('/')[1]?.split('-') || [];

    if (pathSegments.length === 2) {
      const [swap, chain] = pathSegments;

      // Access client based on chain and swap
      const client = clients?.[chain]?.graph?.[swap]?.client;

      if (client) {
        setSelectedClient(client);
      } else {
        console.error(`Apollo client not found for chain "${chain}" and swap "${swap}"`);
        setSelectedClient(null);
      }
    } else {
      console.warn("Path format is incorrect. Expected format: /swap-chain");
      setSelectedClient(null);
    }
  }, [location]);

  return (
    <>
      <header>
        <Navgation />
      </header>

      {/* Conditional ApolloProvider Rendering */}
      {selectedClient ? (
        <ApolloProvider client={selectedClient}>
          <Outlet />
        </ApolloProvider>
      ) : (
        <Home/>
      )}

      <Footer />
    </>
  );
};

export default App;
