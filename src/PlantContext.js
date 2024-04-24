import React, { createContext, useState, useContext, useEffect } from 'react';
import supabase from './supabaseClient';
import {addNoteForPlant} from './supabaseService';

const PlantContext = createContext();

export const usePlants = () => useContext(PlantContext);

export const PlantProvider = ({ children }) => {
  const [currentPlant, setCurrentPlant] = useState(null);
  const [plantType, setPlantType] = useState(null);
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    fetchPlantInGreenhouse().then(plant => {
      setCurrentPlant(plant);

      if (plant && plant.type) {
        fetchPlantType(plant.type);
      }

      fetchMyPlants();

    }).catch(console.error);
  }, []);

  const fetchPlantType = async (plantTypeId) => {
    const { data, error } = await supabase
      .from('plants')
      .select('*')
      .eq('id', plantTypeId)
      .single();

        
    if (error){ 
        console.log("PlantContext: plant type(error): ", error);
        throw error;
    }

    console.log("PlantContext: plant type: ", data);
    setPlantType(data);
  };

  const fetchPlantInGreenhouse = async () => {
    const { data, error } = await supabase
      .from('my_plants')
      .select('*') 
      .eq('in_greenhouse', true)
      .single();

    if (error){ 
        console.log("PlantContext: plant in greenhouse(error): ", error);
        throw error;
    }
    console.log("PlantContext: plant in greenhouse: ", data);
    return data;
  };

  
  const fetchMyPlants = async () => {
    const { data, error } = await supabase
      .from('my_plants')
      .select('*');

    if (error){ 
        throw error;
    }
    console.log("PlantContext: my plants: ", data);

    setMyPlants(data);
    return data;
  };


  const addNewPlant = async (createdAt, plantNickName, plantTypeId, dateAddedToGreenhouse, intialNote) => {
    try {
      if (typeof intialNote !== 'string' || intialNote.trim() === '') {
          alert('Note is required and must be a string.');
          return;
      }

      const { error: updateError } = await supabase
        .from('my_plants')
        .update({ in_greenhouse: false, date_removed_from_greenhouse: createdAt })
        .eq('in_greenhouse', true); 
        
      if (updateError) {
        throw updateError;
      }
  
      const { data, error } = await supabase
      .from('my_plants')
      .insert([
        { created_at: createdAt, nickname: plantNickName, type: plantTypeId, date_added_to_greenhouse: dateAddedToGreenhouse, in_greenhouse: true, date_removed_from_greenhouse: null, time_lights_on: null }
      ]).select();

      console.log("Data returned from insert:", data);
        
      if (error) {
        console.error("Error inserting data:", error);
        throw error;
      }

      addNoteForPlant(data[0].id, intialNote);
  
  
      return data;
    } 
    catch (error) {
      console.error('Error adding new plant:', error);
      throw error;
    }
  };
  

  return (
    <PlantContext.Provider value={{ currentPlant, setCurrentPlant, plantType, setPlantType, myPlants, addNewPlant }}>
      {children}
    </PlantContext.Provider>
    
  );
};
