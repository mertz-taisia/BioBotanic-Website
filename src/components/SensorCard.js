import axios from 'axios'
import React, { useState, useEffect } from 'react'

function SensorCard() {

  const [data, setData] = useState('')
  const [moisture, setMoisture] = useState('');
    const [brightness, setBrightness] = useState('');

  const parseInput = (input) => {
      const parts = input.split(' ');
      //console.log(parts)
      if (parts.length === 4) {
          const m = parseInt(parts[1]);
          const j = parseInt(parts[3]);
          console.log(m,j)
          if (!isNaN(m) && !isNaN(j)) {
              setMoisture(m/1000);
              setBrightness(j);
              console.log(moisture)
              console.log(brightness)
          } else {
              console.error("Invalid numbers provided");
          }
      } else {
          console.error("Input must be in the format 'm n b j'");
      }
  };

  const fetchData = async () => {
    try {
      // Define the URL of your server
      const serverUrl = 'http://localhost:8000/data'; // Assuming your server is running locally on port 3000

      // Fetch data from the server
      const response = await fetch(serverUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse response as text

      setData(await response.text());
      parseInput(data)
      console.log('Data from server:', data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData()
    
  return (
        <div class="flex w-full h-full bg-white rounded-md">
          <div class="flex flex-row w-1/3 justify-center items-center">
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.6717 0.933164C23.6248 0.941711 23.5779 0.95453 23.5353 0.96735C23.0282 1.08273 22.6702 1.53997 22.683 2.0613V8.625C22.6787 9.01814 22.8833 9.38564 23.2242 9.58648C23.5651 9.78305 23.9828 9.78305 24.3237 9.58648C24.6646 9.38564 24.8692 9.01814 24.8649 8.625V2.0613C24.8777 1.74508 24.7499 1.44168 24.524 1.22802C24.2939 1.01008 23.9828 0.903251 23.6717 0.933164ZM8.12535 7.36012C7.71624 7.43277 7.38809 7.7319 7.27303 8.12931C7.15797 8.53099 7.27729 8.95832 7.57986 9.24035L12.2165 13.8896C12.4807 14.2144 12.9026 14.364 13.3117 14.27C13.7166 14.1759 14.0362 13.8555 14.1299 13.4495C14.2237 13.0393 14.0745 12.6162 13.7507 12.3513L9.11404 7.70198C8.88818 7.45841 8.56003 7.33448 8.22763 7.36012C8.19353 7.36012 8.15944 7.36012 8.12535 7.36012ZM39.0816 7.36012C38.8344 7.39431 38.6043 7.51823 38.4338 7.70198L33.7972 12.3513C33.4733 12.6162 33.3242 13.0393 33.4179 13.4495C33.5117 13.8555 33.8313 14.1759 34.2362 14.27C34.6453 14.364 35.0672 14.2144 35.3314 13.8896L39.968 9.24035C40.3089 8.91558 40.407 8.40707 40.2067 7.97974C40.0021 7.54815 39.5504 7.3003 39.0816 7.36012ZM23.6717 13.0008C23.6376 13.0094 23.6035 13.0222 23.5694 13.035C23.5012 13.0393 23.433 13.0521 23.3648 13.0692C23.352 13.082 23.3435 13.0905 23.3307 13.1034C17.5435 13.3512 12.8642 18.0774 12.8642 23.9403C12.8642 29.9613 17.7694 34.8798 23.7739 34.8798C29.7785 34.8798 34.6836 29.9613 34.6836 23.9403C34.6836 18.0988 30.0428 13.3897 24.2853 13.1034C24.247 13.1034 24.2214 13.0692 24.1831 13.0692C24.0723 13.0264 23.9572 13.0051 23.8421 13.0008C23.8208 13.0008 23.7953 13.0008 23.7739 13.0008C23.7399 13.0008 23.7058 13.0008 23.6717 13.0008ZM23.7058 15.1887C23.7271 15.1887 23.7526 15.1887 23.7739 15.1887C23.808 15.1887 23.8421 15.1887 23.8762 15.1887C28.6492 15.2443 32.5017 19.1415 32.5017 23.9403C32.5017 28.7776 28.5981 32.6919 23.7739 32.6919C18.9541 32.6919 15.0462 28.7776 15.0462 23.9403C15.0462 19.1286 18.9157 15.2272 23.7058 15.1887ZM1.64772 22.8464C1.04683 22.9318 0.624933 23.4916 0.710165 24.0941C0.795397 24.6967 1.35367 25.1197 1.95455 25.0343H8.50037C8.89244 25.0385 9.25894 24.8334 9.45923 24.4916C9.65526 24.1497 9.65526 23.7309 9.45923 23.3891C9.25894 23.0472 8.89244 22.8421 8.50037 22.8464H1.95455C1.92046 22.8464 1.88637 22.8464 1.85227 22.8464C1.81818 22.8464 1.78409 22.8464 1.75 22.8464C1.7159 22.8464 1.68181 22.8464 1.64772 22.8464ZM38.7407 22.8464C38.1398 22.9318 37.7179 23.4916 37.8031 24.0941C37.8884 24.6967 38.4466 25.1197 39.0475 25.0343H45.5933C45.9854 25.0385 46.3519 24.8334 46.5522 24.4916C46.7482 24.1497 46.7482 23.7309 46.5522 23.3891C46.3519 23.0472 45.9854 22.8421 45.5933 22.8464H39.0475C39.0134 22.8464 38.9793 22.8464 38.9452 22.8464C38.9111 22.8464 38.8771 22.8464 38.843 22.8464C38.8089 22.8464 38.7748 22.8464 38.7407 22.8464ZM12.8642 33.6491C12.6171 33.6833 12.3869 33.8072 12.2165 33.991L7.57986 38.6403C7.25598 38.9052 7.10683 39.3283 7.20058 39.7385C7.29434 40.1444 7.61396 40.4649 8.01881 40.559C8.42792 40.653 8.84982 40.5034 9.11404 40.1786L13.7507 35.5293C14.0745 35.2174 14.1726 34.7345 13.9978 34.32C13.8274 33.9055 13.414 33.6406 12.9665 33.6491C12.9324 33.6491 12.8983 33.6491 12.8642 33.6491ZM34.3427 33.6491C33.9336 33.7218 33.6055 34.0209 33.4904 34.4183C33.3753 34.82 33.4947 35.2473 33.7972 35.5293L38.4338 40.1786C38.6981 40.5034 39.12 40.653 39.5291 40.559C39.9339 40.4649 40.2535 40.1444 40.3473 39.7385C40.4411 39.3283 40.2919 38.9052 39.968 38.6403L35.3314 33.991C35.1268 33.773 34.8456 33.6534 34.5473 33.6491C34.5132 33.6491 34.4791 33.6491 34.445 33.6491C34.4109 33.6491 34.3768 33.6491 34.3427 33.6491ZM23.6717 38.1275C23.6248 38.136 23.5779 38.1488 23.5353 38.1617C23.0282 38.277 22.6702 38.7343 22.683 39.2556V45.8193C22.6787 46.2125 22.8833 46.58 23.2242 46.7808C23.5651 46.9774 23.9828 46.9774 24.3237 46.7808C24.6646 46.58 24.8692 46.2125 24.8649 45.8193V39.2556C24.8777 38.9394 24.7499 38.636 24.524 38.4223C24.2939 38.2044 23.9828 38.0976 23.6717 38.1275Z" fill="black"/>
            </svg>

            <div class="flex flex-col ml-4">
              <div>Lighting</div>
              <div>{brightness}</div>
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
              <div>{moisture}</div>
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
    );
}

export default SensorCard;
