import { useState, useEffect } from 'react';
import Logo from '../../assets/logo.svg'
import axios from 'axios';
import { NavLink, Link } from "react-router-dom";

import './SideBar.css'

const SideBar = ({ mode }) => {

    const [showData, setShowData ] =useState([])

    const activeLink = "active-link";
    const normalLink = "normal-link";

    useEffect(() => {
        const fetchData = async() => {
            const { data } = await axios.get('http://localhost:5000/data/');
            setShowData(data)
        }

        fetchData();
    }, [])


    return (
        <div
            className='navbar'
            style={mode ? { background: '#161618' } : { background: '' }}
        >
            <div className='navbar_container'>
                <div className='navbar_header'
                style={mode ? { background: '#161618' } : { background: 'white' }}>
                    <Link to='/'>
                        <img className='image' src={Logo} alt="" />
                    </Link>
                </div>
                <div className="menu_data">
                    <ul>
                        {showData.map((items, index) => {
                            return (
                                <li
                                    key={index}
                                    // className="nav-item d-block"
                                    style={{ marginBottom: 20 }}
                                >
                                    <NavLink
                                        to={`/home/${items.id}`}
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink}
                                    >
                                        <span
                                            className={mode ? 'color' : 'color2'}
                                        >
                                            {items.title}
                                        </span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar
