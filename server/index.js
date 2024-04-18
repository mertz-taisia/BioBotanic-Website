const express = require('express');
const { SerialPort } = eval(`require('serialport')`);
const { ReadlineParser } = require('@serialport/parser-readline');

const app = express();
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());

// Define serial port configuration
const usbport = new SerialPort({
    path: '/dev/cu.usbserial-10',
    baudRate: 9600
});
const parser = usbport.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// Define endpoint to handle HTTP requests
app.get('/data', (req, res) => {
  // Listen for data from the serial port
  parser.once('data', (data) => {
    //console.log('Data received:', data);
    // Send the received data as the response
    res.send(data);
  });
});

app.post('/send', (req, res) => {
    console.log(req.body.data);
    const dataToSend = req.body.data
    // Write the data to the serial port
    usbport.write(dataToSend)
});

// Start the Express server
const port = 8000; // Choose a port for your Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
