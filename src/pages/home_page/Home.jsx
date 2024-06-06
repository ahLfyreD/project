import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";



import './Home.css'


const Home = () => {

  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
}

export default Home
