// import { useState, useEffect} from "react";
import BlogList from "./bloglist";
import useFetch from "../useFetch";


const Landing = () => {

    return ( 
        
      <div class="2xl:mx-auto 2xl:container mx-4 ">
        
     
   

      <div class="flex justify-center items-center">
     
<div class="2xl:mx-auto 2xl:container laptop:px-20 laptop:py-16 tablet:py-12 tablet:px-6 py-9 px-4 w-96 tablet:w-auto">
  <div role="main" class="flex flex-col items-center justify-center ">
    <h1 class="text-4xl font-semibold leading-9 text-center text-teal-600">Recently Updated</h1>
    <p class="text-base leading-normal text-center  mt-4 laptop:w-1/2 tablet:w-10/12 w-11/12">If you're looking for dormitories around Kasetsart University, you've come to the right place. Best luck for your new journey !</p>
  </div>
  <div class="laptop:flex items-stretch tablet:mt-12 mt-8">
    <div class="laptop:w-1/2">
      <div class="tablet:flex items-center justify-between laptop:gap-x-8 gap-x-6">
        <div class="tablet:w-1/2 relative">
          <div>
            <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div class="absolute bottom-0 left-0 p-6">
              <h2 class="text-xl font-semibold 5 text-white">Near Gate 1</h2>
              <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p class="pr-2 text-sm font-medium leading-none">All Details</p>
                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img
                 class="w-full" alt="chair" 
                src={require('./photo/image2.jpeg')}
                
                />
        
        </div>
        <div class="tablet:w-1/2 tablet:mt-0 mt-4 relative">
          <div>
            <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div class="absolute bottom-0 left-0 p-6">
              <h2 class="text-xl font-semibold 5 text-white">Near Gate 2</h2>
              <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p class="pr-2 text-sm font-medium leading-none">All Details</p>
                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img
                 class="w-full" alt="chair" 
                src={require('./photo/image1.jpeg')}
                
                />
        
        </div>
      </div>
      <div class="relative">
        <div>
          <p class="tablet:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
          <div class="absolute bottom-0 left-0 tablet:p-10 p-6">
            <h2 class="text-xl font-semibold 5 text-white">Near Gate 3</h2>
            <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
            <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
              <p class="pr-2 text-sm font-medium leading-none">All Details</p>
              <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        
        <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" class="w-full mt-8 tablet:mt-6 hidden tablet:block" />
        <img class="w-full mt-4 tablet:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
      </div>
    </div>
    <div class="laptop:w-1/2 laptop:ml-8 laptop:ml-4 laptop:mt-0 tablet:mt-6 mt-4 laptop:flex flex-col justify-between">
      <div class="relative">
        <div>
          <p class="tablet:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
          <div class="absolute bottom-0 left-0 tablet:p-10 p-6">
            <h2 class="text-xl font-semibold 5 text-white">Subscribe to your newsletter to stay in the loop. </h2>
             <p class="text-base leading-4 text-white mt-2">Our newsletter is sent once in <br />
            a week on every friday so subscribe to get latest news and updates.</p>
           
          <div class="sm:border border-white flex-col sm:flex-row flex items-center mt-6 laptop:w-5/12 w-full space-y-4 sm:space-y-0">
            <input class="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
            <button class="focus:outline-none focus:ring-offset-2 focus:ring w-full sm:w-auto bg-teal-500 py-4 px-6 hover:bg-opacity-75">Subscribe</button>
         
        </div>
          </div>
        </div>
        <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" class="w-full tablet:block hidden" />
        <img class="w-full tablet:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
      </div>
      <div class="tablet:flex items-center justify-between laptop:gap-x-8 gap-x-6 tablet:mt-6 mt-4">
        <div class="relative w-full">
          <div>
            <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div class="absolute bottom-0 left-0 p-6">
              <h2 class="text-xl font-semibold 5 text-white">Near Viphavadi Gate </h2>
              <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p class="pr-2 text-sm font-medium leading-none">All Details</p>
                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src="https://i.ibb.co/3yvZBpm/img-5.png" class="w-full" alt="chair" />
        </div>
        <div class="relative w-full tablet:mt-0 mt-4">
          <div>
            <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div class="absolute bottom-0 left-0 p-6">
              <h2 class="text-xl font-semibold 5 text-white">Near Phaholyothin Gate</h2>
              <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p class="pr-2 text-sm font-medium leading-none">All Details</p>
                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src="https://i.ibb.co/gDdnJb5/img-6.png" class="w-full" alt="wall design" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>

    </div>
        
     );     
     
}
 
export default Landing;

