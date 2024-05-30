import './Register.css'

const Register = () => {
  return (
    <div className='register_container'>
      <div className='register_form_container'>
        <h2>Welcome to Keyring Academy</h2>
        <div>
          <form>
            <div className="input_container">
              <input type="email" placeholder='Enter Mail' />
            </div>
            <button style={{ width: '100%' }}>Continue</button>
          </form>
        </div>
        <div className="divider">
          <div className="csdef"></div>
          Or
          <div className="csdef"></div>
        </div>
        <button style={{ width: '100%' }}>Continue with Google</button>
      </div>
    </div>
  )
}

export default Register
