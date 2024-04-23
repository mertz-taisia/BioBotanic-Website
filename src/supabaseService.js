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
  // console.log("supabaseService: plant in greenhouse: ", data);
  return data;
};

const fetchNotesForPlant = async (plantId) => {
  console.log("plantID", plantId);
  const { data, error } = await supabase
    .from('Notes')
    .select('*')
    .eq('my_plant_id', plantId);
  
    

  if (error) throw error;
  // console.log("supabaseService: notes for plant: ", data);
  return data;
};

const fetchMyPlants = async () => {
  const { data, error } = await supabase
    .from('my_plants')
    .select('*')
    

  if (error) throw error;
  // console.log("supabaseService: my plants: ", data);
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
    // console.error('Error inserting note:', error.message);
    throw error;
  }

  // console.log("supabaseService: add note: ", data);

  return data;
};


export { fetchPlantInGreenhouse, fetchNotesForPlant, addNoteForPlant, fetchMyPlants, fetchPlantType, fetchPlantTypeByName };
