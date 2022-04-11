import { collection, query, where, getDocs } from 'firebase/firestore';

import { useEffect, useState } from 'react';
import './card.css';
import { db } from '../firebase';

const FindMatch_card = () => {
  const q = query(collection(db, 'roommate'), where('place', '!=', null));

  // const [userDataArray, setUserDataArray] = useState([]);
  const [roommates, setRoommates] = useState([]);

  useEffect(() => {
    const queryData = async () => {
      const roommateResponse = await (await getDocs(q)).docs;
      setRoommates(roommateResponse);
    };
    queryData();
  }, []);

  return (
    <div>
      <div className="laptop:flex">
        <div className="relative flex items-end font-bold mt-10 ">
          <h2 className="block tablet:hidden text-2xl">All Roommate Finders</h2>
        </div>

        <div className=" laptop:pr-2 laptop:px-10 ">
          <div className="text-white rounded-2xl mt-9 bg-gray-900 laptop:ml-2 laptop:w-72 h-auto">
            <div className="rounded-xl container pt-5 laptop:flex justify-center">
              <div className="mb-3 laptop:w-96">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();

                    const queryData = async () => {
                      const conditions = [];

                      console.log(event.currentTarget.gender.value);
                      switch (event.currentTarget.gender.value) {
                        case '1':
                          conditions.push(where('male', '==', true));
                          break;
                        case '2':
                          conditions.push(where('female', '==', true));
                          break;
                        case '3':
                          conditions.push(where('others', '==', true));
                          break;
                      }

                      switch (event.currentTarget.age.value) {
                        case '0':
                          conditions.push(where('age', '!=', null));
                          break;
                        case '1':
                          conditions.push(where('lowestAge', '==', true));
                          break;
                        case '2':
                          conditions.push(where('midAge', '==', true));
                          break;
                        case '3':
                          conditions.push(where('higherAge', '==', true));
                          break;
                        case '4':
                          conditions.push(where('highestAge', '==', true));
                          break;
                      }

                      switch (event.currentTarget.level.value) {
                        case '0':
                          conditions.push(where('level', '!=', null));
                          break;
                        case '1':
                          conditions.push(where('firstYear', '==', true));
                          break;
                        case '2':
                          conditions.push(where('secYear', '==', true));
                          break;
                        case '3':
                          conditions.push(where('thirdYear', '==', true));
                          break;
                        case '4':
                          conditions.push(where('fourthYear', '==', true));
                          break;
                        case '5':
                          conditions.push(
                            where('morethanfourthYear', '==', true),
                          );
                          break;
                      }

                      console.log(conditions);

                      const roommateResponse = await (
                        await getDocs(
                          query(collection(db, 'roommate'), ...conditions),
                        )
                      ).docs;

                      console.log(roommateResponse);

                      setRoommates(roommateResponse);
                    };
                    queryData();
                  }}
                >
                  <h1 className="text-2xl text-teal-600 text-center">
                    CATEGORY
                  </h1>
                  <br />
                  <p> Gender </p>
                  <select
                    name="gender"
                    className="text-gray-300 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-gray-800 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded-md transition duration-300 ease-in-out m-0 focus:border-gray-500 focus:outline-none"
                  >
                    <option value="0" selected>
                      Select
                    </option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Others</option>
                  </select>
                  <br />
                  <p> Specific Place </p>
                  <select
                    name="age"
                    className="text-gray-300 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-gray-800 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded-md transition duration-300 ease-in-out m-0 focus:border-gray-500 focus:outline-none"
                  >
                    <option value="0" selected>
                      Select
                    </option>
                    <option value="1">17 - 19</option>
                    <option value="2">20 - 22</option>
                    <option value="3">23 - 25</option>
                    <option value="4">more than 25</option>
                  </select>
                  <br />
                  <p> Level </p>
                  <select
                    name="level"
                    className="text-gray-300 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-gray-800 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded-md transition duration-300 ease-in-out m-0 focus:border-gray-500 focus:outline-none"
                  >
                    <option selected>select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="3">Four</option>
                    <option value="3">More than Four</option>
                  </select>
                  <br />
                  <button
                    type="submit"
                    className="mb-3 border-2 border-teal-600 text-white w-full py-2 rounded-md text-1xl font-medium hover:bg-teal-600 transition duration-300"
                  >
                    APPLY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="laptop:pr-30 laptop:pl-10">
          <div className="relative flex items-end font-bold mt-10 ">
            <h2 className="hidden tablet:block text-2xl">
              All Roommate Finders
            </h2>
          </div>

          <div className="p-4 px-6 laptop:px-4 laptop:mt-6 mb-12 rounded-lg bg-white ">
            <article>
              <section className="mt-4 grid ">
                {roommates.map((roommateref) => {
                  const roommate = roommateref.data();
                  return (
                    <article className="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                      {/* <div className="px-3 py-4">
                        
                        <h3 className="text-sm text-gray-500 pb-2">
                          <a
                            className="bg-teal-600 py-1 px-2 text-white rounded-lg"
                            href="#"
                          >
                            <span className="absolute inset-0"></span>
                            {roommate.user.email}
                            {roommate.price} BHT
                          </a>
                        </h3>
                        <p className="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                          {roommate.room}{' '}
                        </p>
                      </div> */}
                      <div class="laptop:flex shadow rounded-lg border  border-gray-400">
                        <div class="bg-blue-600 rounded-lg laptop:w-2/12 py-4 block h-full shadow-inner">
                          <div class="text-center tracking-wide p-2">
                            <div class="text-white font-bold text-2xl ">
                              {roommate.price}
                            </div>
                            <div class="text-white font-normal text-md">
                              BHT/MONTH
                            </div>
                          </div>
                        </div>
                        <div class="w-full  laptop:w-11/12 xl:w-full px-1 bg-white  laptop:px-2 laptop:py-2 tracking-wide">
                          <div class="flex flex-row mt-2 laptop:justify-start justify-center">
                            <div class="text-gray-700 font-medium text-sm text-center laptop:text-left px-2">
                              <i class="far fa-clock"></i> 1:30 PM
                            </div>
                            <div class="text-gray-700 font-medium text-sm text-center laptop:text-left px-2">
                              Organiser : {roommate.user.email}
                            </div>
                          </div>
                          <div class="font-semibold text-gray-800 text-xl text-center laptop:text-left px-2">
                            International Conference Dubai
                          </div>

                          <div class="text-gray-600 font-medium text-sm pt-1 text-center laptop:text-left px-2">
                            A-142/1, A-142, Ganesh Nagar, Tilak Nagar, New
                            Delhi, 110018
                          </div>
                        </div>
                        <div class="flex flex-row items-center w-full laptop:w-1/3 bg-white laptop:justify-end justify-center px-2 py-4 laptop:px-0">
                          <span class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
                            {roommate.user.created}
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindMatch_card;
