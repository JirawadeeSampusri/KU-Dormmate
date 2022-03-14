// import { useState, useEffect} from "react";
import BlogList from "./bloglist";
import useFetch from "../useFetch";
import './landing.css';
import weather from "./weather";
import Card from "./card";

const breakPoints= [
  { width:1, itemToShow: 1},
  { width:550, itemToShow: 2},
  { width:768, itemToShow: 3},
  { width:1200, itemToShow: 4},
];

const Landing_Renter = () => {

    return ( 
      <div class=" 2xl:mx-auto 2xl:container mx-4  ">

        <div role="main" class="flex flex-col items-center justify-center mb-6 ">
          <div className="flex-shrink-0 flex items-center">
              <img
                className="block laptop:hidden h-11 w-auto"
                src={require('./photo/logo1.png')}
                // src="./assets/logo.jpg'"
                alt="Workflow"
              />
              
            </div>
        </div>
        

       

    
        
        <div class="relative pt-12 bg-blueGray-50">

        {/* Information */}
      

        <div class=" flex flex-wrap pb-12  ">
          <div class="w-full tablet:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." class="max-w-full rounded-lg shadow-lg" src={require('./photo/img3.jpeg')}/>
          </div>
          <div class="w-full tablet:w-5/12 ml-auto mr-auto px-4">
            <div class="tablet:pr-2">
              <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-3 mb-6 shadow-lg rounded-full bg-pink-300 ">
                <i class="fas fa-rocket text-xl"></i>
              </div>
              <h3 class="text-3xl font-semibold">A growing company</h3>
              <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                The extension comes with three pre-built pages to help you get
                
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fas fa-fingerprint"></i></span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">
                        Gate 1
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fab fa-html5"></i></span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">Gate 2</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="far fa-paper-plane"></i></span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">Gate 3</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="far fa-paper-plane"></i></span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">Phaholyothin Gate</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="far fa-paper-plane"></i></span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">Viphavadi Gate</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="relative items-center justify-center">
        
          {/* <!-- All Cards Container --> */}
          <div class="laptop:flex items-center container mx-auto my-auto">

            {/* <!-- Card 1 --> */}
            <div class="laptop:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
              {/* <!-- Card Image --> */}
              <img src="https://picsum.photos/id/29/2106/1404" alt=""class="overflow-hidden"/>
              {/* <!-- Card Content --> */}
              <div class="p-4">
                <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">Climb the Mountains</h3>
                <p class="text-justify">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
                <div class="mt-5">
                  <a href="" class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</a>
                </div>
              </div>
            </div>
            {/* <!-- Card 1 --> */}
            <div class="laptop:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
              {/* <!-- Card Image --> */}
              <img src="https://picsum.photos/id/29/2106/1404" alt=""class="overflow-hidden"/>
              {/* <!-- Card Content --> */}
              <div class="p-4">
                <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">Climb the Mountains</h3>
                <p class="text-justify">The be might what days revellers, which sought to a nor. Land from to suits his some. Saw him counsel begun mother though but. Ofttimes soils of since mighty pollution.</p>
                <div class="mt-5">
                  <a href="" class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</a>
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div class="laptop:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
              {/* <!-- Card Image --> */}
              <img src="https://picsum.photos/id/247/2106/1404" alt=""class="overflow-hidden"/>
              {/* <!-- Card Content --> */}
              <div class="p-4">
                <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">Explore the Desert</h3>
                <p class="text-justify">Rapping wind chamber have was has, is all of thy stood chamber his bore. Nameless or as door tapping both thy grew lenore. We my still respiterespite lie, with lordly.</p>
                <div class="mt-5">
                  <a href="" class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</a>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div class="laptop:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
              {/* <!-- Card Image --> */}
              <img src="https://picsum.photos/id/342/2106/1404" alt=""class="overflow-hidden" />
              {/* <!-- Card Content --> */}
              <div class="p-4">
                <h3 class="font-medium text-gray-600 text-lg my-2 uppercase">Tour the City</h3>
                <p class="text-justify">Upon but that objects tis sore would what. Who formed in coffined heartless shades, there mine was heart vast flaunting he low relief uncouth, dear and and but suffice ofttimes.</p>
                <div class="mt-5">
                  <a href="" class="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read More</a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer --> */}
        
        </div>
        </div>
        <Card />


      </div>
        
     );     
     
}
 
export default Landing_Renter;

