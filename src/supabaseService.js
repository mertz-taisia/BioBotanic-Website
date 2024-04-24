import supabase from './supabaseClient.js';

let currentPlantCache = null;

const fetchPlantInGreenhouse = async () => {
  if (currentPlantCache) {
    return currentPlantCache; 
  }

  const { data, error } = await supabase
    .from('my_plants')
    .select('id')
    .eq('in_greenhouse', true)
    .single();

  if (error) throw error;
  return data;
};

const fetchNotesForPlant = async (plantId) => {
  const { data, error } = await supabase
    .from('Notes')
    .select('*')
    .eq('my_plant_id', plantId);
  
  if (error) throw error;
  return data;
};

const fetchMyPlants = async () => {
  const { data, error } = await supabase
    .from('my_plants')
    .select('*')
    

  if (error) throw error;
  return data;
};


const addPlantToMyPlants = async (created_at, nickname, type, date_added_to_greenhouse, in_greenhouse) => {
  const { data, error } = await supabase
    .from('my_plants')
    .insert([
      { created_at, nickname, type, date_added_to_greenhouse, in_greenhouse, date_removed_from_greenhouse: null, time_lights_on: null }
    ])
    .select();  
    
  if (error) {
    throw error;
  }

  return data;
};




const fetchPlantType = async (plantTypeId) => {
  const { data, error } = await supabase
    .from('plants')
    .select('*')
    .eq('id', plantTypeId)
    .single();
    

  console.log("supabaseService: plant type: ID ", plantTypeId.type);

  if (error) throw error;
  console.log("supabaseService: plant type: ", data);
  return data;
};

const fetchPlantTypeByName = async (plantTypeName) => {
  const { data, error } = await supabase
    .from('plants')
    .select('*')
    .eq('common_name', plantTypeName)
    .single();


  if (error) throw error;
  console.log("supabaseService: plant type by name: ", data);



  return data;
};


const addNoteForPlant = async (plantId, noteText) => {
  const { data, error } = await supabase
    .from('Notes')
    .insert([
      { note: noteText, my_plant_id: plantId }
    ])
    .select();
  
    
  if (error) {
    throw error;
  }

  return data;
};


export { fetchPlantInGreenhouse, fetchNotesForPlant, addNoteForPlant, fetchMyPlants, fetchPlantType, fetchPlantTypeByName, addPlantToMyPlants };
