import SampleCamera from "../images/sample_camera.png"; 
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import MiniCalendar from './MiniCalendar.js';
import MyCalendar from './MyCalendar.js';
import PlantCard from './PlantCard.js';
import Notes from './Notes.js';
import Logs from './Logs.js';
import SensorCard from "./SensorCard.js";
import WeatherCard from "./WeatherCard.js";
import PlantCardMyPlants from "./PlantCardMyPlants.js";
import { fetchPlantInGreenhouse, fetchPlantType } from '../supabaseService.js';
import { usePlants } from '../PlantContext';


function LandingPage() {
  const { currentPlant, plantType } = usePlants();
  const [startDate, setStartDate] = useState(new Date());
  const [plantInGreenhouse, setPlantInGreenhouse] = useState([]);
  const [plantInGreenhouseType, setPlantInGreenhouseType] = useState([]);

  useEffect(() => {
    const getMainPlantType = async () => {
      try {
        if (plantType) {
          console.log("LandingPage: Plant Type fetched in plantType:", plantType); 
        }
        if (currentPlant) {
          console.log("LandingPage: Current Plant fetched in plantType:", currentPlant); 
        }
      } 
      catch (error) {
        console.error('LandingPage: Error fetching plant or notes:', error);
      }
    };
  
    getMainPlantType();
  }, [currentPlant, plantType]);


  return (
    <div className="flex flex-row p-2 w-full h-screen bg-[#eff0ec]">
      <div class="flex flex-col w-full">
        <div className="w-full h-4/5">
          <div className="flex flex-row items-center justify-center w-full h-full">
            <div className="w-full h-full">
              <div className="flex flex-col items-center justify-center w-full h-full">
                  <div className="w-full h-1/3">
                  {plantType && currentPlant && (
                      <> 
                        <PlantCardMyPlants
                          info={{ plant: currentPlant}}
                          inGreenhouse = {currentPlant.in_greenhouse}
                          newPlant = {false}
                        ></PlantCardMyPlants>
                      </>
                    )}
                  </div>
                  <div className="w-full h-2/3">
                    <div className="flex flex-row items-center justify-center w-full h-full">
                        <div className="w-2/3 h-full p-1">
                          <div class="w-full h-full bg-white rounded-md">
                            <img class="h-full rounded-md" src="http://raspberrypi.local:8080/?action=stream"></img>
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

export default LandingPage;
