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
  const [profileOwner, setProfileOwner] = React.useState([]);

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
        <div className="flex-grow ">
          {rooms.map((value) => (
            <div key={value.id}>{value.room}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedDorm;
