// import FindMatch_card from './findMatch_card';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  getDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './card.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useFirebase from '../usefirebase';
import * as React from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/navbar_owner';

const OwnerPosted = () => {
  const { user, db } = useFirebase();

  // const [userDataArray, setUserDataArray] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  // const postedCollection = collection(db, 'room');

  const fetchRoom = React.useCallback(() => {
    if (!user) {
      return;
    }

    const q = query(
      collection(db, 'room'),
      where('user.email', '==', user.email),
    );

    const queryData = async () => {
      const roomsResponse = await (await getDocs(q)).docs;
      setRooms(roomsResponse);
    };
    queryData();
  }, [user]);

  useEffect(() => {
    fetchRoom();
  }, [user, fetchRoom]);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemovePosted = async (id) => {
    console.log(id);
    console.log(user.email);
    const data = await getDoc(doc(db, 'room', id));
    if (data.exists()) {
      await deleteDoc(doc(db, 'room', id));
    }

    fetchRoom();
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <div className=" 2xl:mx-auto 2xl:container mx-4  ">
        <Navbar />
        <div className="laptop:flex">
          <div className="relative items-end font-bold laptop:mt-10 ">
            <h2 className="block tablet:hidden text-2xl ">Posted</h2>
          </div>

          <div className="laptop:pr-20 laptop:px-4">
            <div className="relative laptop:flex font-bold mt-10 ">
              <h2 className="hidden tablet:block text-2xl">Posted</h2>
              <form
                onSubmit={(event) => {
                  event.preventDefault();

                  const queryData = async () => {
                    const savedCondition = [
                      where('user.email', '==', user.email),
                    ];
                    if (event.currentTarget.search.value !== '') {
                      savedCondition.push(
                        where('room', '==', event.currentTarget.search.value),
                      );
                    }
                    const roomsResponse = await (
                      await getDocs(
                        query(collection(db, 'room'), ...savedCondition),
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
                      <div>
                        <Button
                          variant="outlined"
                          onClick={handleClickOpen('paper')}
                        >
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
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          scroll={scroll}
                          aria-labelledby="scroll-dialog-title"
                          aria-describedby="scroll-dialog-description"
                        >
                          <DialogTitle id="scroll-dialog-title">
                            Do you want to delete your dorm post?
                          </DialogTitle>

                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>

                            <Button
                              onClick={() => {
                                handleRemovePosted(roomref.id);
                              }}
                            >
                              Confirm
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    );
                  })}
                </section>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerPosted;
