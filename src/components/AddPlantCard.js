import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

function AddNewPlant( props ) {
  const navigate = useNavigate(); 
  const { type, onPlantTypeChange } = props;
  const { addingNote, onCancelSetAddingNote } = props;
  const { newPlant, onCancelSetNewPlant } = props;


  const [intialNote, setIintialNote] = useState('');
  const [plantNickName, setPlantNickName] = useState('');
  const [plantType, setPlantType] = useState(type);

  const plants = ["Basil", "Snake Plant", "Golden Pathos", "Aloe Vera", "Spider Plant", "Peace Lily", "Moth Orchid", "Marble Pothos", "Echeveria", "Red Prayer Plant", "Garden Corton", "Lavendar"];

  const handleAddPlantClick = () => {
    navigate('/'); 
    alert(`New plant ${plantType} added to Greenhouse with nickname ${plantNickName}`);
    console.log('Plant ', plantType, ' to Greenhouse with nickname ', plantNickName, ' with initial note ', intialNote); 
  };

  const handleIintialNoteChange = (e) => {
    setIintialNote(e.target.value);
  };

  const handlePlantNickNameChange = (e) => {
    setPlantNickName(e.target.value);
  };
  
  const handlePlantTypeChange = (e) => {
    setPlantType(e.target.value);
    console.log('Change plant type to', e.target.value); 
    if (onPlantTypeChange) {
      onPlantTypeChange(e.target.value);
    }
  };
  
  const handleCancelClick = () => {
    onCancelSetAddingNote(false);
    onCancelSetNewPlant(false);
  };

  
  return (
    <div className="flex flex-row p-1 w-full h-[45vh]">
      <div class="flex flex-col h-full w-full bg-white rounded-md">
        <div class = "text-[#7E7E7E] mt-10 flex justify-center items-center text-center text-xl font-bold">Add Plant</div>
        <div class="flex flex-row justify-center w-full ">
          <div class="w-1/2 text-start pl-12 pr-5 py-6">
            <div class="h-full w-full text-start">
              <div class="text-[#7E7E7E]">Nickname</div>
              <textarea
                  className="bg-[#EDEDF0] resize-none w-full h-12 focus:outline-none p-1 text-[#a2a2a2]"
                  value={plantNickName}
                  onChange={handlePlantNickNameChange}
                />
              <div class="text-[#7E7E7E] mt-5">Type</div>
              <select
                className="bg-[#EDEDF0] w-full h-12 focus:outline-none p-1 text-[#a2a2a2]"
                value={plantType}
                onChange={handlePlantTypeChange}
              >
                <option value="">Select a plant type</option>
                {plants.map((plantName) => (
                  <option key={plantName} value={plantName}>{plantName}</option>
                ))}
              </select>
              </div>
          </div>
          <div class="w-1/2 text-start pr-12 pl-5 py-6">
            <div class="flex flex-col h-full w-full text-start justify-start items-star">
              <div class="text-[#7E7E7E]">Initial Note</div>
              <textarea
                  className="bg-[#EDEDF0] resize-none w-full h-32 focus:outline-none p-1 text-[#a2a2a2]"
                  value={intialNote}
                  onChange={handleIintialNoteChange}
                />
                <div class="flex w-full h-full justify-between items-center">
                  <div class="flex bg-[#EDEDF0] w-44 h-10 justify-center items-center font-bold text-[#1D4C43] rounded-3xl cursor-pointer" onClick={handleCancelClick}>Cancel</div>
                  <div class="flex bg-[#1D4C43] w-44 h-10 justify-center items-center font-bold text-white rounded-3xl cursor-pointer" onClick={handleAddPlantClick}>Add</div>
                </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default AddNewPlant;
