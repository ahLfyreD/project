import { Link } from "react-router-dom";


const RegisterButton = () => {
  return (
    <div className="reg_btn">
      <Link to='/register'>
        <button>Visit Site</button>
      </Link>
    </div>
  )
}

export default RegisterButton
