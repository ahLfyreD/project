import { Suspense } from 'react';

import LandingPage from './components/landing_page/LandingPage';
import Home from './components/sub_components/Home';
import PageOne from './components/sub_components/pages/PageOne';
import PageTwo from './components/sub_components/pages/PageTwo';
import PageThree from './components/sub_components/pages/PageThree';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './components/sub_components/Home.css';
import './App.css';

function App() {

  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} >
            <Route path="/home/pageone" element={<PageOne />} />
            <Route path="/home/pagetwo" element={<PageTwo />} />
            <Route path="/home/pagethree" element={<PageThree />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
