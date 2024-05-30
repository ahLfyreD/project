import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { ParseData } from '../../hooks/useParseData'

import './CourseContentPage.css'

const CourseContentPage = () => {
    const [articleData, setArticleData] = useState([]);
    const [titleName, setTitleName] = useState('');
    const [courseData, setCourseData] = useState([]);
    const [gotToNextPage, setGoToNextPage] = useState([])
    const [gotToPrevPage, setGoToPrevPage] = useState(false)

    const { dataId } = useParams()

    useEffect(() => {
        const fetchData = async () => {

            const { data } = await axios.get('https://keyringproject-data.onrender.com/data');

            const courseAccess = data.filter(data => data.status === "publish");
            setCourseData(courseAccess)

        }

        fetchData();
    }, [])

    useEffect(() => {
        const nextPage = (id, myArray) => {
            const currentIndex = myArray.findIndex(d => d.id === id)

            if (currentIndex === -1 || currentIndex === myArray.length - 1) {
                return null
            }

            const nextElement = myArray[currentIndex + 1];

            if (!nextElement) {
                return null
            }
            return nextElement;
        }

        const nextResult = nextPage(parseInt(dataId), courseData)
        setGoToNextPage(nextResult)

        const PrevPage = (id, myArray) => {
            const currentIndex = myArray.findIndex(d => d.id === id)

            if (currentIndex <= 0 || currentIndex >= myArray.length) {
                return null
            }

            return myArray[currentIndex - 1];

        }
        const prevResult = PrevPage(parseInt(dataId), courseData)
        setGoToPrevPage(prevResult)
    }, [])

    console.log(gotToNextPage)


    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://keyringproject-data.onrender.com/data/${dataId}`);
            setTitleName(data.title)
            setArticleData(data.content)
        }
        fetchData();
    }, [])



    useEffect(() => {
        const mainSection = ParseData([articleData]);
        console.log(mainSection)
        document.querySelector(".course").appendChild(mainSection);
    }, [articleData]);





    return (
        <div>
            <div className='course_content_container'>
                <div className='title_header'>
                    <span>
                        <Link to='/courses'>
                            All Articles
                        </Link>
                    </span>
                    &gt;
                    <span>
                        {titleName}
                    </span>
                </div>
                <div className='course_content'>
                    <div style={{ flex: 1 }}>
                        <div className="course"></div>
                        <div className='prev-next'>
                            {gotToPrevPage ? (
                                <div className='pager'>
                                    <Link to={`/course/${gotToPrevPage.id}`}>
                                        <p>Previous Page</p>
                                        <p>{gotToPrevPage.title}</p>
                                    </Link>
                                </div>
                            ) : (
                                <></>
                            )}

                            {gotToNextPage ? (
                                <div className='pager'>
                                    <Link to={`/course/${gotToNextPage.id}`}>
                                        <p>Next Page</p>
                                        <p>{gotToNextPage.title}</p>
                                    </Link>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className='aside'>
                        <div className="aside_container">
                            <span>On this page</span>
                            <ul onClick={(event) => {
                                event.preventDefault();
                                const target = event.target;
                                const id = target.getAttribute('href').replace('#', '')
                                const element = document.getElementById(id)
                                element?.scrollIntoView({
                                    block: 'center',
                                    behavior: 'smooth'
                                })
                            }}
                            >
                                {articleData && articleData.map((items, index) => {
                                    return <li key={index}>
                                        <a href={`#${items.href}`}>
                                            {items.subtitle}
                                        </a>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseContentPage
