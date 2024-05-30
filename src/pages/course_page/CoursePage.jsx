import { Link } from 'react-router-dom'


import './CoursePage.css'

const CoursePage = ({ courseData, access }) => {
 
  return (
    <div className='course_page_container'>
      <div className="course_page_content">
        <h2>Articles ({access})</h2>
        <div className="course_page_body">
          {courseData.map((items, index) => {
            return <div className="data_container" key={index}>

              {items.status === 'publish' ?
                (
                  <Link to={`/course/${items.id}`}>
                    <div className="data_content">
                      <h2>{items.title}</h2>
                      <p>{items.description}</p>
                      <p>Date Created: {items.dateCreated}</p>
                    </div>
                  </Link>
                )
                :
                (
                  <>
                    <div className="data_content">
                      <h2>{items.title}</h2>
                      <p>{items.description}</p>
                      <p>Date Created: {items.dateCreated}</p>
                    </div>
                    <div className='overlay'>
                      <h1>Coming Soon</h1>
                    </div>
                  </>
                )
              }
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default CoursePage
