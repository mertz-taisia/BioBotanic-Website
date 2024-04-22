import React, {useState} from 'react';
import Log from './Log.js';
import Basil from "../images/basil.png"; 


function Logs() {

    return (
        
        <div class="flex flex-col text-left justify-left p-4">
        <div>Logs</div>
        <div class="text-sm">
          <div class="flex flex-col justify-center w-full">
            <Log
                info={{ name: "David's Basil"}}
                irrigationReading={false}
                lightingReading={false}
                greenhouseReading={true}
                manual={true}
                value={1}
                isLog={true}
                image = {Basil}
            />
            <Log
                info={{ name: "David's Basil"}}
                irrigationReading={true}
                lightingReading={false}
                greenhouseReading={false}
                manual={true}
                value={5}
                isLog={true}
                image = {Basil}
            />
            <Log
                info={{ name: "David's Basil"}}
                irrigationReading={false}
                lightingReading={true}
                greenhouseReading={false}
                manual={true}
                value={5}
                rgb={{ r: 128, g: 0, b: 128 }}
                isLog={true}
                image = {Basil}
            />
          </div>
        </div>
      </div>
    );
}

export default Logs;
