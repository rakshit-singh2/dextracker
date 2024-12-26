import React from "react";
import { Outlet } from "react-router-dom";
import Navgation from "./Components/Navgation/Navgation";
import Footer from "./Components/Footer/Footer";
import './services.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { wagmiconfig } from './wagmiconfig/wagmiconfig';
const queryClient = new QueryClient();
const Services = () => {
  return (
    <>
      <header>
        <Navgation />
      </header>
      <WagmiProvider config={wagmiconfig}>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </WagmiProvider>
      <Footer />
    </>
  );
};

export default Services;
