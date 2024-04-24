import React, { createContext, useState, useContext, useEffect } from 'react';
import supabase from './supabaseClient';
import {addNoteForPlant} from './supabaseService';

const PlantContext = createContext();

export const usePlants = () => useContext(PlantContext);

export const PlantProvider = ({ children }) => {
  const [currentPlant, setCurrentPlant] = useState(null);
  const [plantType, setPlantType] = useState(null);
  const [myPlants, setMyPlants] = useState([]);
  const [irrigationData, setIrrigationData] = useState([]);
  const [lightingData, setLightingData] = useState([]);
  const [logData, setLogData] = useState([]);


  useEffect(() => {
    fetchPlantInGreenhouse().then(plant => {
      setCurrentPlant(plant);
      if (plant && plant.type) {
        fetchPlantType(plant.type);
      }
      fetchMyPlants();
    }).catch(console.error);
  }, []);

  useEffect(() => {
    if (currentPlant) {
      getIrrigationReadings();
      getLightingReadings();
      fetchLogs();
    }
  }, [currentPlant]);

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

  const getIrrigationReadings = async () => {
    if (currentPlant && currentPlant.id) {
      try {
        // Fetch the most recent 24 readings in descending order
        const { data, error } = await supabase
          .from('irrigation_readings')
          .select('moisture_timestamp, moisture_sensor_value')
          .eq('my_plant_type', currentPlant.id)
          .order('moisture_timestamp', { ascending: false })
          .limit(24);  
  
        if (error) {
          console.error("Error fetching irrigation data:", error);
        } else {
          // Reverse the data to make it chronological
          const chronologicalData = data.reverse();
          console.log("Fetched irrigation data:", chronologicalData);
          setIrrigationData(chronologicalData);  // Update your state with the chronologically ordered data
        }
      } catch (error) {
        console.error("Error in getIrrigationReadings:", error);
      }
    } else {
      console.log("Current plant or plant ID not set");
    }
  }
  
  

  const getLightingReadings = async () => {
    if (currentPlant && currentPlant.id) {
      try {
        // Fetch the most recent 24 readings in descending order
        const { data, error } = await supabase
          .from('lighting_readings')
          .select('lighting_timestamp, light_sensor_value')
          .eq('my_plant_type', currentPlant.id)
          .order('lighting_timestamp', { ascending: false })
          .limit(24);
  
        if (error) {
          console.error("Error fetching lighting data:", error);
        } else {
          // Reverse the data array to make it chronological
          const chronologicalData = data.reverse();
          console.log("Fetched lighting data:", chronologicalData);
          setLightingData(chronologicalData);  // Update your state with the chronologically ordered data
        }
      } catch (error) {
        console.error("Error in getLightingReadings:", error);
      }
    } else {
      console.log("Current plant or plant ID not set");
    }
  }
  
  


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
  

  
  const fetchLogs = async () => {
    if (currentPlant && currentPlant.id) {
      try {
        // Fetch the most recent 20 readings in descending order
        const { data, error } = await supabase
        .from('logs')
        .select('*') 
        .eq('my_plant_id', currentPlant.id)
        .order('created_at', { ascending: false })
        .limit(20);   

  
        if (error) {
          console.error("Error fetching log data:", error);
        } 
        else {
          // Reverse the data to make it chronological
          const chronologicalData = data.reverse();
          console.log("Fetched log data:", chronologicalData);
          setLogData(chronologicalData); 
        }
      } catch (error) {
        console.error("Error in log data:", error);
      }
    } else {
      console.log("Current plant or plant ID not set");
    }
  }
  

  return (
    <PlantContext.Provider value={{ currentPlant, setCurrentPlant, plantType, setPlantType, myPlants, addNewPlant, irrigationData, lightingData, logData }}>
      {children}
    </PlantContext.Provider>
    
  );
};
