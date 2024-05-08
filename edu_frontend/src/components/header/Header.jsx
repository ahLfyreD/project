import { Link } from 'react-router-dom'
import mainLogo from '../../assets/mainLogo.svg'
import mainLogo2 from '../../assets/mainLogoTwo.svg'
import Search from './header_components/Search'
import Mode from './header_components/Mode'
import ContactLink from './header_components/ContactLink'

import './Header.css'
import RegisterButton from './header_components/RegisterButton'


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
                    <RegisterButton />
                </div>
            </div>
        </div>
    )
}

export default Header
