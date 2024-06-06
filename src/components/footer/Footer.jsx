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
          <button>
            <a href="https://www.keyring.network/contact" target='blank'>Contact</a>
          </button>
        </div>
        <div className='footer_copyright_container'>
          <div className='footer_copyright'>
            <div>
              © 2024 Keyring Network. All right reserved.
            </div>
            <div className='footer_policy'>
              <a href="https://www.keyring.network/privacy" target='blank'>Privacy Policy</a>
              <a href="https://www.keyring.network/terms" target='blank'>Terms of Service</a>
            </div>
          </div>
          <div className='link_icon'>
            <ul>
              <li>
                <a href="https://twitter.com/KeyringNetwork" target='blank'>
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/QRABAMm4uZ" target='blank'>
                  <FaDiscord />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/keyring-network" target='blank'>
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
