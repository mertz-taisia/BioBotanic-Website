import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import MiniCalendar from './MiniCalendar.js';
import Logs from './Logs.js';
import WeatherCard from "./WeatherCard.js";
import CircularProgressBar from "./CircularProgressBar.js";
import SoilMoistureBarChart from './SoilMoistureBarChart';
import MyCalendar from './MyCalendar.js';
import PlantCard from './PlantCard.js';
import '../App.css';


function LightingPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [irrigationInput, setIrrigationInput] = useState('');

  const hanldeIrrigationInputChange = (e) => {
    setIrrigationInput(e.target.value);
  };

  const hanldeIrrigationManualOverride = () => {
    console.log('Irrigation Set:', irrigationInput);
  };
  
  // const [soilMoistureData, setSoilMoistureData] = useState([]);

  const soilMoistureData = [
    { timestamp: "2024-04-21T00:00:00Z", soil_moisture: 20 },
    { timestamp: "2024-04-21T01:00:00Z", soil_moisture: 25 },
    { timestamp: "2024-04-21T02:00:00Z", soil_moisture: 30 },
    { timestamp: "2024-04-21T03:00:00Z", soil_moisture: 35 },
    { timestamp: "2024-04-21T04:00:00Z", soil_moisture: 40 },
    { timestamp: "2024-04-21T05:00:00Z", soil_moisture: 45 },
    { timestamp: "2024-04-21T06:00:00Z", soil_moisture: 50 },
    { timestamp: "2024-04-21T07:00:00Z", soil_moisture: 55 },
    { timestamp: "2024-04-21T08:00:00Z", soil_moisture: 60 },
    { timestamp: "2024-04-21T09:00:00Z", soil_moisture: 65 },
    { timestamp: "2024-04-21T10:00:00Z", soil_moisture: 70 },
    { timestamp: "2024-04-21T11:00:00Z", soil_moisture: 75 },
    { timestamp: "2024-04-21T12:00:00Z", soil_moisture: 80 },
    { timestamp: "2024-04-21T13:00:00Z", soil_moisture: 10 },
    { timestamp: "2024-04-21T14:00:00Z", soil_moisture: 12 },
    { timestamp: "2024-04-21T15:00:00Z", soil_moisture: 30 },
    { timestamp: "2024-04-21T16:00:00Z", soil_moisture: 70 },
    { timestamp: "2024-04-21T17:00:00Z", soil_moisture: 70 },
    { timestamp: "2024-04-21T18:00:00Z", soil_moisture: 69 },
    { timestamp: "2024-04-21T19:00:00Z", soil_moisture: 53 },
    { timestamp: "2024-04-21T20:00:00Z", soil_moisture: 43 },
    { timestamp: "2024-04-21T21:00:00Z", soil_moisture: 23 },
    { timestamp: "2024-04-22T20:00:00Z", soil_moisture: 64 },
    { timestamp: "2024-04-23T20:00:00Z", soil_moisture: 45 },
    { timestamp: "2024-04-24T20:00:00Z", soil_moisture: 5 },
  ];

  return (
    <div className="flex flex-row p-2 w-full h-screen bg-[#eff0ec]">
      <div class="flex flex-col w-full">
              <div className="w-full h-4/5">
                  <div className="w-full h-1/3 p-1">
                    <PlantCard></PlantCard>
                  </div>
                  <div className="w-full h-2/5 p-1">
                    <div class="flex w-full h-full bg-white rounded-md p-6 justify-center items-center">
                      <CircularProgressBar
                        strokeWidth="15"
                        sqSize="185"
                        percentage="30"
                        irrigation = {false} 
                      />
                      <SoilMoistureBarChart data={soilMoistureData} irrigation = {false} />
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-1/3">
                    <div className="w-8/12 h-2/5 p-1">
                      <div class="flex items-center w-full h-full bg-white rounded-md p-2">
                        <div class="flex items-center w-full h-full bg-white rounded-md p-8 text-[#7E7E7E]">
                          Run irrigation system for 
                          <textarea
                            type="number"
                            className="bg-[#fff6d0] mx-2 resize-none h-8 focus:outline-none p-1 text-[#a2a2a2]"
                            value={irrigationInput}
                            onChange={hanldeIrrigationInputChange}
                          />
                          seconds
                        </div>
                      </div>
                    </div>
                    <div className="w-4/12 h-2/5 p-1">
                      <div class="flex justify-center items-center font-medium text-2xl text-white bg-[#FFE57F] w-full h-full rounded-md p-2 cursor-pointer" onClick={hanldeIrrigationManualOverride}>Manual Override</div>
                    </div>
                  </div>
                </div>
          </div>
      
          <div className="w-1/3 h-full">
            <div className="flex flex-col w-full h-full ">
              <div className="w-full h-1/6 p-1 ">
                <WeatherCard></WeatherCard>
              </div>
              <div className="w-full h-auto p-1">
                <div class="w-full h-full bg-white rounded-md p-2">
                  <MyCalendar></MyCalendar>
                </div>
              </div>
              <div className="w-full h-full p-1">
                <div class="w-full h-full bg-white rounded-md">
                   <Logs></Logs>
                </div>
              </div>
            </div>
      </div>

    </div>
  );
}

export default LightingPage;
