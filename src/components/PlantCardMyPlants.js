import React, { useState, useEffect } from 'react';
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
import Lavendar from "../images/lavendar.png";
import { fetchPlantType } from '../supabaseService.js';


const plantImages = {
    "Basil": Basil,
    "Snake Plant": SnakePlant,
    "Golden Pathos": GoldenPothos,
    "Aloe Vera": AloeVera,    
    "Spider Plant": SpiderPlant,
    "Peace Lily": PeaceLily,
    "Moth Orchid": MothOrchid,
    "Marble Pothos": MarblePothos,
    "Echeveria": Echeveria,
    "Red Prayer Plant": RedPrayerPlant,
    "Garden Croton": GardenCroton,
    "Lavendar": Lavendar,
};


function PlantCardMyPlants({info, inGreenhouse, newPlant}) {
    const [plant, setPlant] = useState(null);
    const [plantImage, setPlantImage] = useState(null);
    
    
    useEffect(() => {
        const getPlant = async () => {
        try {
            console.log("PlantCardMyPlants plant info", info.plant);

            if(newPlant){
                console.log("PlantCardMyPlants plant info common name", info.plant.common_name);
                setPlant(info.plant);
                if (info.plant && info.plant.common_name) {
                    setPlantImage(plantImages[info.plant.common_name]);
                    console.log("Image set for:", info.plant.common_name);
                } else {
                    console.log("1 Common name not found or mismatch in plantImages keys", info.plant.common_name);
                }
            }
            else{
                const plantType = await fetchPlantType(info.plant.type);
                setPlant(plantType);
                
                if (plantType && plantType.common_name) {
                    setPlantImage(plantImages[plantType.common_name]);
                    console.log("Image set for:", plantType.common_name);
                } else {
                    console.log("2 Common name not found or mismatch in plantImages keys", plantType.common_name);
                }
            console.log("Plant fetched:", plantType );
            }
            

        } 
        catch (error) {
            console.error('Error fetching plant:', error);
            setPlant(null);
        }
        };

        getPlant();
    }, []);


    return (
        <div className="w-full h-[25vh] p-1">
            <div class="flex flex-row w-full h-full bg-white rounded-md p-2">
            <img class="h-full" src={plantImage}></img>
            <div class = " w-full flex flex-col justify-center text-left ml-8 mr-4">
                <div class="w-full flex flex-row justify-between">
                <div class="text-medium font-bold">{plantImage ? plant.common_name : 'Loading...'}</div>
                    
                    {inGreenhouse ? (
                        <div class="flex text-center justify-center items-center w-1/5 rounded-2xl bg-[#D0EBFF]">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.75362 1L2.10431 6.9746C1.07574 8.06147 0.789407 9.55168 1.14673 11.6323C1.20361 11.9635 1.30349 12.2871 1.45817 12.5855C2.40573 14.4132 4.33754 16.1033 9 15.9951" stroke="#64BDFF" stroke-width="1.75" stroke-linecap="round"/>
                                <path d="M9.21559 1L15.0337 6.9746C15.9411 8.07034 16.1883 9.57604 15.8638 11.6834C15.8181 11.9806 15.7391 12.2724 15.6165 12.5469C14.7936 14.3893 13.1083 16.104 9 15.9951" stroke="#64BDFF" stroke-width="1.75" stroke-linecap="round"/>
                            </svg>
                            <div class="ml-1 mr-1 text-[#64BDFF] italic">Mar 27th</div>
                        </div>
                    ):(
                        <div class="flex text-center justify-center items-center w-1/5 rounded-2xl bg-[#E1E1E1]">
                            <div class="ml-1 mr-1 text-[#999999] italic">Inactive</div>
                        </div>
                    )}
                </div>
                <div class="text-sm italic mb-2">{plant ? plant.scientific_name : 'Loading...'}</div>

                <div class="flex flex-row text-center items-center mb-1 ml-4" >
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2246 15.3743C14.5008 15.3743 14.7246 15.1504 14.7246 14.8743C14.7246 14.5981 14.5008 14.3743 14.2246 14.3743V15.3743ZM14.2246 14.3743L1.29028 14.3743V15.3743L14.2246 15.3743V14.3743Z" fill="black"/>
                <path d="M11.5208 8.57606C11.5208 10.6586 9.80426 12.3599 7.67055 12.3599C5.53684 12.3599 3.82031 10.6586 3.82031 8.57606C3.82031 6.49354 5.53684 4.79224 7.67055 4.79224C9.80426 4.79224 11.5208 6.49354 11.5208 8.57606Z" stroke="black"/>
                <path d="M7.67188 8.7185L8.68693 7.43335" stroke="black" stroke-linecap="round"/>
                <ellipse cx="4.62543" cy="17.0006" rx="0.72504" ry="0.713971" fill="black"/>
                <ellipse cx="7.52387" cy="17.0006" rx="0.72504" ry="0.713971" fill="black"/>
                <ellipse cx="10.4262" cy="17.0006" rx="0.72504" ry="0.713971" fill="black"/>
                <path d="M14.5391 1.15356C16.853 1.15356 17.3892 1.42357 17.3789 5.00144V15.5521" stroke="black" stroke-linecap="round"/>
                <rect x="16.4316" y="4.99292" width="1.89334" height="3.99824" rx="0.946672" fill="black"/>
                <path d="M14.1953 15.0018V15.0018C14.1953 17.2099 12.4052 19 10.1971 19L5.99958 19C3.23816 19 0.999582 16.7614 0.999582 14L0.999582 7.71927" stroke="black" stroke-linecap="round"/>
                <path d="M1 4.99823V4.99823C1 2.79007 2.79007 1 4.99824 1L9.19573 1C11.9572 1 14.1957 3.23858 14.1957 6L14.1957 12.2807" stroke="black" stroke-linecap="round"/>
                </svg>


                <div class="text-sm ml-2 text-[#464646] italic">{plant ? plant.pH_Ranges : 'Loading...'}</div>
                </div>

                <div class="flex flex-row text-center items-center mb-1 ml-4" >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.78441 1L1.96627 6.57629C1.06756 7.58924 0.816453 8.97757 1.12705 10.9151C1.17749 11.2298 1.26661 11.5382 1.40648 11.8246C2.2376 13.526 3.92948 15.0961 8 14.9954" stroke="black" stroke-width="1.25" stroke-linecap="round"/>
                <path d="M8.21559 1L14.0337 6.57629C14.9324 7.58924 15.1835 8.97757 14.873 10.9151C14.8225 11.2298 14.7334 11.5382 14.5935 11.8246C13.7624 13.526 12.0705 15.0961 8 14.9954" stroke="black" stroke-width="1.25" stroke-linecap="round"/>
                </svg>





                <div class="text-sm ml-2 text-[#464646] italic">{plant ? plant.water_frequency : 'Loading...'}</div>
                
                </div>

                <div class="flex flex-row text-center items-center mb-1 ml-4" >
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.69118 4.68299V9.6024H6.11719V4.68299C6.11719 3.9722 6.6934 3.396 7.40418 3.396C8.11497 3.396 8.69118 3.9722 8.69118 4.68299Z" stroke="black"/>
                <path d="M10.7328 11.7839C10.7328 12.3024 10.4287 12.8258 9.82723 13.2408C9.22782 13.6545 8.37244 13.9263 7.4035 13.9263C6.43456 13.9263 5.57917 13.6545 4.97976 13.2408C4.37827 12.8258 4.07422 12.3024 4.07422 11.7839C4.07422 11.2655 4.37827 10.7421 4.97976 10.3271C5.57917 9.91345 6.43456 9.6416 7.4035 9.6416C8.37244 9.6416 9.22782 9.91345 9.82723 10.3271C10.4287 10.7421 10.7328 11.2655 10.7328 11.7839Z" stroke="black"/>
                <path d="M11.7422 4.81787H13.2739" stroke="black" stroke-linecap="round"/>
                <path d="M11.7422 2.41577H13.2739" stroke="black" stroke-linecap="round"/>
                <mask id="path-5-inside-1_0_1" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8986 2C11.8986 0.89543 11.0031 0 9.89857 0H5.10547C4.0009 0 3.10547 0.89543 3.10547 2V5.48836C3.10547 6.18706 2.72616 6.81868 2.19124 7.26817C0.837214 8.40593 0 9.97635 0 11.7107C0 15.1842 3.35786 18 7.5 18C11.6421 18 15 15.1842 15 11.7107C15 9.97763 14.164 8.40825 12.8118 7.27069C12.2774 6.82119 11.8986 6.18989 11.8986 5.49163V2Z"/>
                </mask>
                <path d="M2.19124 7.26817L2.83456 8.03377L2.19124 7.26817ZM12.8118 7.27069L12.168 8.03593L12.8118 7.27069ZM5.10547 1H9.89857V-1H5.10547V1ZM4.10547 5.48836V2H2.10547V5.48836H4.10547ZM1 11.7107C1 10.3152 1.67109 9.01141 2.83456 8.03377L1.54792 6.50257C0.00333621 7.80046 -1 9.63751 -1 11.7107H1ZM7.5 17C3.73799 17 1 14.4742 1 11.7107H-1C-1 15.8942 2.97774 19 7.5 19V17ZM14 11.7107C14 14.4742 11.262 17 7.5 17V19C12.0223 19 16 15.8942 16 11.7107H14ZM12.168 8.03593C13.3299 9.01334 14 10.3162 14 11.7107H16C16 9.63905 14.9981 7.80316 13.4555 6.50545L12.168 8.03593ZM10.8986 2V5.49163H12.8986V2H10.8986ZM2.10547 5.48836C2.10547 5.81385 1.92401 6.18655 1.54792 6.50257L2.83456 8.03377C3.52831 7.45082 4.10547 6.56027 4.10547 5.48836H2.10547ZM13.4555 6.50545C13.0798 6.1894 12.8986 5.81691 12.8986 5.49163H10.8986C10.8986 6.56286 11.475 7.45297 12.168 8.03593L13.4555 6.50545ZM9.89857 1C10.4509 1 10.8986 1.44772 10.8986 2H12.8986C12.8986 0.343145 11.5554 -1 9.89857 -1V1ZM5.10547 -1C3.44862 -1 2.10547 0.343144 2.10547 2H4.10547C4.10547 1.44772 4.55318 1 5.10547 1V-1Z" fill="black" mask="url(#path-5-inside-1_0_1)"/>
                </svg>

                
                <div class="text-sm ml-2 text-[#464646] italic">{plant ? plant.temperature_f : 'Loading...'}</div>
                </div>
                
                <div class="flex flex-row text-center items-center ml-4" >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33333 0V2H8.66667V0H7.33333ZM2.80469 1.86198L1.86198 2.80469L3.26172 4.20443L4.20443 3.26172L2.80469 1.86198ZM13.1953 1.86198L11.7956 3.26172L12.7383 4.20443L14.138 2.80469L13.1953 1.86198ZM8 3.33333C5.43636 3.33333 3.33333 5.43636 3.33333 8C3.33333 10.5636 5.43636 12.6667 8 12.6667C10.5636 12.6667 12.6667 10.5636 12.6667 8C12.6667 5.43636 10.5636 3.33333 8 3.33333ZM8 4.66667C9.83636 4.66667 11.3333 6.16364 11.3333 8C11.3333 9.83636 9.83636 11.3333 8 11.3333C6.16364 11.3333 4.66667 9.83636 4.66667 8C4.66667 6.16364 6.16364 4.66667 8 4.66667ZM0 7.33333V8.66667H2V7.33333H0ZM14 7.33333V8.66667H16V7.33333H14ZM3.26172 11.7956L1.86198 13.1953L2.80469 14.138L4.20443 12.7383L3.26172 11.7956ZM12.7383 11.7956L11.7956 12.7383L13.1953 14.138L14.138 13.1953L12.7383 11.7956ZM7.33333 14V16H8.66667V14H7.33333Z" fill="black"/>
                </svg>


                <div class="text-sm ml-2 text-[#464646] italic">{plant ? plant.temperature_f : 'Loading...'}</div>
                </div>

            </div>
            </div>
        </div>
    );
}

export default PlantCardMyPlants;
