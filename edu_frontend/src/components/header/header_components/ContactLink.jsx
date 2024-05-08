import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const ContactLink = ({ mode }) => {

    const contactLinkData = [
        {
            icon: <FaXTwitter />,
            path: "https://twitter.com/KeyringNetwork"
        },
        {
            icon: <FaDiscord />,
            path: "https://discord.gg/QRABAMm4uZ"
        },
        {
            icon: <FaLinkedinIn />,
            path: "https://www.linkedin.com/company/keyring-network"
        }
    ]


    return (
        <div className='contact_link'>
            <ul>
                {contactLinkData.map((items, index) => (
                    <li key={index}>
                        <a
                            href={items.path}
                            target='_blank'               
                            className={mode ? 'color' : 'color2'}
                        >
                            {items.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactLink
