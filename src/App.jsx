import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from './pages/landing_page/LandingPage';

import './App.css';

const Home = lazy(() => import('./pages/home_page/Home'))
const CoursePage = lazy(() => import('./pages/course_page/CoursePage'))
const CourseContentPage = lazy(() => import('./pages/course_content_page/CourseContentPage'))


function App() {

  return (
    <Suspense fallback={<div>Loading</div>} >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={
              <Suspense fallback={<div>Loading....</div>}>
                <CoursePage />
              </Suspense>
            } />
            <Route path="/course/:dataId" element={
              <Suspense fallback={<div>Loading....</div>}>
                <CourseContentPage />
              </Suspense>} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
