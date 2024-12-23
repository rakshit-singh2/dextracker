import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navgation from "./Components/Navgation/Navgation";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { ApolloProvider } from "@apollo/client";
import { clients } from "./constants/constants";

const App = () => {

  const [selectedClient, setSelectedClient] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const path= location.pathname.split('/');
    const pathSegments = path[1].split('-');

    if (pathSegments.length === 2) {
      const [swap, chain] = pathSegments;

      const client = clients[chain].graph?.[swap].client;

      if (client) {
        setSelectedClient(client);
      } else {
        console.error(`Apollo client not found for chain ${chain} and swap ${swap}`);
      }
    } else {
      console.log("Path format is incorrect");
    }
  }, [location]);

  return (
    <>
      <header>
        <Navgation />
        {selectedClient ? (<Header />):(<></>)}
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
