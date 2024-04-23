import { useState, useEffect } from 'react';

const useSensorData = (url) => {
  const [data, setData] = useState('');
  const [moisture, setMoisture] = useState('');
  const [brightness, setBrightness] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/data');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const fetchedData = await response.text();
        setData(fetchedData);
        parseInput(fetchedData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []); // Only re-run the effect if the URL changes

  const parseInput = (input) => {
    const parts = input.split(' ');
    if (parts.length === 4) {
      const m = parseInt(parts[1]);
      const j = parseInt(parts[3]);
      if (!isNaN(m) && !isNaN(j)) {
        setMoisture(m);
        setBrightness(j);
      } else {
        setError("Invalid numbers provided");
      }
    } else {
      setError("Input must be in the format 'm n b j'");
    }
  };

  return { moisture, brightness, data, error };
};

export default useSensorData;
