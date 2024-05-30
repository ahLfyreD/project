import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import './ViewCourse.css'

const ViewCourse = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://keyringproject-data.onrender.com/data');
      console.log(res.data)
      setArticleData(res.data)
    }

    fetchData();
  }, [])


  return (
    <div className='asdef'>
      <div className="course_container">
        <div className="course_title">
          <h3>CHECK OUT ARTICLES</h3>
          <span className='arrow_display'><FaArrowRight /></span>
        </div>

        <div className='row'>
          {articleData.slice(0, 3).map((items, index) => {
            return <>
              {
                items.status === 'publish' ?
                  (
                    <div className="col" key={items.id}>
                      <div className='col_title'>
                        <h3>{items.title}</h3>
                      </div>
                      <div className='col_description'>
                        <div>
                          <p>{items.description}</p>
                        </div>
                        <Link to={`/course/${items.id}`}>
                          <button>Get Started</button>
                        </Link>
                      </div>

                    </div>

                  ) : (
                    <div className="col" key={items.id}>
                      <div className='col_title'>
                        <h3>{items.title}</h3>
                      </div>
                      <div className='col_description'>
                        <div>
                          <p>{items.description}</p>
                        </div>
                        <button>Get Started</button>
                      </div>
                      <div className='overlay'>
                        <h1>Coming Soon</h1>
                      </div>
                    </div>
                  )
              }
            </>

          })}
        </div>
        <div className="more">
          <Link to='/courses'>
            <p>
              <span>See More</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ViewCourse
