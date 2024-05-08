import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

import './ViewLanding.css'

const ViewLanding = () => {

    const [text] = useTypewriter({
        words: ['Academy'],
        loop: {},
        typeSpeed: 200,
    });

    
    return (
        <div className='landing_body_content'>
            <div className='landing_body_text'>
                <h1>Keyring Network</h1>
                <h1>
                    <span
                        style={{ fontWeight: 'bold' }}
                    >
                        {text}
                    </span>
                    <Cursor cursorStyle='_' />
                </h1>
                <p>
                    {"Experience Compliance Education Redefined"}
                    <br />
                    {"Navigate Complex Regulations with Confidence"}
                    <br />
                    {"Empower Your Institution with Scalable Compliance Solutions"}
                    <br />

                </p>
            </div>
            <Link to='/courses'>
                <button>Get Started</button>
            </Link>
        </div>
    )
}

export default ViewLanding
