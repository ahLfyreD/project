import mainLogoWhite from '../../assets/mainLogoWhite.svg'
import { FaXTwitter, FaDiscord, FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="footer_content">
        <div>
          <div className='footer_logo'>
            <img src={mainLogoWhite} alt="logo" />
          </div>
          <button>Contact</button>
        </div>
        <div className='footer_copyright_container'>
          <div className='footer_copyright'>
            © 2024 Keyring Network. All right reserved.
            <div className='footer_policy'>
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service</a>
            </div>
          </div>
          <div className='link_icon'>
            <ul>
              <li><FaXTwitter /></li>
              <li><FaDiscord /></li>
              <li><FaLinkedin /></li>
              <li><FaTelegramPlane /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
