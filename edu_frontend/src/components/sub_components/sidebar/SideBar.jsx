import Logo from '../../../assets/logo.svg'
import { MenuData } from './MenuData'
// import { MenuData } from './SideBarData'
import { NavLink, Link } from "react-router-dom";
import './SideBar.css'

const SideBar = ({ mode }) => {

    const activeLink = "active-link";
    const normalLink = "normal-link";

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
                        {MenuData.map((items, index) => {
                            return (
                                <li
                                    key={index}
                                    // className="nav-item d-block"
                                    style={{ marginBottom: 20 }}
                                >
                                    <NavLink
                                        to={items.path}
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
