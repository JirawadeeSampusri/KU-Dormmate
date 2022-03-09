
import CustomizedDialogs from './dialog';
import ScrollDialog from'./dialog';
const Profile_Owner = () => {
    return(
         
        <div class="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
        <div class="top h-64 w-full bg-zinc-800 overflow-hidden relative" >
          <img src={require('./photo/bg3.png')}  alt="" class="bg w-full h-full object-cover object-center absolute z-0" /> 
          <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
            <img src={require('./photo/image1.jpeg')} class="h-24 w-24 object-cover rounded-full" />
            <h1 class="text-xl mt-2 font-semibold">ABC Condominium</h1>
            <h4 class="text-sm mb-6 font-semibold">Joined Since 21 November 2021</h4>
            {/* < CustomizedDialogs /> */}
            < ScrollDialog />
          </div>
        </div>
        <div class="grid grid-cols-12 bg-white laptop:p-14 ">
      
          <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid tablet:space-x-0 tablet:space-y-4 tablet:flex-col tablet:col-span-2 tablet:justify-start ">
      
            <a href="#" class="text-sm p-2 bg-teal-600 text-white text-center rounded font-bold">Basic Information</a>
      
            <a href="#" class="text-sm p-2 bg-slate-300 text-center rounded font-semibold hover:bg-teal-600 hover:text-gray-200">Posted</a>
      
            <a href="#" class="text-sm p-2 bg-rose-600 text-center rounded font-semibold hover:bg-red-600 hover:text-gray-200">Logout</a>

            
      
          </div>
      
          <div class="col-span-12 tablet:border-solid tablet:border-l tablet:border-black tablet:border-opacity-25 h-full pb-12 tablet:col-span-10">
            <div class="px-4 pt-4">
              <form action="#" class="flex flex-col space-y-8">
      
                <div>
                  <h3 class="text-2xl font-semibold">Basic Information</h3>
                  <hr />
                </div>
      
                <div class="form-item">
                  <label class="text-xl ">Name</label>
                  <input type="text" value="Antonia P. Howell" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"  />
                </div>
      
                <div class="flex flex-col space-y-4 tablet:space-y-0 tablet:flex-row tablet:space-x-4">
      
                  <div class="form-item w-full">
                    <label class="text-xl ">Username</label>
                    <input type="text" value="antonia" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
                  </div>
      
                  <div class="form-item w-full">
                    <label class="text-xl ">Email</label>
                    <input type="text" value="antoniaph@gmail.com" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "  />
                  </div>
                </div>
      
                <div>
                  <h3 class="text-2xl font-semibold ">More Details</h3>
                  <hr />
                </div>
      
                <div class="form-item w-full">
                  <label class="text-xl ">Contact / Location</label>
                  <textarea cols="30" rows="5" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!</textarea>
                </div>
      
                <div>
                  <h3 class="text-2xl font-semibold">My Social Media</h3>
                  <hr />
                </div>
      
                <div class="form-item">
                  <label class="text-xl ">Instagram</label>
                  <input type="text" value="https://instagram.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "  />
                </div>
                <div class="form-item">
                  <label class="text-xl ">Facebook</label>
                  <input type="text" value="https://facebook.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
                </div>
                <div class="form-item">
                  <label class="text-xl ">Twitter</label>
                  <input type="text" value="https://twitter.com/" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "  />
                </div>
      
              </form>
              <button href="#" class="text-sm p-2 mt-10 text-white bg-sky-600 text-center rounded font-semibold hover:bg-sky-600 hover:text-gray-200">Save Changed</button>
            </div>
          </div>
      
      
        </div>
      </div>
     
    );

    }

export default Profile_Owner;