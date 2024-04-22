import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MyPlantsPage from './components/MyPlantsPage';
import IrrigationPage from './components/IrrigationPage';
import LightingPage from './components/LightingPage';
import TestVideoUplaod from './components/TestVideoUplaod';

function NavigationLink() {
  const location = useLocation();

  return (
    <div className="flex flex-col w-full">
      <div className="mb-8 w-full">
        <NavLink
          to="/landingpage"
          className={({ isActive }) =>
            `flex font-medium w-2/3 p-2 ${isActive ? 'bg-[#E5FD99] rounded-md' : 'bg-[#1D4C43]'}`
          }
        >
          {({ isActive }) => (
            <span className={` ${isActive ? 'text-[#1D4C43] font-semibold' : 'text-white font-medium'}`}>
              Home
            </span>
          )}
        </NavLink>
      </div>
      <div className="mb-8 w-full">
        <NavLink
          to="/myplantspage"
          className={({ isActive }) =>
            `flex font-medium w-2/3 p-2 ${isActive ? 'bg-[#E5FD99] rounded-md' : 'bg-[#1D4C43]'}`
          }
        >
          {({ isActive }) => (
            <span className={` ${isActive ? 'text-[#1D4C43] font-semibold' : 'text-white font-medium'}`}>
              My Plants
            </span>
          )}
        </NavLink>
      </div>
      <div className="mb-8 w-full">
        <NavLink
          to="/irrigationpage"
          className={({ isActive }) =>
            `flex font-medium w-2/3 p-2 ${isActive ? 'bg-[#E5FD99] rounded-md' : 'bg-[#1D4C43]'}`
          }
        >
          {({ isActive }) => (
            <span className={` ${isActive ? 'text-[#1D4C43] font-semibold' : 'text-white font-medium'}`}>
              Irrigation
            </span>
          )}
        </NavLink>
      </div>
      <div className="mb-8 w-full">
        <NavLink
          to="/lightingpage"
          className={({ isActive }) =>
            `flex font-medium w-2/3 p-2 ${isActive ? 'bg-[#E5FD99] rounded-md' : 'bg-[#1D4C43]'}`
          }
        >
          {({ isActive }) => (
            <span className={` ${isActive ? 'text-[#1D4C43] font-semibold' : 'text-white font-medium'}`}>
              Lighting
            </span>
          )}
        </NavLink>
      </div>



      
    </div>
  );
}

function App() {
  
  const getNavLinkClass = (isActive) => {
    return isActive 
      ? "font-bold text-[#1D4C43] ml-2 m-1" 
      : "font-medium text-white ml-2 m-1";
  };

  return (
    <Router>
      <div className="App font-iter ">
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

              <NavigationLink />

            </div>
          </div>
          <div className="w-5/6 h-screen bg-[#F3F6F1]">
            {/* Wrap Routes in a Routes element */}
            <Routes>
              <Route path="/" element={<LandingPage />} /> {/* Use element prop instead of component */}
              <Route path="/myplantspage" element={<MyPlantsPage />} /> {/* Use element prop instead of component */}
              <Route path="/irrigationpage" element={<IrrigationPage />} /> {/* Use element prop instead of component */}
              <Route path="/lightingpage" element={<LightingPage />} /> {/* Use element prop instead of component */}
              <Route path="/landingpage" element={<LandingPage />} /> {/* Use element prop instead of component */}
              <Route path="/video" element={<TestVideoUplaod />} /> {/* Use element prop instead of component */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

