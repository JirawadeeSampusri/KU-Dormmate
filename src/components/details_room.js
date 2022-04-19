import { useParams } from 'react-router-dom';
import {
  getDoc,
  query,
  where,
  doc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import useFirebase from '../usefirebase';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { collection, addDoc } from 'firebase/firestore';

const DetailsRoom = () => {
  const { user, db } = useFirebase();

  let { id } = useParams();

  const favoriteCollection = collection(db, 'favorite');

  const [room, setRooms] = useState(null);
  const [profileowner, setProfileowner] = useState(null);
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = async () => {
    let data = {
      roomid: id,
      email: user.email,
    };
    console.log(data);
    let response = await addDoc(favoriteCollection, data);
    setFavorite(true);
    console.log(response);
  };

  const handleRemoveFavorite = async () => {
    const q = query(
      favoriteCollection,
      where('email', '==', user.email),
      where('roomid', '==', id),
    );
    const removeFavoriteResponse = (await getDocs(q)).docs;
    removeFavoriteResponse.forEach(async (value) => {
      await deleteDoc(doc(db, 'favorite', value.id));
    });
    setFavorite(false);
  };

  useEffect(() => {
    if (!user) {
      return;
    }

    const queryData = async () => {
      const q1 = doc(db, 'room', id);
      const roomsResponse = await getDoc(q1);

      setRooms(() => roomsResponse.data());
      const p = doc(db, 'profileowner', roomsResponse.data().user.email);
      const profileResponse = await getDoc(p);
      console.log(p);

      setProfileowner(() => profileResponse.data());

      const q2 = query(
        favoriteCollection,
        where('email', '==', user.email),
        where('roomid', '==', id),
      );

      const FavoriteResponse = (await getDocs(q2)).docs;

      if (FavoriteResponse.length > 0) {
        setFavorite(() => true);
      }
    };
    queryData();
  }, [user]);

  if (!room || !profileowner) {
    return 'loading';
  }

  // console.log(room);

  const checkgate = () => {
    if (room.gate1 === true && room.gate2 === true && room.gate3 === true) {
      return 'gate1, gate2, gate3';
    } else if (room.gate1 === true && room.gate2 === true) {
      return 'gate1, gate2';
    } else if (room.gate2 === true && room.gate3 === true) {
      return 'gate2, gate3';
    } else if (room.gate3 === true && room.gateViphavadi === true) {
      return 'gate Viphavadi';
    } else if (room.gate1 === true) {
      return 'gate 1';
    } else if (room.gate2 === true) {
      return 'gate 2';
    } else if (room.gate3 === true) {
      return 'gate 3';
    } else if (room.gatePhaholyothin === true) {
      return 'gate Phaholyothin';
    } else if (room.gateViphavadi === true) {
      return 'gate Viphavadi';
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="pt-6">
        {/* <!-- Product info --> */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 tablet:px-6 laptop:max-w-7xl laptop:pt-16 laptop:pb-24 laptop:px-8 laptop:grid laptop:grid-cols-3 laptop:grid-rows-[auto,auto,1fr] laptop:gap-x-8">
          <div className="laptop:col-span-2 laptop:border-r laptop:border-gray-200 laptop:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 tablet:text-3xl">
              {' '}
              {room.room}
            </h1>
          </div>

          {/* <!-- Options --> */}
          <div className="mt-4 laptop:mt-0 laptop:row-span-3">
            {/* <h2 className="sr-only">{room.room}</h2> */}
            <p className="text-3xl text-gray-900">{room.price} BHT</p>
            <form className="mt-10">
              {/* <!-- Colors --> */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium">
                    Specific Address :
                  </h3>
                  {checkgate()}
                </div>
              </div>

              {/* <!-- Sizes --> */}
              <div className="mt-10">
                <div className="items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium">
                    Address :
                  </h3>
                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">
                      {/* {profileowner.location} */}
                    </p>
                  </div>
                </div>
              </div>

              {!favorite && (
                <button
                  type="button"
                  onClick={handleFavorite}
                  className="mt-10 w-full bg-teal-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
                >
                  Save to Favorite
                </button>
              )}
              {favorite && (
                <button
                  type="button"
                  onClick={handleRemoveFavorite}
                  className="mt-10 w-full bg-teal-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
                >
                  Remove Favorite
                </button>
              )}
            </form>
          </div>

          <div className="py-10 laptop:pt-6 laptop:pb-16 laptop:col-start-1 laptop:col-span-2 laptop:border-r laptop:border-gray-200 laptop:pr-8">
            {/* <!-- Description and details --> */}
            <div>
              <h3 className="sr-only">Description</h3>

              {/* <div className="space-y-6">
                <p className="text-base text-gray-900">
                  The Basic Tee 6-Pack allows you to fully express your vibrant
                  personality with three grayscale options. Feeling adventurous?
                  Put on a heather gray tee. Want to be a trendsetter? Try our
                  exclusive colorway: &quot;Black&quot;. Need to add an extra
                  pop of color to your outfit? Our white tee has you covered.
                </p>
              </div> */}
            </div>

            <div className="">
              <h3 className="text-sm font-medium text-gray-900">Images</h3>
              {/* <Carousel dynamicHeight={true}>
                {room.file.map((file) => {
                  return (
                    <div>
                      <img key={file}  src={file} />
                    </div>
                  );
                })} */}
              {/* </Carousel> */}
              {/* <Carousel dynamicHeight={false}>
                {room.file.map((file) => (
                  <img key={file} src={file} />
                ))}

              </Carousel> */}
              <div className="block laptop:hidden">
                <ImageList>
                  {room.file.map((file) => (
                    <ImageListItem key={file}>
                      <img src={file} loading="lazy" />
                      ))
                      {/* <img
                     src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                     srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                     alt={item.title}
                     loading="lazy"
                   /> */}
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
              <div className="hidden tablet:block">
                <ImageList sx={{ width: 500, height: 450 }}>
                  {room.file.map((file) => (
                    <ImageListItem key={file}>
                      <img src={file} loading="lazy" />
                      ))
                      {/* <img
                     src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                     srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                     alt={item.title}
                     loading="lazy"
                   /> */}
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </div>
            {room.description && (
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{room.description}</p>
                </div>
              </div>
            )}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Contacts</h2>

              {/* <div className=" flex mt-4 space-y-6">
                  <p className="text-sm text-gray-600">tel</p>
                  <p className="text-sm mt-0 ml-4 text-gray-600">{profileOwner.tel}</p>
                </div> */}
              <div className=" flex  space-y-6">
                <p className="text-sm text-gray-600">Instragram</p>
                <p className="text-sm mt-0 ml-4 text-gray-600">
                  {profileowner.instagram}
                </p>
              </div>
              <div className=" flex  space-y-6">
                <p className="text-sm text-gray-600">Facebook</p>
                <p className="text-sm mt-0 ml-4 text-gray-600">
                  {profileowner.facebook}
                </p>
              </div>
              <div className=" flex  space-y-6">
                <p className="text-sm text-gray-600">Tel.</p>
                <p className="text-sm mt-0 ml-4 text-gray-600">
                  {profileowner.tel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsRoom;
