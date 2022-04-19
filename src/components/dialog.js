import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth, storage } from '../firebase';
import { ref } from '@firebase/storage';
import { getDownloadURL, uploadBytesResumable } from 'firebase/storage';

export default function ScrollDialog() {
  const roomCollection = collection(db, 'room');
  const user = auth.currentUser;
  console.log(user);

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  // const [articles,setArticles] = useState([])

  const [room, setRoom] = React.useState('');
  const [price, setPrice] = React.useState();
  const [address, setAddress] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [isGate1, setIsGate1] = React.useState(false);
  const [isGate2, setIsGate2] = React.useState(false);
  const [isGate3, setIsGate3] = React.useState(false);
  const [isGateViphavadi, setIsViphavadi] = React.useState(false);
  const [isGatePhaholyothin, setIsPhaholyothin] = React.useState(false);
  const [files, setFiles] = React.useState([]);

  const [progress, setProgress] = React.useState(0);

  const formHandler = (e) => {
    e.preventDefault();

    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        console.log(uploadTask.snapshot.ref);
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          setFiles([...files, url]),
        );
      },
    );
  };

  const handleSubmit = async () => {
    let data = {
      room: room,
      price: +price,
      address: address,
      description: description,
      gate1: isGate1,
      gate2: isGate2,
      gate3: isGate3,
      gateViphavadi: isGateViphavadi,
      gatePhaholyothin: isGatePhaholyothin,
      file: files,
      user: {
        email: user.email,
        created: user.metadata.creationTime,
        // 'name': user.displayName,
      },
    };
    console.log(data);
    let response = await addDoc(roomCollection, data);
    let file = uploadFiles();
    console.log(response);
    console.log(file);

    if (!response) {
      handleClose();
    }
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
      <Button variant="outlined" onClick={handleClickOpen('paper')}>
        New Post
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Post Dorm</DialogTitle>
        <form>
          <DialogContent dividers={scroll === 'paper'}>
            <div className="px-5 pb-5">
              {/* room */}
              <label for="title" className="text-lx font-serif">
                Room :
              </label>
              <input
                required
                id="room"
                type="room"
                onChange={function (event) {
                  setRoom(event.target.value);
                }}
                value={room}
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />

              {/* price */}
              <div className="pt-3">
                <label for="title" className="text-lx font-serif ">
                  Price :
                </label>

                <div className="flex">
                  <div className="flex-grow w-1/4 pr-2">
                    <input
                      id="price"
                      type="number"
                      required
                      min={0}
                      onChange={function (event) {
                        setPrice(event.target.value);
                      }}
                      value={price}
                      placeholder="Amount"
                      className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                  </div>
                  <div className="flex-grow w-1/4 ">
                    <input
                      placeholder="BHT"
                      className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current "
                      disabled
                    />
                  </div>
                </div>
              </div>

              {/* address */}
              <div className="items-center pt-3">
                <label for="address" className="text-lx  font-serif">
                  Address :
                </label>
                <textarea
                  id="address"
                  type="address"
                  required
                  onChange={function (event) {
                    setAddress(event.target.value);
                  }}
                  value={address}
                  rows="3"
                  placeholder="Street, house number, area, sub-area and postcode"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />

                {/* <div className="flex">
                      <div className="flex-grow w-1/4 pr-2">
                        <input placeholder="Sub-area" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                        </div>
                        <div className="flex-grow w-1/4 ">
                        <input placeholder="Area" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                        </div>
                    </div> */}
              </div>

              {/* Specific address */}
              <div className="items-center pt-3">
                <label for="address" className="text-lx  font-serif">
                  Specific address :{' '}
                </label>
                <div>
                  <label for="title" className="text-lx font-quicksand">
                    Gate 1
                  </label>
                  <Checkbox
                    {...label}
                    checked={isGate1}
                    value={isGate1}
                    onChange={(event) => setIsGate1(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label for="title" className="text-lx font-quicksand">
                    Gate 2
                  </label>
                  <Checkbox
                    {...label}
                    checked={isGate2}
                    value={isGate2}
                    onChange={(event) => setIsGate2(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label for="title" className="text-lx font-quicksand">
                    Gate 3
                  </label>
                  <Checkbox
                    {...label}
                    checked={isGate3}
                    value={isGate3}
                    onChange={(event) => setIsGate3(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                </div>
                <div>
                  <label for="title" className="text-lx font-quicksand">
                    Viphavadi Gate
                  </label>
                  <Checkbox
                    {...label}
                    checked={isGateViphavadi}
                    value={isGateViphavadi}
                    onChange={(event) => setIsViphavadi(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label for="title" className="text-lx font-quicksand">
                    Phaholyothin Gate
                  </label>
                  <Checkbox
                    {...label}
                    checked={isGatePhaholyothin}
                    value={isGatePhaholyothin}
                    onChange={(event) =>
                      setIsPhaholyothin(event.target.checked)
                    }
                    type="checkbox"
                    color="success"
                  />
                </div>
              </div>

              {/* upload image */}

              <Stack className="pt-2 pb-2 mt-6 " spacing={2}>
                <form onSubmit={formHandler}>
                  <input type="file" className="input" />

                  <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow"
                    type="submit"
                  >
                    Upload
                  </button>
                  <p className="py-1 px-3 mb-0 ">Upload {progress} %</p>
                </form>
                {files.map((file) => (
                  <img
                    key={file}
                    src={file}
                    onClick={() => {
                      const newFile = files.filter((e) => e !== file);
                      setFiles(newFile);
                    }}
                  />
                ))}
                <div className="inline-flex"></div>
              </Stack>

              {/* description */}
              <div className="items-center pt-4">
                <label for="Description" className="text-lx font-serif">
                  Description:
                </label>
                <textarea
                  id="description"
                  type="description"
                  required
                  onChange={function (event) {
                    setDescription(event.target.value);
                  }}
                  value={description}
                  rows="5"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleSubmit}>
              Post
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
