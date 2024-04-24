import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient'; 

function FetchData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data: itemsData, error } = await supabase
          .from('my_plants')
          .select('*');

  
        if (error) throw error;
        console.log('itemsData:', itemsData); 
        setData(itemsData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError(error.message);
      }
    };
  
    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Items</h1>
      {data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li> 
          ))}
        </ul>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}

export default FetchData;
