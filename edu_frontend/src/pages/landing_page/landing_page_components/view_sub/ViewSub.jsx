import './ViewSub.css'
import { CiMail } from "react-icons/ci";

const ViewSub = () => {
    return (
        <div className='asderfg'>
            <div className="sub_container">
                <div className="sub_content">
                    <div className='text_content'>
                        <CiMail style={{ fontSize: '30px', marginRight: '10px' }} />
                        <h2>Get the latest Update to your mail</h2>
                    </div>
                    <form className=''>
                        <div className="form_shell">
                            <input type="email" placeholder='Enter Your Email Here'/>
                            <button>Subscribe</button>
                        </div>
                        <div className="check_box">
                            <input type="checkbox" />
                            <p>I have read and agree to the Keyring <span>terms and condition</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ViewSub
