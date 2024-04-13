import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage.js';

function App() {
  return (
    <div className="App">
    <div className="flex flex-row items-center justify-center w-screen h-screen">
      <div className="flex justify-center w-1/6 h-screen bg-[#1D4C43]">
        <div class="text-left items-left w-4/6 mt-8">
          <div className="flex items-center mb-12 text-white">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="white"/>
              <path d="M25 16C21.5905 25.4694 18.6386 30.0176 9 35" stroke="#1D4C43" stroke-width="3"/>
              <path d="M20.6703 32.6942C35.0447 39.0669 36.0319 20.7093 27.8538 8C10.3964 12.6404 1.91959 23.1351 16.2803 30.7027" stroke="#1D4C43" stroke-width="3"/>
            </svg>
            <div class="ml-2 text-lg font-bold">biobotanic</div>
          </div>
          <div class="flex items-center bg-[#E5FD99] w-3/4 mb-8 rounded-md">
            <div className="font-bold text-[#1D4C43] ml-4 m-1">
              Home
            </div>
          </div>
          <div class="flex items-center bg-[#1D4C43] w-3/4 mb-8 rounded-md">
            <div className="font-medium text-white ml-2 m-1">
              My Plants
            </div>
          </div>
          <div class="flex items-center bg-[#1D4C43] w-3/4 mb-8 rounded-md">
            <div className="font-medium text-white ml-2 m-1">
              Irrigation
            </div>
          </div>
          <div class="flex items-center bg-[#1D4C43] w-3/4 mb-8 rounded-md">
            <div className="font-medium text-white ml-2 m-1">
              Lighting
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 h-screen bg-[#F3F6F1]">
        <LandingPage></LandingPage>
      </div>
    </div>
    </div>
  );
}

export default App;