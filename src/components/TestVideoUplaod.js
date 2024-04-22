// import React, { useState, useEffect } from 'react'
// import axios from 'axios';

// function TestVideoUpload() {
  
//   const [data, setData] = useState('')

//   useEffect(() => {
//     // Call the async function to fetch data
//     fetchData();
//     const intervalId = setInterval(fetchData, 100);
//     return () => clearInterval(intervalId);
//   }, []); 

//   const fetchData = async () => {
//     try {
//       // Define the URL of your server
//       const serverUrl = 'http://localhost:8000/data'; // Assuming your server is running locally on port 3000

//       // Fetch data from the server
//       const response = await fetch(serverUrl);

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       // Parse response as text
//       setData(await response.text());

//       console.log('Data from server:', data);

//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const sendData = (command) => {
//     // Send a POST request to the server
//     axios.post('http://localhost:8000/send', { data: command })
//       .then(response => {
//         console.log(response.data); // Log the response from the server
//       })
//       .catch(error => {
//         console.error('Error sending data to server:', error); // Log any errors
//       });
//   };
  
//   return (
//     <div className="flex flex-col p-2 w-full h-screen bg-[#eff0ec]">
//       TestVideoUpload
//       <img src="http://raspberrypi.local:8080/?action=stream" width="640" height="480"/>
//       <p>{data}</p>
//       <button onClick={() => sendData('manually irrigating')}>override irrigation</button>
//       <button onClick={() => sendData('manually changing light level')}>override light</button>
//       <button onClick={() => sendData('disabling pump and dimming lights')}>system sleep</button>
//     </div>
//   );
// }
  
// export default TestVideoUpload;