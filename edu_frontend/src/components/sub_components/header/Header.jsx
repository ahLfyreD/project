import Search from './header_components/Search'
import Mode from './header_components/Mode'
import ContactLink from './header_components/ContactLink'

import './Header.css'


const Header = ({ mode, modal, onClick }) => {
    return (
        <div className='header'>
            <Search
                modal={modal}
                mode={mode}
            />
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Mode
                    mode={mode}
                    onClick={onClick} />
                <ContactLink mode={mode}/>
            </div>

        </div>
    )
}

export default Header
