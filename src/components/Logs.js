import React, {useState} from 'react';
import Log from './Log.js';
import Basil from "../images/basil.png"; 
import { usePlants, currentPlant, plantType } from '../PlantContext';


function Logs() {
  const { logData } = usePlants();

    return (
        
        <div class="flex flex-col text-left justify-left p-4 h-full justify-between">
        <div>Logs</div>
        <div class="text-sm h-full">
          <div class="flex flex-col justify-start w-full h-[93%] overflow-x-auto scrollable-area">
              {logData.length > 0 ? 
                logData.map((log) => (
                  <Log 
                    key={log.id}
                    log={log}
                  />
                ))
                : <p>No log data available.</p>
              }
          </div>
        </div>
      </div>
    );
}

export default Logs;
