import { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios'

import LandingPage from './pages/landing_page/LandingPage';
import Home from './pages/home_page/Home';
import CoursePage from './pages/course_page/CoursePage';
import Register from './pages/register_page/Register';
import CourseContentPage from './pages/course_content_page/CourseContentPage';

import './App.css';


function App() {
  const [courseData, setCourseData] = useState([]);
  const [access, setAccess] = useState('')


  useEffect(() => {
    const fetchData = async () => {

      const { data } = await axios.get('https://keyringproject-data.onrender.com/data');
      setCourseData(data);

      const courseAccess = data.filter(data => data.status === "publish");
      setAccess(courseAccess.length);

    }

    fetchData();
  }, [])

  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={
              <CoursePage
                courseData={courseData}
                access={access}
              />
            } />
            <Route path="/course/:dataId" element={<CourseContentPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
