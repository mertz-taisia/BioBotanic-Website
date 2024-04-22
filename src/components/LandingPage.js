import SampleCamera from "../images/sample_camera.png"; 
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import MiniCalendar from './MiniCalendar.js';
import PlantCard from './PlantCard.js';
import Notes from './Notes.js';
import Logs from './Logs.js';
import SensorCard from "./SensorCard.js";
import WeatherCard from "./WeatherCard.js";


function LandingPage() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex flex-row p-2 w-full h-screen bg-[#eff0ec]">
      <div class="flex flex-col w-full">
        <div className="w-full h-4/5">
          <div className="flex flex-row items-center justify-center w-full h-full">
            <div className="w-full h-full">
              <div className="flex flex-col items-center justify-center w-full h-full">
                  <div className="w-full h-1/3 p-1">
                    <PlantCard></PlantCard>
                  </div>
                  <div className="w-full h-2/3">
                    <div className="flex flex-row items-center justify-center w-full h-full">
                        <div className="w-2/3 h-full p-1">
                          <div class="w-full h-full bg-white rounded-md">
                            <img class="h-full rounded-md" src={SampleCamera}></img>
                          </div>
                        </div>
                        <div className="w-1/3 h-full p-1">
                          <Notes></Notes>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 p-1">
          <SensorCard></SensorCard>
        </div> 
      </div> 
      
      <div className="w-1/3 h-full">
            <div className="flex flex-col w-full h-full ">
              <div className="w-full h-1/6 p-1 ">
                <WeatherCard></WeatherCard>
              </div>
              <div className="w-full h-2/6 p-1">
                <div class="w-full h-full bg-white rounded-md p-2">
                  <MiniCalendar></MiniCalendar>
                </div>
              </div>
              <div className="w-full h-3/6 p-1">
                <div class="w-full h-full bg-white rounded-md">
                   <Logs></Logs>
                </div>
              </div>
            </div>
          </div>

    </div>
  );
}

export default LandingPage;
