import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const Card = () => {
  const q = query(collection(db, 'room'), where('price', '!=', null));

  // const [userDataArray, setUserDataArray] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const queryData = async () => {
      const roomsResponse = await (await getDocs(q)).docs;
      setRooms(roomsResponse);
    };
    queryData();
  }, []);

  return (
    <div>
      <div className="laptop:flex">
        <div className="relative items-end font-bold laptop:mt-10 ">
          <h2 className="block tablet:hidden text-2xl ">All Offers</h2>
        </div>

        <div className="laptop:pr-2 laptop:px-10 ">
          <div className="text-white rounded-2xl mt-9 bg-gray-900 ml-2 w-72 h-auto">
            <div className="rounded-xl container pt-5 laptop:flex justify-center">
              <div className="mb-3 laptop:w-96">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();

                    const queryData = async () => {
                      const conditions = [];

                      console.log(event.currentTarget.price.value);
                      switch (event.currentTarget.price.value) {
                        case '0':
                          conditions.push(where('price', '!=', null));
                          break;
                        case '1':
                          conditions.push(where('price', '<', 4000));
                          break;
                        case '2':
                          conditions.push(where('price', '>=', 4000));
                          conditions.push(where('price', '<', 7000));
                          break;
                        case '3':
                          conditions.push(where('price', '>=', 7000));
                          conditions.push(where('price', '<', 10000));
                          break;
                        case '4':
                          conditions.push(where('price', '>=', 10000));
                          break;
                      }

                      switch (event.currentTarget.gate.value) {
                        case '1':
                          conditions.push(where('gate1', '==', true));
                          break;
                        case '2':
                          conditions.push(where('gate2', '==', true));
                          break;
                        case '3':
                          conditions.push(where('gate3', '==', true));
                          break;
                        case '4':
                          conditions.push(
                            where('gatePhaholyothin', '==', true),
                          );
                          break;
                        case '5':
                          conditions.push(where('gateViphavadi', '==', true));
                          break;
                      }

                      console.log(conditions);

                      const roomsResponse = await (
                        await getDocs(
                          query(collection(db, 'room'), ...conditions),
                        )
                      ).docs;

                      console.log(roomsResponse);

                      setRooms(roomsResponse);
                    };
                    queryData();
                  }}
                >
                  <h1 className="text-2xl text-teal-600 text-center">
                    CATEGORY
                  </h1>
                  <br />
                  <p> Price </p>
                  <select
                    name="price"
                    className="text-gray-300 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-gray-800 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded-md transition duration-300 ease-in-out m-0 focus:border-gray-500 focus:outline-none"
                  >
                    <option value="0" selected>
                      Select
                    </option>
                    <option value="1">Less Than 4000</option>
                    <option value="2">4000 - 7000</option>
                    <option value="3">7000 - 10,000</option>
                    <option value="3">More Than 10,000</option>
                  </select>
                  <br />
                  <p> Specific Place </p>
                  <select
                    name="gate"
                    className="text-gray-300 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-gray-800 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded-md transition duration-300 ease-in-out m-0 focus:border-gray-500 focus:outline-none"
                  >
                    <option value="0" selected>
                      Select
                    </option>
                    <option value="1">Gate 1</option>
                    <option value="2">Gate 2</option>
                    <option value="3">Gate 3</option>
                    <option value="4">Viphavadi Gate</option>
                    <option value="5">Phaholyothin Gate</option>
                  </select>
                  <br />
                  <p> Level </p>
                  <select className="text-gray-300 form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-gray-800 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded-md transition duration-300 ease-in-out m-0 focus:border-gray-500 focus:outline-none">
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
        <div className="laptop:pr-20 laptop:px-4">
          <div className="relative laptop:flex font-bold mt-10 ">
            <h2 className="hidden tablet:block text-2xl">All Offers</h2>
            <form
              onSubmit={(event) => {
                event.preventDefault();

                const queryData = async () => {
                  const roomsResponse = await (
                    await getDocs(
                      query(
                        collection(db, 'room'),
                        where('room', '==', event.currentTarget.search.value),
                      ),
                    )
                  ).docs;

                  setRooms(roomsResponse);
                };
                queryData();
              }}
            >
              <span className="laptop:ml-6 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  className="flex-grow px-12 rounded-l-full rounded-r-full text-sm focus:outline-none"
                />
                <button className="fas fa-search m-3 mr-5 text-lg text-gray-700  w-4 h-4"></button>
              </span>
            </form>
          </div>
          <div className="p-4 px-6 laptop:px-4 mt-6 mb-12 rounded-lg bg-white ">
            <article>
              <section className="mt-4 grid tablet:grid-cols-3 laptop:grid-cols-3 gap-x-6 gap-y-8">
                {rooms.map((roomref) => {
                  const room = roomref.data();
                  return (
                    <Link to={`/details_room/${roomref.id}`}>
                      <article className="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                        <div className="relative w-full h-80 tablet:h-48 laptop:h-64  head-text">
                          {/* {room.file.map((file) => (
                          <img key={file} src={file} />
                        ))} */}
                          <img
                            src={room.file[0]}
                            className="w-full h-full object-center object-cover"
                          />
                          <div className="text-on-image">
                            <p className="text-md"> {room.user.email}</p>
                          </div>
                        </div>
                        <div className="px-3 py-4">
                          <h3 className="text-sm text-gray-500 pb-2">
                            <a
                              className="bg-teal-600 py-1 px-2 text-white rounded-lg"
                              href="#"
                            >
                              <span className="absolute inset-0"></span>
                              {room.price} BHT
                            </a>
                          </h3>
                          <p className="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                            {room.room}{' '}
                          </p>
                        </div>
                      </article>
                    </Link>
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

export default Card;
