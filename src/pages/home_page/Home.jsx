import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


import './Home.css'


const Home = () => {
  const [mode, setMode] = useState(true)

  const onClick = () => {
    setMode(!mode)
  }

  return (
    <>
      <Header
        mode={mode}
        onClick={onClick}
      />
      <Outlet />
      <Footer />
    </>
  )
}

export default Home
