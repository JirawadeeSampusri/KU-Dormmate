import Navbar from '../components/navbar_owner';
import * as React from 'react';
import ScrollDialog from './dialog';
import { useEffect } from 'react';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import useFirebase from '../usefirebase';
import Button from '@mui/material/Button';
import { getAuth, signOut } from 'firebase/auth';

const Profile_Owner = () => {
  const { user, db } = useFirebase();
  const auth = getAuth();

  const [name, setName] = React.useState('');
  const [tel, setTel] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [instagram, setInstagram] = React.useState('');
  const [facebook, setFacebook] = React.useState('');
  const [twitter, setTwitter] = React.useState('');

  const logout = async () => {
    await signOut(auth);
    window.location.replace('/login_owner');
  };

  const handleSubmit = async () => {
    let data = {
      name: name,
      location: location,
      instagram: instagram,
      facebook: facebook,
      twitter: twitter,
      tel: tel,
      user: {
        email: user.email,
        created: user.metadata.creationTime,
        // 'name': user.displayName,
      },
    };
    console.log(data);
    let response = await setDoc(doc(db, 'profileowner', user.email), data);
    console.log(response);
  };
  console.log(user);

  useEffect(() => {
    if (!user) {
      return;
    }

    const queryData = async () => {
      const p = doc(db, 'profileowner', user.email);
      const profileResponse = await getDoc(p);

      const profileDetail = profileResponse.data();
      console.log(queryData);

      if (!profileDetail.name) {
        return;
      }

      setName(() => profileDetail.name);
      setTel(() => profileDetail.tel);
      setLocation(() => profileDetail.location);
      setInstagram(() => profileDetail.instagram);
      setFacebook(() => profileDetail.facebook);
      setTwitter(() => profileDetail.twitter);
    };
    queryData();
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
        <div className="top h-64 w-full bg-zinc-800 overflow-hidden relative">
          <img
            src={require('./photo/bg3.png')}
            alt=""
            className="bg w-full h-full object-cover object-center absolute z-0"
          />
          <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
            <img
              src={require('./photo/image1.jpeg')}
              className="h-24 w-24 object-cover rounded-full"
            />
            <h1 className="text-xl mb-2 mt-2 font-semibold">
              {name ? name : 'Owner '}
            </h1>
            <h4 className="text-sm mb-4  font-semibold">
              Join since {auth.currentUser.metadata.creationTime}
            </h4>
            <div className="flex">
              <div className="flex-grow ">
                <ScrollDialog />
              </div>
              <div className="flex-grow ml-2 ">
                <a className="no-underline" href="./ownerposted">
                  <Button variant="outlined">Posted</Button>
                </a>
              </div>
              <div className="flex-grow ml-2 ">
                <a className="no-underline" href="./saved_dorm">
                  <Button variant="outlined">Saved</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 bg-white laptop:p-14 ">
          <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid tablet:space-x-0 tablet:space-y-4 tablet:flex-col tablet:col-span-2 tablet:justify-start ">
            <button
              href="#"
              className="text-sm p-2 bg-teal-600 text-white text-center rounded font-bold"
            >
              Basic Information
            </button>

            {/* <a
              href="#"
              className="text-sm p-2 bg-slate-300 text-center rounded font-semibold hover:bg-teal-600 hover:text-gray-200"
            >
              Posted
            </a> */}

            <button
              onClick={logout}
              className="text-sm p-2 bg-red-600 text-center rounded font-semibold  hover:text-gray-200"
            >
              Logout
            </button>
          </div>
          <div className="col-span-12 tablet:border-solid tablet:border-l tablet:border-black tablet:border-opacity-25 h-full pb-12 tablet:col-span-10">
            <div className="px-4 pt-4">
              <form action="#" className="flex flex-col space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold">Basic Information</h3>
                  <hr />
                </div>
                <div className="form-item">
                  <label className="text-xl ">Name</label>
                  <input
                    type="text"
                    placeholder="name"
                    id="name"
                    onChange={function (event) {
                      setName(event.target.value);
                    }}
                    value={name}
                    className="w-full appearance-none text-black  rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  />
                </div>

                <div className="flex flex-col space-y-4 tablet:space-y-0 tablet:flex-row tablet:space-x-4">
                  <div className="form-item w-full">
                    <label className="text-xl ">Tel</label>
                    <input
                      type="tel"
                      placeholder="tel"
                      id="tel"
                      onChange={function (event) {
                        setTel(event.target.value);
                      }}
                      value={tel}
                      className="w-full appearance-none text-black  rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold ">More Details</h3>
                  <hr />
                </div>

                <div className="form-item w-full">
                  <label className="text-xl ">Contact / Location</label>
                  <textarea
                    cols="30"
                    rows="5"
                    placeholder="details"
                    id="location"
                    onChange={function (event) {
                      setLocation(event.target.value);
                    }}
                    value={location}
                    className="w-full appearance-none text-black  rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 "
                  >
                    {location}
                  </textarea>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">My Social Media</h3>
                  <hr />
                </div>

                <div className="form-item">
                  <label className="text-xl ">Instagram</label>
                  <input
                    type="text"
                    placeholder="https://instagram.com/"
                    id="instagram"
                    onChange={function (event) {
                      setInstagram(event.target.value);
                    }}
                    value={instagram}
                    className="w-full appearance-none text-black  rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  />
                </div>
                <div className="form-item">
                  <label className="text-xl ">Facebook</label>
                  <input
                    type="text"
                    placeholder="https://facebook.com/"
                    id="facebook"
                    onChange={function (event) {
                      setFacebook(event.target.value);
                    }}
                    value={facebook}
                    className="w-full appearance-none text-black  rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  />
                </div>
                <div className="form-item">
                  <label className="text-xl ">Twitter</label>
                  <input
                    type="text"
                    placeholder="https://twitter.com/"
                    id="twitter"
                    onChange={function (event) {
                      setTwitter(event.target.value);
                    }}
                    value={twitter}
                    className="w-full appearance-none text-black  rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 "
                  />
                </div>
              </form>
              <button
                href="#"
                onClick={handleSubmit}
                className="text-sm p-2 mt-10 text-white bg-sky-600 text-center rounded font-semibold hover:bg-sky-600 hover:text-gray-200"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_Owner;
