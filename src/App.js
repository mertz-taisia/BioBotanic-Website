import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Routes from react-router-dom

import LandingPage from './components/LandingPage';
import MyPlantsPage from './components/MyPlantsPage';
import IrrigationPage from './components/IrrigationPage';
import LightingPage from './components/LightingPage';
import TestVideoUplaod from './components/TestVideoUplaod';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="flex flex-row items-center justify-center w-screen h-screen">
          <div className="flex justify-center w-1/6 h-screen bg-[#1D4C43]">
            <div className="text-left items-left w-4/6 mt-8">
              <div className="flex items-center mb-12 text-white">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22" cy="22" r="22" fill="white"/>
                  <path d="M25 16C21.5905 25.4694 18.6386 30.0176 9 35" stroke="#1D4C43" strokeWidth="3"/>
                  <path d="M20.6703 32.6942C35.0447 39.0669 36.0319 20.7093 27.8538 8C10.3964 12.6404 1.91959 23.1351 16.2803 30.7027" stroke="#1D4C43" strokeWidth="3"/>
                </svg>
                <div className="ml-2 text-lg font-bold">biobotanic</div>
              </div>
              <div className="flex items-center bg-[#E5FD99] w-3/4 mb-8 rounded-md">
                <div className="font-bold text-[#1D4C43] ml-4 m-1">
                <Link to="/landingpage" className="font-medium text-white ml-2 m-1">Home</Link>
                </div>
              </div>
              <div className="flex items-center bg-[#1D4C43] w-3/4 mb-8 rounded-md">
                <Link to="/myplants" className="font-medium text-white ml-2 m-1">My Plants</Link>
              </div>
              <div className="flex items-center bg-[#1D4C43] w-3/4 mb-8 rounded-md">
                <Link to="/myirrigation" className="font-medium text-white ml-2 m-1">Irrigation</Link>
              </div>
              <div className="flex items-center bg-[#1D4C43] w-3/4 mb-8 rounded-md">
                <Link to="/mylighting" className="font-medium text-white ml-2 m-1">Lighting</Link>
              </div>
            </div>
          </div>
          <div className="w-5/6 h-screen bg-[#F3F6F1]">
            {/* Wrap Routes in a Routes element */}
            <Routes>
              <Route path="/myplants" element={<MyPlantsPage />} /> {/* Use element prop instead of component */}
              <Route path="/myirrigation" element={<IrrigationPage />} /> {/* Use element prop instead of component */}
              <Route path="/mylighting" element={<LightingPage />} /> {/* Use element prop instead of component */}
              <Route path="/landingpage" element={<LandingPage />} /> {/* Use element prop instead of component */}
              <Route path="/" element={<LandingPage />} /> {/* Use element prop instead of component */}
              <Route path="/video" element={<TestVideoUplaod />} /> {/* Use element prop instead of component */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

