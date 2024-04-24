import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import MiniCalendar from './MiniCalendar.js';
import Logs from './Logs.js';
import WeatherCard from "./WeatherCard.js";
import CircularProgressBar from "./CircularProgressBar.js";
import BarChart from './BarChart.js';
import MyCalendar from './MyCalendar.js';
import PlantCard from './PlantCard.js';
import '../App.css';
import axios from 'axios'
import useSensorData from './SensorData.js';
import supabase from '../supabaseClient.js'
import { usePlants } from '../PlantContext';

function LightingPage() {
  const { lightingData } = usePlants();
  const [startDate, setStartDate] = useState(new Date());
  const [irrigationInput, setIrrigationInput] = useState('');
  const { moisture, brightness, data, error } = useSensorData();

  const checkTimeAndInsert = async () => {
    const now = new Date();
    if (now.getMinutes() === 1 && now.getSeconds() === 0) {
      const { data, error } = await supabase
        .from('Lighting_Readings')
        .insert([
          { lighting_timestamp: now.toISOString(), light_sensor_value: moisture,my_plant_type: 1} 
        ]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted on the hour:', data);
      }
    }
  }
  
  const hanldeIrrigationInputChange = (e) => {
    setIrrigationInput(e.target.value);
  };

  const hanldeIrrigationManualOverride = () => {
    console.log('Irrigation Set:', irrigationInput);
    axios.post('http://localhost:8000/send', { data: "b "+irrigationInput })
    .then(response => {
      console.log(response.data); // Log the response from the server
    })
    .catch(error => {
      console.error('Error sending data to server:', error); // Log any errors
    });
  };
  
  checkTimeAndInsert()

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
                        percentage={Math.abs(brightness-255)/255}
                        irrigation = {false} 
                      />
                      <BarChart data={lightingData} irrigation = {false} />
                    </div>
                  </div>

                  <div className="flex flex-row w-full h-1/3">
                    <div className="w-8/12 h-2/5 p-1">
                      <div class="flex items-center w-full h-full bg-white rounded-md p-2">
                        <div class="flex items-center w-full h-full bg-white rounded-md p-8 text-[#7E7E7E]">
                          Set light intensity to 
                          <textarea
                            type="number"
                            className="bg-[#fff6d0] mx-2 resize-none h-8 focus:outline-none p-1 text-[#a2a2a2]"
                            value={irrigationInput}
                            onChange={hanldeIrrigationInputChange}
                          />
                          %
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
              <div className="w-full h-[40%] p-1">
                <div class="w-full h-full bg-white rounded-md p-2">
                  <MyCalendar></MyCalendar>
                </div>
              </div>
              <div className="w-full h-[45%] p-1 ">
                <div class="w-full h-full rounded-md bg-white">
                   <Logs></Logs>
                </div>
              </div>
            </div>
      </div>

    </div>
  );
}

export default LightingPage;
