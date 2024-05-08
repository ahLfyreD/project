import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from './pages/landing_page/LandingPage';
import Home from './pages/home_page/Home';
import CoursePage from './pages/course_page/CoursePage';
import Register from './pages/register_page/Register';
import CourseContentPage from './pages/course_content_page/CourseContentPage';

import './App.css';


function App() {

  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/course/:id" element={<CourseContentPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
