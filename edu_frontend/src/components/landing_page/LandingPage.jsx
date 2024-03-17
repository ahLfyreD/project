import React from 'react'
import logo from '../../assets/logo.svg';
import image from '../../assets/background.svg';
import { Link } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './LandingPage.css';

const LandingPage = () => {
    const [text] = useTypewriter({
        words: ['Academy'],
        loop: {},
        typeSpeed: 200,
    });

    return (
        <div className='landing_page_container'>
            <div className='landing_page_content'>
                <div className='landing_header'>
                    <div className='title_header'>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="landing_body">
                    <div className='landing_body_content'>
                        <div className='landing_body_text'>
                            <h1>Keyring Network</h1>
                            <h1>
                                <span style={{ fontWeight: 'bold', color: 'rgb(43,222,161)' }}>{text}</span>
                                <Cursor cursorStyle='_' />
                            </h1>
                            <p>
                                {"Acquire the best knowledge in blockchain"}
                                <br />
                                {"Acquire the best knowledge in blockchain"}
                                <br />
                                {"Acquire the best knowledge in blockchain"}
                                <br />

                            </p>
                        </div>
                        <Link to='/home/pagetwo'>
                            <button>Get Started</button>
                        </Link>
                    </div>
                    <div className='landing_body_image'>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className='landing_footer'>
                    <p>copyright 2023</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage