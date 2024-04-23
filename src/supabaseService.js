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
  console.log("plantID", plantId);
  const { data, error } = await supabase
    .from('Notes')
    .select('*')
    .eq('my_plant_id', plantId);

  if (error) throw error;
  console.log(data);
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
    console.error('Error inserting note:', error.message);
    throw error;
  }

  console.log('Inserted note:', data); 
  return data;
};


export { fetchPlantInGreenhouse, fetchNotesForPlant, addNoteForPlant };
