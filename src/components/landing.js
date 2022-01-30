// import { useState, useEffect} from "react";
import BlogList from "./bloglist";
import useFetch from "../useFetch";


const Landing = () => {

    return ( 
        
        <div class="">
        <div
          class="flex flex-col tablet:grid grid-cols-9 mx-auto p-2 text-blue-50"
        >
     
          
         
          <div class="flex tablet:contents">
            <div class="col-start-5 col-end-6 mr-10 tablet:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div
                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
              ></div>
            </div>
            <div
              class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-2 mr-auto shadow-md"
            >
              <h3 class="font-semibold text-lg mb-1">First Gate</h3>
            
            </div>
          </div>
       
          <div class="flex flex-row-reverse tablet:contents">
            <div
              class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-2 ml-auto shadow-md"
            >
              <h3 class="font-semibold text-lg mb-1">Second Gate</h3>
             
            </div>
            <div class="col-start-5 col-end-6 tablet:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div
                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
              ></div>
            </div>
          </div>


          <div class="flex tablet:contents">
            <div class="col-start-5 col-end-6 mr-10 tablet:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div
                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
              ></div>
            </div>
            <div
              class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-2 mr-auto shadow-md"
            >
              <h3 class="font-semibold text-lg mb-1">Third Gate</h3>
            
            </div>
          </div>
          

          <div class="flex flex-row-reverse tablet:contents">
            <div
              class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-2 ml-auto shadow-md"
            >
              <h3 class="font-semibold text-lg mb-1">Paholyothin Gate</h3>
            
            </div>
            <div class="col-start-5 col-end-6 tablet:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div
                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
              ></div>
            </div>
          </div>
       
          
           <div class="flex tablet:contents">
            <div class="col-start-5 col-end-6 mr-10 tablet:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div
                class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
              ></div>
            </div>
            <div
              class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-2 mr-auto shadow-md"
            >
              <h3 class="font-semibold text-lg mb-1">Viphavadi Gate</h3>
            
            </div>
          </div>

          
        </div>
      </div>
        

        
        
     );
}
 
export default Landing;