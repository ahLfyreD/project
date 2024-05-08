import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { ParseData } from '../../hooks/useParseData'

import './CourseContentPage.css'

const CourseContentPage = () => {
    const [articleData, setArticleData] = useState([]);
    const [title, setTitle] = useState('');

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://keyringproject-data.onrender.com/data/${id}`);
            setTitle(data.title)
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
                        {title}
                    </span>
                </div>
                <div className='course_content'>
                    <div style={{ flex: 1 }}>
                        <div className="course"></div>
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
                                {articleData.map((items, index) => {
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
