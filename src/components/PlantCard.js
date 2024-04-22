import Basil from "../images/basil.png"; 


function PlantCard() {
    return (
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
                  <div class="ml-1 mr-1 text-[#64BDFF] italic">Mar 27th</div>
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
              <div class="ml-2 text-[#464646] italic">6.0 - 7.0</div>
            </div>

            <div class="flex flex-row text-center items-center mb-1 ml-4" >
              <svg  width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.692 1L2.38038 8.56783C1.07234 9.96843 0.724607 11.8978 1.20742 14.6056C1.26577 14.9329 1.36392 15.2529 1.51064 15.5512C2.67231 17.9131 5.06823 20.1332 11 19.9938" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M11.2772 1L18.7577 8.56783C19.9406 9.97528 20.2509 11.9167 19.8069 14.6454C19.758 14.946 19.6764 15.2413 19.5541 15.5202C18.5138 17.8936 16.362 20.1338 11 19.9938" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <div class="ml-2 text-[#464646] italic">400 - 500 ml</div>
              
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
              <div class="ml-2 text-[#464646] italic">above 72°</div>
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
              <div class="ml-2 text-[#464646] italic">prefers direct sunlight</div>
              </div>

          </div>
        </div>
    );
}

export default PlantCard;
