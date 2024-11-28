import React from 'react'
import { Outlet } from 'react-router-dom';
import Navgation from './Components/Navgation/Navgation';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <>
      <Navgation/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}
export default App;