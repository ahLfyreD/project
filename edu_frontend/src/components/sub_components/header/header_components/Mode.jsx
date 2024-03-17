import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


const Mode = ({ mode, onClick }) => {

    return (
        <div className='mode_container'>
            <div className='mode_container_content'
                onClick={onClick}
                style={mode ?
                    { justifyContent: 'start', background: '#272a2f' }
                    : { justifyContent: 'end', background: '#f6f6f7' }
                }
            >
                {mode ? <MdDarkMode className='Dark_mode' /> : <CiLight className='light_mode' />}
            </div>
        </div>

    )
}

export default Mode
