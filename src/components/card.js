import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { useEffect, useState } from "react";
import './card.css';

const Card = () => {

    const q = query(collection(db, "room"), where("price", "!=", null));

    // const [userDataArray, setUserDataArray] = useState([]);
    const [rooms, setRooms] = useState([]);


     useEffect(() => {
        const queryData = async () => {
            const roomsResponse = await (await getDocs(q)).docs;
            setRooms(roomsResponse.map((rr) => rr.data()))
        }
        queryData()
      }, []);

   


    return(
        <div>
    
            <div>
                
                <div class="laptop:pr-60 laptop:px-60">
                <div class="relative flex items-end font-bold mt-10 ">
                        <h2 class="text-2xl">All Offers</h2>
                </div>   

                

                <div class="flex max-w-20xl mx-auto p-4 sm:px-6 laptop:px-4 mt-6 mb-12 rounded-lg bg-white ">

                    <article>
                                    
                        <section class="mt-4 grid tablet:grid-cols-2 laptop:grid-cols-4 gap-x-6 gap-y-8">    
                            {rooms.map((room) => {
                                return (<article class="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                                <div class="relative w-full h-80 tablet:h-48 laptop:h-64  head-text">

                                    <img src={require('./photo/image2.jpeg')}
                                    
                                        class="w-full h-full object-center object-cover" />
                                         <div class='text-on-image'>
                                      
                                        <p className="text-md"> {room.user.email}</p>
                                    </div>
                                </div>
                                <div class="px-3 py-4">
                                    <h3 class="text-sm text-gray-500 pb-2">
                                        <a class="bg-teal-600 py-1 px-2 text-white rounded-lg" href="#">
                                            <span class="absolute inset-0"></span>
                                            {room.price} BHT
                                           
                                        </a>
                                    </h3>
                                    <p class="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                                    {room.room} </p>
                                </div>
                            </article>
                        )
                            })}  
                            
                            
                        </section>
                    
                    </article>
                    
                </div>
      
   
      
         </div>
            </div>
        


        
        </div>

        
    );
    
     
}
 
export default Card;