import React from 'react'
import { Outlet } from 'react-router-dom';
import Navgation from './Components/Navgation/Navgation';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { ApolloProvider } from "@apollo/client";
import { clients } from './constants/constants';

const App = () => {
  return (
    <>
      <Navgation />
      <Header />
      <ApolloProvider client={clients['1'].UniswapV2}>
        <Outlet />
      </ApolloProvider>
      <Footer />
    </>
  )
}
export default App;