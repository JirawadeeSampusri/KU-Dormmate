import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import useFirebase from '../usefirebase';
import { Carousel } from 'react-responsive-carousel';

const DetailsRoom = () => {
  const { db } = useFirebase();

  let { id } = useParams();

  const q = doc(db, 'room', id);

  const [room, setRooms] = useState(null);
  const [profileowner, setProfileowner] = useState(null);

  console.log(room);

  useEffect(() => {
    const queryData = async () => {
      const roomsResponse = await getDoc(q);

      setRooms(() => roomsResponse.data());
      const p = doc(db, 'profileowner', roomsResponse.data().user.email);
      const profileResponse = await getDoc(p);

      setProfileowner(() => profileResponse.data());
    };
    queryData();
  }, []);

  if (!room || !profileowner) {
    return 'loading';
  }

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
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Map
                  </a>
                </div>
              </div>

              {/* <!-- Sizes --> */}
              <div className="mt-10">
                <div className="items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium">
                    Address :
                  </h3>
                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{room.address}</p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 w-full bg-teal-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
              >
                Save to Favorite
              </button>
            </form>
          </div>

          <div className="py-10 laptop:pt-6 laptop:pb-16 laptop:col-start-1 laptop:col-span-2 laptop:border-r laptop:border-gray-200 laptop:pr-8">
            {/* <!-- Description and details --> */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  The Basic Tee 6-Pack allows you to fully express your vibrant
                  personality with three grayscale options. Feeling adventurous?
                  Put on a heather gray tee. Want to be a trendsetter? Try our
                  exclusive colorway: &quot;Black&quot;. Need to add an extra
                  pop of color to your outfit? Our white tee has you covered.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Images</h3>
              {/* <Carousel dynamicHeight={true}>
                {room.file.map((file) => {
                  return (
                    <div>
                      <img key={file}  src={file} />
                    </div>
                  );
                })}
              </Carousel> */}
              <Carousel dynamicHeight={true}>
                {room.file.map((file) => (
                  <img key={file} src={file} />
                ))}
              </Carousel>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{room.description}</p>
              </div>
            </div>
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
                <p className="text-sm text-gray-600">Twitter</p>
                <p className="text-sm mt-0 ml-4 text-gray-600">
                  {profileowner.twitter}
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
