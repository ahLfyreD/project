import { useTypewriter, Cursor } from 'react-simple-typewriter';

import './ViewImage.css'

const ViewImage = () => {

  const [text] = useTypewriter({
    words: ['Empowering Institutions', 'Ensuring Compliance', 'One Blockchain at a Time'],
    loop: {},
    typeSpeed: 200,
  });

  return (
    <div className='asde'>
      <div className="text_container">
        <h1>COMPLIANCE MEETS <br /> BLOCKCHAIN INNOVATION</h1>
        <h2>
          <span
            style={{ fontWeight: 'bold' }}
          >
            {text}
          </span>
          <Cursor cursorStyle='_' />
        </h2>
      </div>
    </div>
  )
}

export default ViewImage
