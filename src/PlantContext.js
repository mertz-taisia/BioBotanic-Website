import React, { createContext, useState, useContext, useEffect } from 'react';
import supabase from './supabaseClient';

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


  return (
    <PlantContext.Provider value={{ currentPlant, setCurrentPlant, plantType, setPlantType, myPlants }}>
      {children}
    </PlantContext.Provider>
  );
};
