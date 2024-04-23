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
import GardenCorton from "../images/garden_corton.png";
import Lavendar from "../images/lavendar.png";

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
    "Garden Corton": GardenCorton,
    "Lavendar": Lavendar,
};

function NewPlantCard({ info, onClick }) {
    const plantImage = plantImages[info.type];

    const testClick = () => {
        console.log('Component clicked:', info.type);
        onClick();
    };

    return (
        <div className="w-1/4 h-[35vh] p-1 cursor-pointer"  onClick={onClick}>
            <div class="flex w-full h-full bg-white rounded-md p-2">
                <div class="flex flex-col">
                    <img class="w-full" src={plantImage}></img>
                    <div class="p-2">
                        <div class="text-sm font-medium text-[#464646]">{info.type}</div>
                        <div class="text-sm italic font-thin text-[#a2a2a2] ">Ocimum basilicum</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPlantCard;
