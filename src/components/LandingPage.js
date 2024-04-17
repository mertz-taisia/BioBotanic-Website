import Basil from "../images/basil.png"; 
import React, { useState, useEffect } from 'react';

function LandingPage() {
  
  const [weather, setWeather] = useState({ 
    temp: null,
    date: null,
    icon: null,
    text: null
    });

  useEffect(() => {
    const API_URL = 'https://api.weatherapi.com/v1/current.json';
    const API_KEY = '27f166ba239249a1a0005203241704';
    const location = 'Los Angeles'; 

    const fetchWeather = async () => {
      try {
        // const response = await fetch(`${API_URL}?key=${API_KEY}&q=${location}`);
        // const data = await response.json();

        const data = {
          location: {
            name: 'Los Angeles',
            region: 'California',
            country: 'United States of America',
            lat: 34.05,
            lon: -118.24,
            localtime: '2024-04-16 17:45'
          },
          current: {
            cloud: 0,
            condition: {
              code: 1000,
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              text: "Sunny"
            },
            feelslike_c: 23.3,
            feelslike_f: 74,
            gust_kph: 20.3,
            gust_mph: 12.6,
            humidity: 38,
            is_day: 1,
            last_updated: "2024-04-16 17:45",
            last_updated_epoch: 1713314700,
            precip_in: 0,
            precip_mm: 0,
            pressure_in: 29.98,
            pressure_mb: 1015,
            temp_c: 22.8,
            temp_f: 73,
            uv: 6,
            vis_km: 16,
            vis_miles: 9,
            wind_degree: 237,
            wind_dir: "WSW",
            wind_kph: 3.6,
            wind_mph: 2.2
          }
        };

        setWeather({
          temp: data.current.temp_c, 
          date: new Date(data.location.localtime),
          icon: `https:${data.current.condition.icon}`, 
          text: data.current.condition.text
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  const formatDate = (date) => {
    if (!date) return '';
    const options = { month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  return (
    <div className="flex flex-row p-2 w-full h-screen bg-[#eff0ec]">
      <div class="flex flex-col w-full">
        <div className="w-full h-4/5">
          <div className="flex flex-row items-center justify-center w-full h-full">
            <div className="w-full h-full">
              <div className="flex flex-col items-center justify-center w-full h-full">
                  <div className="w-full h-1/3 p-1">
                    <div class="flex flex-row w-full h-full bg-white rounded-md p-2">
                      <img class="h-full" src={Basil}></img>
                      <div class = " w-full flex flex-col justify-center text-left ml-8 mr-4">
                        <div class="w-full flex flex-row justify-between">
                          <div class=" text-lg font-bold">Basil</div>
                            <div class="flex text-center justify-center items-center w-1/5 rounded-2xl bg-[#D0EBFF]">
                              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.75362 1L2.10431 6.9746C1.07574 8.06147 0.789407 9.55168 1.14673 11.6323C1.20361 11.9635 1.30349 12.2871 1.45817 12.5855C2.40573 14.4132 4.33754 16.1033 9 15.9951" stroke="#64BDFF" stroke-width="1.75" stroke-linecap="round"/>
                                <path d="M9.21559 1L15.0337 6.9746C15.9411 8.07034 16.1883 9.57604 15.8638 11.6834C15.8181 11.9806 15.7391 12.2724 15.6165 12.5469C14.7936 14.3893 13.1083 16.104 9 15.9951" stroke="#64BDFF" stroke-width="1.75" stroke-linecap="round"/>
                              </svg>
                              <div class="ml-1 mr-1 text-[#64BDFF] font-semibold">Mar 27th</div>
                            </div>
                          </div>
                        <div class=" text-base italic mb-2">Ocimum basilicum</div>

                        <div class="flex flex-row text-center items-center mb-1 ml-4" >
                          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9219 17.7925C17.3361 17.7925 17.6719 17.4567 17.6719 17.0425C17.6719 16.6283 17.3361 16.2925 16.9219 16.2925V17.7925ZM16.9219 16.2925L1.34822 16.2925V17.7925L16.9219 17.7925V16.2925Z" fill="black"/>
                            <circle cx="9.0309" cy="9.34096" r="4.48793" stroke="black" stroke-width="1.5"/>
                            <path d="M9.03125 9.51572L10.2534 7.94434" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <circle cx="5.36518" cy="19.642" r="0.872989" fill="black"/>
                            <circle cx="8.85541" cy="19.642" r="0.872989" fill="black"/>
                            <circle cx="12.3496" cy="19.642" r="0.872989" fill="black"/>
                            <path d="M16.8887 2.88135C20.7298 2.88135 21.6199 3.23097 21.6028 7.86385V21.5255" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <rect x="20.207" y="6.89648" width="2.79356" height="4.88874" rx="1" fill="black"/>
                            <path d="M1 4.4524V4.4524C1 2.52385 2.5634 0.960449 4.49196 0.960449H11.8884C14.6498 0.960449 16.8884 3.19903 16.8884 5.96045V12.8331" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M16.8887 17.1982V17.1982C16.8887 19.8982 14.6999 22.0869 11.9999 22.0869L6.00028 22.0869C3.23885 22.0869 1.00028 19.8483 1.00028 17.0869L1.00028 8.29369" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                          </svg>
                          <div class="ml-2 text-[#a2a2a2]">6.0 - 7.0</div>
                        </div>

                        <div class="flex flex-row text-center items-center mb-1 ml-4" >
                          <svg  width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.692 1L2.38038 8.56783C1.07234 9.96843 0.724607 11.8978 1.20742 14.6056C1.26577 14.9329 1.36392 15.2529 1.51064 15.5512C2.67231 17.9131 5.06823 20.1332 11 19.9938" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M11.2772 1L18.7577 8.56783C19.9406 9.97528 20.2509 11.9167 19.8069 14.6454C19.758 14.946 19.6764 15.2413 19.5541 15.5202C18.5138 17.8936 16.362 20.1338 11 19.9938" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                          </svg>
                          <div class="ml-2 text-[#a2a2a2]">400 - 500 ml</div>
                          
                        </div>

                        <div class="flex flex-row text-center items-center mb-1 ml-4" >
                            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <mask id="path-1-inside-1_0_1" fill="white">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1996 2C15.1996 0.895431 14.3042 0 13.1996 0H6.42574C5.32117 0 4.42574 0.89543 4.42574 2V7.52266C4.42574 8.20187 4.07012 8.82219 3.54758 9.25608C1.74708 10.7511 0.621094 12.8829 0.621094 15.249C0.621094 19.7719 4.73535 23.4385 9.81055 23.4385C14.8857 23.4385 19 19.7719 19 15.249C19 12.8844 17.8754 10.7538 16.0768 9.25885C15.5548 8.82495 15.1996 8.20492 15.1996 7.5261V2Z"/>
                              </mask>
                              <path d="M3.54758 9.25608L2.58934 8.10206L3.54758 9.25608ZM6.42574 1.5H13.1996V-1.5H6.42574V1.5ZM5.92574 7.52266V2H2.92574V7.52266H5.92574ZM2.12109 15.249C2.12109 13.3802 3.00711 11.6546 4.50582 10.4101L2.58934 8.10206C0.487047 9.8477 -0.878906 12.3856 -0.878906 15.249H2.12109ZM9.81055 21.9385C5.39663 21.9385 2.12109 18.7857 2.12109 15.249H-0.878906C-0.878906 20.7582 4.07408 24.9385 9.81055 24.9385V21.9385ZM17.5 15.249C17.5 18.7857 14.2245 21.9385 9.81055 21.9385V24.9385C15.547 24.9385 20.5 20.7582 20.5 15.249H17.5ZM15.118 10.4124C16.6151 11.6567 17.5 13.3813 17.5 15.249H20.5C20.5 12.3874 19.1357 9.85083 17.0357 8.1053L15.118 10.4124ZM13.6996 2V7.5261H16.6996V2H13.6996ZM2.92574 7.52266C2.92574 7.66336 2.84675 7.88832 2.58934 8.10206L4.50582 10.4101C5.2935 9.75606 5.92574 8.74038 5.92574 7.52266H2.92574ZM17.0357 8.1053C16.7785 7.89155 16.6996 7.66672 16.6996 7.5261H13.6996C13.6996 8.74312 14.3311 9.75835 15.118 10.4124L17.0357 8.1053ZM13.1996 1.5C13.4757 1.5 13.6996 1.72386 13.6996 2H16.6996C16.6996 0.0670026 15.1326 -1.5 13.1996 -1.5V1.5ZM6.42574 -1.5C4.49275 -1.5 2.92574 0.0670019 2.92574 2H5.92574C5.92574 1.72386 6.1496 1.5 6.42574 1.5V-1.5Z" fill="black" mask="url(#path-1-inside-1_0_1)"/>
                              <path d="M15 3H17" stroke="black" stroke-linecap="round"/>
                              <path d="M15 6H17" stroke="black" stroke-linecap="round"/>
                              <path d="M13.5 15.25C13.5 16.6043 12.0074 18 9.75 18C7.4926 18 6 16.6043 6 15.25C6 13.8957 7.4926 12.5 9.75 12.5C12.0074 12.5 13.5 13.8957 13.5 15.25Z" stroke="black" stroke-width="1.5"/>
                              <path d="M11 6V12.25H8.5V6C8.5 5.30964 9.05964 4.75 9.75 4.75C10.4404 4.75 11 5.30964 11 6Z" stroke="black" stroke-width="1.5"/>
                            </svg>
                          <div class="ml-2 text-[#a2a2a2]">above 72</div>
                          </div>
                          
                        <div class="flex flex-row text-center items-center ml-4" >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_143_44)">
                            <path d="M9.16667 0V2.5H10.8333V0H9.16667ZM3.50586 2.32747L2.32747 3.50586L4.07715 5.25553L5.25553 4.07715L3.50586 2.32747ZM16.4941 2.32747L14.7445 4.07715L15.9229 5.25553L17.6725 3.50586L16.4941 2.32747ZM10 4.16667C6.79545 4.16667 4.16667 6.79545 4.16667 10C4.16667 13.2045 6.79545 15.8333 10 15.8333C13.2045 15.8333 15.8333 13.2045 15.8333 10C15.8333 6.79545 13.2045 4.16667 10 4.16667ZM10 5.83333C12.2955 5.83333 14.1667 7.70455 14.1667 10C14.1667 12.2955 12.2955 14.1667 10 14.1667C7.70455 14.1667 5.83333 12.2955 5.83333 10C5.83333 7.70455 7.70455 5.83333 10 5.83333ZM0 9.16667V10.8333H2.5V9.16667H0ZM17.5 9.16667V10.8333H20V9.16667H17.5ZM4.07715 14.7445L2.32747 16.4941L3.50586 17.6725L5.25553 15.9229L4.07715 14.7445ZM15.9229 14.7445L14.7445 15.9229L16.4941 17.6725L17.6725 16.4941L15.9229 14.7445ZM9.16667 17.5V20H10.8333V17.5H9.16667Z" fill="black"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_143_44">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                          </svg>
                          <div class="ml-2 text-[#a2a2a2]">prefers direct sunlight</div>
                          </div>

                      </div>
                    </div>
                  </div>
                  <div className="w-full h-2/3">
                    <div className="flex flex-row items-center justify-center w-full h-full">
                        <div className="w-2/3 h-full p-1">
                          <div class="w-full h-full bg-white rounded-md">2</div>
                        </div>
                        <div className="w-1/3 h-full p-1">
                          <div class="w-full h-full bg-white rounded-md flex flex-col text-left justify-left p-4">
                            <div>Notes</div>
                            <div class="text-sm">
                              <div class="text-[#a2a2a2] mt-2">March 12th</div>
                              <div class="text-[#02A255] italic">*Added Basil to Greenhouse*</div>
                              <div class="text-[#a2a2a2] mt-4">March 12th</div>
                              <div class="text-[#464646] italic">Added plant to greenhouse, looks to be in pretty poor condition</div>
                              <div class="text-[#a2a2a2] mt-4">March 12th</div>
                              <div class="text-[#464646] italic">Looks a little healthier!</div>
                              <div class="text-[#a2a2a2] mt-4">March 12th</div>
                              <div class="text-[#464646] italic">Starting to grow new leaves :)</div>  
                              <div class="flex justify-center w-full border-2 border-[#BABABA] border-dashed rounded-md mt-4 p-2">
                                <div class="flex flex-row items-center w-full">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="18" cy="18" r="17.5" stroke="#BABABA"/>
                                  <mask id="path-2-inside-1_0_1" fill="white">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21 9H15V16L8 16L8 22H15V28H21V22H28V16L21 16V9Z"/>
                                  </mask>
                                  <path d="M15 9V8H14V9H15ZM21 9H22V8H21V9ZM15 16V17H16V16H15ZM8 16L8 15H7L7 16H8ZM8 22H7V23H8V22ZM15 22H16V21H15V22ZM15 28H14V29H15V28ZM21 28V29H22V28H21ZM21 22V21H20V22H21ZM28 22V23H29V22H28ZM28 16H29V15H28V16ZM21 16H20V17H21V16ZM15 10H21V8H15V10ZM16 16V9H14V16H16ZM8 17L15 17L15 15L8 15L8 17ZM9 22L9 16H7L7 22H9ZM15 21H8V23H15V21ZM16 28V22H14V28H16ZM21 27H15V29H21V27ZM20 22V28H22V22H20ZM28 21H21V23H28V21ZM27 16V22H29V16H27ZM21 17L28 17V15L21 15V17ZM20 9V16H22V9H20Z" fill="#BABABA" mask="url(#path-2-inside-1_0_1)"/>
                                </svg>
                                <div class="text-[#BABABA] italic ml-2">
                                  Add Note
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/5 p-1">
          <div class="flex w-full h-full bg-white rounded-md">
            <div class="flex flex-row w-1/3 justify-center items-center">
              <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.6717 0.933164C23.6248 0.941711 23.5779 0.95453 23.5353 0.96735C23.0282 1.08273 22.6702 1.53997 22.683 2.0613V8.625C22.6787 9.01814 22.8833 9.38564 23.2242 9.58648C23.5651 9.78305 23.9828 9.78305 24.3237 9.58648C24.6646 9.38564 24.8692 9.01814 24.8649 8.625V2.0613C24.8777 1.74508 24.7499 1.44168 24.524 1.22802C24.2939 1.01008 23.9828 0.903251 23.6717 0.933164ZM8.12535 7.36012C7.71624 7.43277 7.38809 7.7319 7.27303 8.12931C7.15797 8.53099 7.27729 8.95832 7.57986 9.24035L12.2165 13.8896C12.4807 14.2144 12.9026 14.364 13.3117 14.27C13.7166 14.1759 14.0362 13.8555 14.1299 13.4495C14.2237 13.0393 14.0745 12.6162 13.7507 12.3513L9.11404 7.70198C8.88818 7.45841 8.56003 7.33448 8.22763 7.36012C8.19353 7.36012 8.15944 7.36012 8.12535 7.36012ZM39.0816 7.36012C38.8344 7.39431 38.6043 7.51823 38.4338 7.70198L33.7972 12.3513C33.4733 12.6162 33.3242 13.0393 33.4179 13.4495C33.5117 13.8555 33.8313 14.1759 34.2362 14.27C34.6453 14.364 35.0672 14.2144 35.3314 13.8896L39.968 9.24035C40.3089 8.91558 40.407 8.40707 40.2067 7.97974C40.0021 7.54815 39.5504 7.3003 39.0816 7.36012ZM23.6717 13.0008C23.6376 13.0094 23.6035 13.0222 23.5694 13.035C23.5012 13.0393 23.433 13.0521 23.3648 13.0692C23.352 13.082 23.3435 13.0905 23.3307 13.1034C17.5435 13.3512 12.8642 18.0774 12.8642 23.9403C12.8642 29.9613 17.7694 34.8798 23.7739 34.8798C29.7785 34.8798 34.6836 29.9613 34.6836 23.9403C34.6836 18.0988 30.0428 13.3897 24.2853 13.1034C24.247 13.1034 24.2214 13.0692 24.1831 13.0692C24.0723 13.0264 23.9572 13.0051 23.8421 13.0008C23.8208 13.0008 23.7953 13.0008 23.7739 13.0008C23.7399 13.0008 23.7058 13.0008 23.6717 13.0008ZM23.7058 15.1887C23.7271 15.1887 23.7526 15.1887 23.7739 15.1887C23.808 15.1887 23.8421 15.1887 23.8762 15.1887C28.6492 15.2443 32.5017 19.1415 32.5017 23.9403C32.5017 28.7776 28.5981 32.6919 23.7739 32.6919C18.9541 32.6919 15.0462 28.7776 15.0462 23.9403C15.0462 19.1286 18.9157 15.2272 23.7058 15.1887ZM1.64772 22.8464C1.04683 22.9318 0.624933 23.4916 0.710165 24.0941C0.795397 24.6967 1.35367 25.1197 1.95455 25.0343H8.50037C8.89244 25.0385 9.25894 24.8334 9.45923 24.4916C9.65526 24.1497 9.65526 23.7309 9.45923 23.3891C9.25894 23.0472 8.89244 22.8421 8.50037 22.8464H1.95455C1.92046 22.8464 1.88637 22.8464 1.85227 22.8464C1.81818 22.8464 1.78409 22.8464 1.75 22.8464C1.7159 22.8464 1.68181 22.8464 1.64772 22.8464ZM38.7407 22.8464C38.1398 22.9318 37.7179 23.4916 37.8031 24.0941C37.8884 24.6967 38.4466 25.1197 39.0475 25.0343H45.5933C45.9854 25.0385 46.3519 24.8334 46.5522 24.4916C46.7482 24.1497 46.7482 23.7309 46.5522 23.3891C46.3519 23.0472 45.9854 22.8421 45.5933 22.8464H39.0475C39.0134 22.8464 38.9793 22.8464 38.9452 22.8464C38.9111 22.8464 38.8771 22.8464 38.843 22.8464C38.8089 22.8464 38.7748 22.8464 38.7407 22.8464ZM12.8642 33.6491C12.6171 33.6833 12.3869 33.8072 12.2165 33.991L7.57986 38.6403C7.25598 38.9052 7.10683 39.3283 7.20058 39.7385C7.29434 40.1444 7.61396 40.4649 8.01881 40.559C8.42792 40.653 8.84982 40.5034 9.11404 40.1786L13.7507 35.5293C14.0745 35.2174 14.1726 34.7345 13.9978 34.32C13.8274 33.9055 13.414 33.6406 12.9665 33.6491C12.9324 33.6491 12.8983 33.6491 12.8642 33.6491ZM34.3427 33.6491C33.9336 33.7218 33.6055 34.0209 33.4904 34.4183C33.3753 34.82 33.4947 35.2473 33.7972 35.5293L38.4338 40.1786C38.6981 40.5034 39.12 40.653 39.5291 40.559C39.9339 40.4649 40.2535 40.1444 40.3473 39.7385C40.4411 39.3283 40.2919 38.9052 39.968 38.6403L35.3314 33.991C35.1268 33.773 34.8456 33.6534 34.5473 33.6491C34.5132 33.6491 34.4791 33.6491 34.445 33.6491C34.4109 33.6491 34.3768 33.6491 34.3427 33.6491ZM23.6717 38.1275C23.6248 38.136 23.5779 38.1488 23.5353 38.1617C23.0282 38.277 22.6702 38.7343 22.683 39.2556V45.8193C22.6787 46.2125 22.8833 46.58 23.2242 46.7808C23.5651 46.9774 23.9828 46.9774 24.3237 46.7808C24.6646 46.58 24.8692 46.2125 24.8649 45.8193V39.2556C24.8777 38.9394 24.7499 38.636 24.524 38.4223C24.2939 38.2044 23.9828 38.0976 23.6717 38.1275Z" fill="black"/>
              </svg>

              <div class="flex flex-col ml-4">
                <div>Lighting</div>
                <div>70%</div>
              </div>
            </div>
            <div class="flex flex-row w-1/3 justify-center items-center">
            <svg width="56" height="39" viewBox="0 0 56 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41 33.9385L54.5 14.4385" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M14.5 34.4385L1 14.9385" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <circle cx="27" cy="36" r="3" fill="black"/>
            <path d="M27 36L15 16" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <circle cx="38.5" cy="6.5" r="3.5" fill="black"/>
            <path d="M41 6C40.237 4.12503 39.648 3.0538 38.5959 1.34717C38.4979 1.18821 38.2664 1.18976 38.1708 1.35015C37.1812 3.00962 36.6488 4.07399 36 6" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8673 29.1637C19.4807 30.0364 17.0285 31.3639 14.4409 33.1095C13.9831 33.4183 13.8623 34.0399 14.1712 34.4977C14.48 34.9556 15.1016 35.0763 15.5594 34.7675C18.1889 32.9936 20.6 31.7177 22.8839 30.9245L21.8673 29.1637ZM29.2584 29.9654C32.8032 30.1816 36.379 31.7081 40.3983 34.7371C40.8394 35.0695 41.4664 34.9814 41.7988 34.5403C42.1312 34.0993 42.0431 33.4723 41.602 33.1399C37.0006 29.6722 32.7207 27.9096 28.2669 27.9388C28.2078 27.9392 28.1487 27.9399 28.0896 27.9409L29.2584 29.9654Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M44.4923 6.30659C44.4563 7.02143 44.2952 7.7033 44.0305 8.33073C47.2057 10.0758 50.463 12.36 53.8579 15.2041C54.2812 15.5588 54.9119 15.5031 55.2666 15.0798C55.6213 14.6564 55.5656 14.0257 55.1423 13.671C51.4987 10.6185 47.9693 8.16301 44.4923 6.30659ZM33.6648 2.44676C31.8844 2.13644 30.1007 1.98769 28.3053 2.0008C19.4345 2.06555 10.4759 6.08118 0.400083 13.6375C-0.0417547 13.9689 -0.131317 14.5957 0.200041 15.0375C0.531398 15.4794 1.1582 15.5689 1.60003 15.2376C11.5242 7.79491 20.0656 4.061 28.3199 4.00074C29.7932 3.98999 31.2637 4.09627 32.7378 4.32193C32.9364 3.63869 33.2533 3.00576 33.6648 2.44676Z" fill="black"/>
            </svg>



              <div class="flex flex-col ml-4">
                <div>Soil Moisture</div>
                <div>20%</div>
              </div>
            </div>
            <div class="flex flex-row w-1/3 justify-center items-center">
              <svg width="30" height="37" viewBox="0 0 30 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7.51416H16C16.6904 7.51416 17.25 8.0738 17.25 8.76416V20.427H11.75V8.76416C11.75 8.0738 12.3096 7.51416 13 7.51416Z" stroke="black" stroke-width="1.5"/>
                <path d="M21.25 24.5396C21.25 25.6892 20.5898 26.8048 19.3713 27.6633C18.1549 28.5204 16.435 29.0743 14.5 29.0743C12.565 29.0743 10.8451 28.5204 9.6287 27.6633C8.41025 26.8048 7.75 25.6892 7.75 24.5396C7.75 23.3899 8.41025 22.2744 9.6287 21.4158C10.8451 20.5587 12.565 20.0049 14.5 20.0049C16.435 20.0049 18.1549 20.5587 19.3713 21.4158C20.5898 22.2744 21.25 23.3899 21.25 24.5396Z" stroke="black" stroke-width="1.5"/>
                <path d="M23 10.6074H26" stroke="black" stroke-linecap="round"/>
                <path d="M23 5.80322H26" stroke="black" stroke-linecap="round"/>
                <mask id="path-5-inside-1_205_45" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.304 2.97168C23.304 1.86711 22.4085 0.97168 21.304 0.97168H8.08184C6.97727 0.97168 6.08184 1.86711 6.08184 2.97168V13.0862C6.08184 13.7782 5.71759 14.4128 5.15886 14.8211C2.00176 17.1282 0 20.5605 0 24.3931C0 31.34 6.57669 36.9715 14.6895 36.9715C22.8022 36.9715 29.3789 31.34 29.3789 24.3931C29.3789 20.5629 27.3797 17.1325 24.226 14.8255C23.6678 14.4171 23.304 13.7828 23.304 13.0912V2.97168Z"/>
                </mask>
                <path d="M5.15886 14.8211L4.27383 13.61L5.15886 14.8211ZM24.226 14.8255L25.1117 13.6148L24.226 14.8255ZM8.08184 2.47168H21.304V-0.52832H8.08184V2.47168ZM7.58184 13.0862V2.97168H4.58184V13.0862H7.58184ZM1.5 24.3931C1.5 21.1118 3.21067 18.1026 6.04388 16.0322L4.27383 13.61C0.792852 16.1538 -1.5 20.0092 -1.5 24.3931H1.5ZM14.6895 35.4715C7.17837 35.4715 1.5 30.3017 1.5 24.3931H-1.5C-1.5 32.3783 5.97502 38.4715 14.6895 38.4715V35.4715ZM27.8789 24.3931C27.8789 30.3017 22.2005 35.4715 14.6895 35.4715V38.4715C23.4039 38.4715 30.8789 32.3783 30.8789 24.3931H27.8789ZM23.3404 16.0361C26.1704 18.1064 27.8789 21.1138 27.8789 24.3931H30.8789C30.8789 20.012 28.5889 16.1587 25.1117 13.6148L23.3404 16.0361ZM21.804 2.97168V13.0912H24.804V2.97168H21.804ZM4.58184 13.0862C4.58184 13.2389 4.49779 13.4464 4.27383 13.61L6.04388 16.0322C6.9374 15.3792 7.58184 14.3176 7.58184 13.0862H4.58184ZM25.1117 13.6148C24.8879 13.4511 24.804 13.2438 24.804 13.0912H21.804C21.804 14.3219 22.4477 15.3831 23.3404 16.0361L25.1117 13.6148ZM21.304 2.47168C21.5801 2.47168 21.804 2.69554 21.804 2.97168H24.804C24.804 1.03868 23.237 -0.52832 21.304 -0.52832V2.47168ZM8.08184 -0.52832C6.14884 -0.52832 4.58184 1.03868 4.58184 2.97168H7.58184C7.58184 2.69554 7.8057 2.47168 8.08184 2.47168V-0.52832Z" fill="black" mask="url(#path-5-inside-1_205_45)"/>
              </svg>


              <div class="flex flex-col ml-4">
                <div class="">Temperature</div>
                <div class="">70°</div>
              </div>
            </div>
          </div>
        </div> 
      </div> 
      
      <div className="w-1/3 h-full">
            <div className="flex flex-col w-full h-full ">
              <div className="w-full h-1/6 p-1 ">
                <div class="flex w-full h-full bg-white rounded-md p-4">
                  <div class="flex flex-col w-1/3 h-full justify-center items-center text-center">
                    <div class="text-4xl mt-2">16</div>
                    <div class="text-base mb-2">April</div>
                    <svg width="84" height="3" viewBox="0 0 84 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="84" height="3" fill="#1D4C43"/>
                    </svg>

                  </div>
                  <div class="flex w-2/3 h-full justify-center items-center text-center">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22" cy="22" r="22" fill="#FFE168"/>
                    </svg>
                    <div class="text-4xl">22</div>
                    <div class="flex h-1/4 flex-row">
                      <button className="text-blue-500 hover:text-blue-600">°C</button>
                        |
                      <button className="text-gray-400 hover:text-gray-500">°F</button>
                    </div>
                  </div>
                  {/* <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl font-bold">
                        {weather.temp ? `${weather.temp}°` : 'Loading...'}
                      </div>
                      <div className="flex items-center">
                        <div className="text-2xl font-bold">{weather.date ? formatDate(weather.date) : ''}</div>
                        <svg className="w-8 h-8 ml-2 text-yellow-400" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                          <circle cx="12" cy="12" r="5" stroke-width="2" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v2m0 18v2M22 12h2M2 12H4m16.363 5.364l1.414 1.414M4.222 7.778l1.414-1.414m13.364-1.414l1.414 1.414M4.222 16.222l1.414 1.414" />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center text-sm">
                        <button className="text-blue-500 hover:text-blue-600">°C</button>
                        <span>/</span>
                        <button className="text-gray-400 hover:text-gray-500">°F</button>
                      </div>
                    </div>
                    <div className="border-t-2 border-green-400 w-full mt-4"></div>
                  </div> */}
                </div>
              </div>
              <div className="w-full h-2/6 p-1">
                <div class="w-full h-full bg-white rounded-md">5</div>
              </div>
              <div className="w-full h-3/6 p-1">
                <div class="w-full h-full bg-white rounded-md">
                  
                <div class="w-full h-full bg-white rounded-md flex flex-col text-left justify-left p-4">
                            <div>Logs</div>
                            <div class="text-sm">
                              <div class="flex justify-center w-full border border-[#BABABA] rounded-3xl mt-4 p-2">
                                <div class="flex flex-row items-center justify-between w-full h-8 text-xs">
                                  <img class="h-full" src={Basil}></img>
                                    <div class="flex justify-between w-full px-2 items-center">
                                      <div class="">
                                        <div class="text-[#464646]">
                                          David's Basil Plant
                                        </div>
                                        <div class="text-[#464646] italic">
                                          Basil
                                        </div>
                                      </div>
                                      <div class="text-[#BABABA]">
                                        300ml
                                      </div>
                                    </div>
                                    <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <circle cx="15.5" cy="15.5" r="15.5" fill="#D0EBFF"/>
                                      <path d="M15.692 6L7.38038 13.5678C6.07234 14.9684 5.72461 16.8978 6.20742 19.6056C6.26577 19.9329 6.36392 20.2529 6.51064 20.5512C7.67231 22.9131 10.0682 25.1332 16 24.9938" stroke="#64BDFF" stroke-width="1.5" stroke-linecap="round"/>
                                      <path d="M16.2772 6L23.7577 13.5678C24.9406 14.9753 25.2509 16.9167 24.8069 19.6454C24.758 19.946 24.6764 20.2413 24.5541 20.5202C23.5138 22.8936 21.362 25.1338 16 24.9938" stroke="#64BDFF" stroke-width="1.5" stroke-linecap="round"/>
                                    </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                </div>
              </div>
            </div>
          </div>

    </div>
  );
}

export default LandingPage;
