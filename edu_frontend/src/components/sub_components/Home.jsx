import { Outlet } from "react-router-dom";
import { useState } from "react";

import SideBar from './sidebar/SideBar';
import Header from "./header/Header";
import SearchModal from "./search_modal/SearchModal";

import './Home.css'


const Home = () => {
  const [modal, setModal] = useState(false);
  const [mode, setMode] = useState(false);



  return (
    <div className='home_container'>
      <div className='home_container_content'>
        <SideBar mode={mode}/>
        <div className="contents"
          style={mode ? { background: '#1b1b1f' } : { background: '' }}>
          <Header
            modal={() => setModal(true)}
            onClick={() => setMode(!mode)}
            mode={mode}
          />
          <Outlet />
        </div>
      </div>
      {modal && (
        <SearchModal
          closeModal={() => setModal(false)}
          mode={mode}
        />
      )}
    </div>
  )
}

export default Home
