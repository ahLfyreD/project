import { Link } from 'react-router-dom'
import mainLogo from '../../assets/mainLogo.svg'
import SiteButton from './header_components/SiteButton'

import './Header.css'



const Header = () => {
    return (
        <div className='header'>
            <div className="header_content">
                <div className="logo_container">
                    <Link to='/'>
                        <img src={mainLogo } alt="logo" />
                    </Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>                   
                    <SiteButton />
                </div>
            </div>
        </div>
    )
}

export default Header
