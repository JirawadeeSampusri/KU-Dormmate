// import FindMatch_card from './findMatch_card';
import {
  getDoc,
  getDocs,
  doc,
  query,
  where,
  collection,
} from 'firebase/firestore';
import Navbar from './navbar';
import { useEffect } from 'react';
import useFirebase from '../usefirebase';
import * as React from 'react';

const SavedDorm = () => {
  const { user, db } = useFirebase();
  const [rooms, setRooms] = React.useState([]);
  const [setProfileOwner] = React.useState([]);

  const favoriteCollection = collection(db, 'favorite');

  useEffect(() => {
    if (!user) {
      return;
    }

    const queryData = async () => {
      const q2 = query(favoriteCollection, where('email', '==', user.email));
      const FavoriteResponse = (await getDocs(q2)).docs;
      const roomResponse = [];
      for (const fav of FavoriteResponse) {
        const roomQuery = doc(db, 'room', fav.data().roomid);
        const returnDoc = await getDoc(roomQuery);
        roomResponse.push(returnDoc.data());
      }
      setRooms(() => roomResponse);

      const profileresponse = roomResponse.map(async (value) => {
        console.log(value);
        const p = doc(db, 'profileowner', value.user.email);
        const profileResponse = await getDoc(p);
        return profileResponse.data();
      });

      setProfileOwner(() => profileresponse);
    };
    queryData();
  }, [user]);
  console.log(rooms);

  return (
    <div>
      <div className=" 2xl:mx-auto 2xl:container mx-4  ">
        <Navbar />
        <div className="laptop:flex">
          <div className="relative items-end font-bold laptop:mt-10 ">
            <h2 className="block tablet:hidden text-2xl ">Saved Favorite</h2>
          </div>
          <div className="laptop:pr-20 laptop:px-4">
            <div className="relative laptop:flex font-bold mt-10 ">
              <h2 className="hidden tablet:block text-2xl">Saved Favorite</h2>
            </div>
            <div className="p-4 px-6 laptop:px-4 mt-6 mb-12 rounded-lg bg-white ">
              <div className="mt-4 grid tablet:grid-cols-3 laptop:grid-cols-3 gap-x-6 gap-y-8 ">
                {rooms.map((value) => (
                  <div key={value.id}>
                    <article className="bg-white group relative rounded-lg overflow-hidden shadow-laptop hover:shadow-2xl transform duration-200">
                      <div className="relative w-full h-80 tablet:h-48 laptop:h-64  head-text">
                        {/* {room.file.map((file) => (
                          <img key={file} src={file} />
                        ))} */}
                        <img
                          src={value.file[0]}
                          className="w-full h-full object-center object-cover"
                        />
                        <div className="text-on-image">
                          <p className="text-md"> {value.user.email}</p>
                        </div>
                      </div>
                      <div className="px-3 py-4">
                        <h3 className="text-sm text-gray-500 pb-2">
                          <a
                            className="no-underline bg-teal-600 py-1 px-2 text-white rounded-lg"
                            href="#"
                          >
                            <span className="absolute inset-0"></span>
                            {value.price} BHT
                          </a>
                        </h3>
                        <p className="text-base font-semibold text-gray-900 group-hover:text-teal-600">
                          {value.room}{' '}
                        </p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedDorm;
