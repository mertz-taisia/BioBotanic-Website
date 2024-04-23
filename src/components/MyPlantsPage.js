import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Logs from './Logs.js';
import WeatherCard from "./WeatherCard.js";
import PlantCardMyPlants from './PlantCardMyPlants.js';
import MyCalendar from './MyCalendar.js';
import NewPlantCard from './NewPlantCard.js';
import AddPlantCard from './AddPlantCard.js';
import '../App.css';
import { fetchPlantTypeByName } from '../supabaseService.js';
import { usePlants } from '../PlantContext';


function MyPlantsPage() {
  const { myPlants} = usePlants();
  const [addingNote, setAddingNote] = useState(false);
  const [newPlant, setNewPlant] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [newPlantType, setNewPlantType] = useState();

  const handlePlantTypeChange = async (swapToType) => {
    console.log('Changing Plant Type');
    setNewPlant(true);
    try {
        const plantTypeData = await fetchPlantTypeByName(swapToType);
        setNewPlantType(plantTypeData);
        console.log('New plant type: ', plantTypeData);
    } catch (error) {
        console.error('Failed to fetch plant type by name:', error);
    }
};



  const handleAddNoteClick = () => {
    console.log('Add Note Clicked'); 
    setAddingNote(true);
  };
  

  const handleNewPlantClick = async (type) => {
      console.log('Adding New Plant');
      setNewPlant(true);
      try {
          const plantTypeData = await fetchPlantTypeByName(type);
          setNewPlantType(plantTypeData);
          console.log('New plant type: ', plantTypeData);
      } catch (error) {
          console.error('Failed to fetch plant type by name:', error);
      }
  };

  useEffect(() => {
    console.log("PlantCardMyPlants newPlantType", newPlantType);
  }, [newPlantType]);

  const handleNoteChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveNote = () => {
    console.log('Saving note:', noteText);
    setAddingNote(false);
  };

  return (
    <div className="flex flex-row p-2 w-full h-screen bg-[#eff0ec]">
      <div class="flex flex-col w-full">
        {newPlant ? (<div class="h-full">
        {newPlantType && (
                      <> 
                        <PlantCardMyPlants
                        key={newPlantType ? newPlantType.id : 'default-key'}
                        info={{ plant: newPlantType}}
                        inGreenhouse = {false}
                        newPlant = {true}
                        ></PlantCardMyPlants>
                      </>
                    )}
            
            {newPlantType && (
              <AddPlantCard type={newPlantType.common_name} newPlant={newPlant} addingNote={addingNote} onPlantTypeChange={handlePlantTypeChange} onCancelSetNewPlant = {setNewPlant} onCancelSetAddingNote = {setAddingNote} />
            )}
            </div>):(<div class="h-full">
                {addingNote ? (
                  <div class="h-full overflow-x-auto scrollable-area">
                      <div class="flex flex-row">
                        <NewPlantCard info={{ type: "Basil"}} onClick={() => handleNewPlantClick("Basil")}></NewPlantCard>
                        <NewPlantCard info={{ type: "Snake Plant"}}  onClick={() => handleNewPlantClick("Snake Plant")}></NewPlantCard>
                        <NewPlantCard info={{ type: "Golden Pathos"}}  onClick={() => handleNewPlantClick("Golden Pathos")}></NewPlantCard>
                        <NewPlantCard info={{ type: "Aloe Vera"}}  onClick={() => handleNewPlantClick("Aloe Vera")}></NewPlantCard>
                      </div>
                      <div class="flex flex-row">
                          <NewPlantCard info={{ type: "Spider Plant"}} onClick={() => handleNewPlantClick("Spider Plant")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Peace Lily"}} onClick={() => handleNewPlantClick("Peace Lily")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Moth Orchid"}} onClick={() => handleNewPlantClick("Moth Orchid")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Marble Pothos"}} onClick={() => handleNewPlantClick("Marble Pothos")}></NewPlantCard>
                      </div>
                      <div class="flex flex-row">
                          <NewPlantCard info={{ type: "Echeveria"}} onClick={() => handleNewPlantClick("Echeveria")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Red Prayer Plant"}} onClick={() => handleNewPlantClick("Red Prayer Plant")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Garden Croton"}} onClick={() => handleNewPlantClick("Garden Croton")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Lavender"}} onClick={() => handleNewPlantClick("Lavendar")}></NewPlantCard>
                      </div>
                      <div class="flex flex-row">
                          <NewPlantCard info={{ type: "Echeveria"}} onClick={() => handleNewPlantClick("Echeveria")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Red Prayer Plant"}} onClick={() => handleNewPlantClick("Red Prayer Plant")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Garden Croton"}} onClick={() => handleNewPlantClick("Garden Croton")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Lavender"}} onClick={() => handleNewPlantClick("Lavendar")}></NewPlantCard>
                      </div>
                      <div class="flex flex-row">
                          <NewPlantCard info={{ type: "Echeveria"}} onClick={() => handleNewPlantClick("Echeveria")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Red Prayer Plant"}} onClick={() => handleNewPlantClick("Red Prayer Plant")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Garden Croton"}} onClick={() => handleNewPlantClick("Garden Croton")}></NewPlantCard>
                          <NewPlantCard info={{ type: "Lavender"}} onClick={() => handleNewPlantClick("Lavendar")}></NewPlantCard>
                      </div>
                  </div>
                  ) : (
                    <div class="h-full">
                      <div class="h-5/6 overflow-x-auto scrollable-area">
                        {myPlants.map((myPlant) => (
                        <PlantCardMyPlants
                                  info={{ plant: myPlant}}
                                  inGreenhouse = {myPlant.in_greenhouse}
                                  newPlant = {false}
                        ></PlantCardMyPlants>
                        ))}                                
                        </div>
                      <div className="flex justify-center items-center w-full h-[15vh] p-1">
                        <div class="flex flex-row w-full h-full justify-center items-center bg-white rounded-md p-2">
                            
                              <div  className="flex justify-center w-full items-center h-full border-2 border-[#BABABA] border-dashed rounded-md p-2 cursor-pointer"
                                onClick={handleAddNoteClick}
                              >
                                <div className="flex flex-row items-center w-full h-full p-4">
                                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="25" cy="25" r="24.5" stroke="#BABABA"/>
                                  <mask id="path-2-inside-1_0_1" fill="white">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M29.1661 12.5H20.8327V22.2224H11.1094L11.1094 30.5557H20.8327V38.8889H29.1661V30.5557H38.8872V22.2224H29.1661V12.5Z"/>
                                  </mask>
                                  <path d="M20.8327 12.5V11.5H19.8327V12.5H20.8327ZM29.1661 12.5H30.1661V11.5H29.1661V12.5ZM20.8327 22.2224V23.2224H21.8327V22.2224H20.8327ZM11.1094 22.2224V21.2224H10.1094L10.1094 22.2224L11.1094 22.2224ZM11.1094 30.5557L10.1094 30.5557L10.1094 31.5557H11.1094V30.5557ZM20.8327 30.5557H21.8327V29.5557H20.8327V30.5557ZM20.8327 38.8889H19.8327V39.8889H20.8327V38.8889ZM29.1661 38.8889V39.8889H30.1661V38.8889H29.1661ZM29.1661 30.5557V29.5557H28.1661V30.5557H29.1661ZM38.8872 30.5557V31.5557H39.8872V30.5557H38.8872ZM38.8872 22.2224H39.8872V21.2224H38.8872V22.2224ZM29.1661 22.2224H28.1661V23.2224H29.1661V22.2224ZM20.8327 13.5H29.1661V11.5H20.8327V13.5ZM21.8327 22.2224V12.5H19.8327V22.2224H21.8327ZM11.1094 23.2224H20.8327V21.2224H11.1094V23.2224ZM12.1094 30.5557L12.1094 22.2224L10.1094 22.2224L10.1094 30.5557L12.1094 30.5557ZM20.8327 29.5557H11.1094V31.5557H20.8327V29.5557ZM21.8327 38.8889V30.5557H19.8327V38.8889H21.8327ZM29.1661 37.8889H20.8327V39.8889H29.1661V37.8889ZM28.1661 30.5557V38.8889H30.1661V30.5557H28.1661ZM38.8872 29.5557H29.1661V31.5557H38.8872V29.5557ZM37.8872 22.2224V30.5557H39.8872V22.2224H37.8872ZM29.1661 23.2224H38.8872V21.2224H29.1661V23.2224ZM28.1661 12.5V22.2224H30.1661V12.5H28.1661Z" fill="#BABABA" mask="url(#path-2-inside-1_0_1)"/>
                                </svg>
                                  <div className="text-[#BABABA] italic ml-4">
                                    Add Plant
                                  </div>
                                </div>
                              </div>
                      </div>
                      </div>
                
                        
                </div>
                  )}  
                  </div>)}
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

export default MyPlantsPage;
