import React from 'react';
import { useState, useEffect } from 'react';
import Basil from "../images/basil.png"; 
import SnakePlant from "../images/snake_plant.png";
import GoldenPothos from "../images/golden_pothos.png";
import AloeVera from "../images/aloe_vera.png";
import SpiderPlant from "../images/spider_plant.png"; 
import PeaceLily from "../images/peace_lily.png";
import MothOrchid from "../images/moth_orchid.png";
import MarblePothos from "../images/marble_pothos.png";
import Echeveria from "../images/echeveria.png";
import RedPrayerPlant from "../images/red_prayer_plant.png";
import GardenCroton from "../images/garden_croton.png";
import Lavender from "../images/lavender.png";
import { fetchPlantType, fetchPlantById } from '../supabaseService.js';


const plantImages = {
    "Basil": Basil,
    "Snake Plant": SnakePlant,
    "Golden Pothos": GoldenPothos,
    "Aloe Vera": AloeVera,    
    "Spider Plant": SpiderPlant,
    "Peace Lily": PeaceLily,
    "Moth Orchid": MothOrchid,
    "Marble Pothos": MarblePothos,
    "Echeveria": Echeveria,
    "Red Prayer Plant": RedPrayerPlant,
    "Garden Croton": GardenCroton,
    "Lavender": Lavender,
};


function Log({log}) {
    const [plant, setPlant] = useState(null);
    const [plantType, setPlantType] = useState(null);
    const [plantImage, setPlantImage] = useState(null);


    useEffect(() => {
        async function getPlant() {
            try {
                const fetchedPlant = await fetchPlantById(log.my_plant_id);
                console.log("fetchedPlant", fetchedPlant);  // Log the full fetched plant object
                if (fetchedPlant && fetchedPlant.type) {   // Check if fetchedPlant and fetchedPlant.type exist
                    setPlant(fetchedPlant);
                    const fetchedPlantType = await fetchPlantType(fetchedPlant.type);
                    console.log("fetchedPlantType", fetchedPlantType);  // Log fetched plant type
                    if (fetchedPlantType && fetchedPlantType.common_name) {
                        setPlantType(fetchedPlantType);
                        setPlantImage(plantImages[fetchedPlantType.common_name]);
                    } else {
                        console.error('No valid plant type received:', fetchedPlantType);
                    }
                } else {
                    console.error('Plant fetched does not have a type property:', fetchedPlant);
                }
            } catch (error) {
                console.error('Error fetching plant:', error);
            }
        }
    
        getPlant();
    }, [log.my_plant_id]);
    

    

    const computeOutput = () => {
        switch (log.type) {
            case "irrigation": return `${log.value} secs`;
            case "lighting": return `${log.value} intensity`;
            case "greenhouse": return log.value === 1 ? "Added" : "Removed";
            default: return "default";
        }
    };

    const selectSVG = () => {
        if (log.type == "irrigation") {
            return (
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.5" cy="15.5" r="15.5" fill="#D0EBFF"/>
                    <path d="M15.692 6L7.38038 13.5678C6.07234 14.9684 5.72461 16.8978 6.20742 19.6056C6.26577 19.9329 6.36392 20.2529 6.51064 20.5512C7.67231 22.9131 10.0682 25.1332 16 24.9938" stroke="#64BDFF" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M16.2772 6L23.7577 13.5678C24.9406 14.9753 25.2509 16.9167 24.8069 19.6454C24.758 19.946 24.6764 20.2413 24.5541 20.5202C23.5138 22.8936 21.362 25.1338 16 24.9938" stroke="#64BDFF" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            );
        } else if (log.type == "lighting") {
            return (
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.5" cy="15.5" r="15.5" fill="#FFFAD0"/>
                    <path d="M15.1667 6V8.5H16.8333V6H15.1667ZM9.50586 8.32747L8.32747 9.50586L10.0771 11.2555L11.2555 10.0771L9.50586 8.32747ZM22.4941 8.32747L20.7445 10.0771L21.9229 11.2555L23.6725 9.50586L22.4941 8.32747ZM16 10.1667C12.7955 10.1667 10.1667 12.7955 10.1667 16C10.1667 19.2045 12.7955 21.8333 16 21.8333C19.2045 21.8333 21.8333 19.2045 21.8333 16C21.8333 12.7955 19.2045 10.1667 16 10.1667ZM16 11.8333C18.2955 11.8333 20.1667 13.7045 20.1667 16C20.1667 18.2955 18.2955 20.1667 16 20.1667C13.7045 20.1667 11.8333 18.2955 11.8333 16C11.8333 13.7045 13.7045 11.8333 16 11.8333ZM6 15.1667V16.8333H8.5V15.1667H6ZM23.5 15.1667V16.8333H26V15.1667H23.5ZM10.0771 20.7445L8.32747 22.4941L9.50586 23.6725L11.2555 21.9229L10.0771 20.7445ZM21.9229 20.7445L20.7445 21.9229L22.4941 23.6725L23.6725 22.4941L21.9229 20.7445ZM15.1667 23.5V26H16.8333V23.5H15.1667Z" fill="#FFEE57"/>
                </svg>
            );
        } else if (log.type == "greenhouse") {
            return (
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.5" cy="15.5" r="15.5" fill="#E5FD99"/>
                    <path d="M18 12C15.8691 17.9807 14.0242 20.8532 8 24" stroke="#1D4C43" stroke-width="1.5"/>
                    <path d="M15.2939 22.1964C24.2779 26.1181 24.895 14.8211 19.7836 7C8.87273 9.85563 3.57474 16.3139 12.5502 20.9709" stroke="#1D4C43" stroke-width="1.5"/>
                </svg>

            );
        } else {
            return (
                <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Default SVG */}
                    <circle cx="15.5" cy="15.5" r="15.5" fill="#A9A9A9"/>
                </svg>
            );
        }
    };

    const output = computeOutput();
    const svgContent = selectSVG();

    return (
        <div class="flex flex-col justify-center w-full border border-[#BABABA] rounded-3xl mt-1 h-12">
            <div className="flex flex-row items-center justify-between w-full h-full text-xs">
                {plantImage ?
                <img className="h-full rounded-tl-3xl rounded-bl-3xl " src={plantImage} alt="image"></img>
                :
                <div>Still Waiting on image</div>
                }
                
                <div className="flex justify-between w-full px-2 items-center">
                    <div>
                        <div className="text-[#464646]">
                            {plant ? plant.nickname : "nickname"}
                        </div>
                        <div className="text-[#a2a2a2] italic">
                            {plantType ? plantType.common_name : "loading..."}
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center text-[#a2a2a2]">
                        {output}
                        <div class="ml-2">{svgContent }</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Log;
