import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import { useTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';

export default function ScrollDialog_renter() {
  const roomCollection = collection(db, 'roommate');
  const user = auth.currentUser;
  console.log(user);

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const [place, setPlace] = React.useState('');
  const [room, setRoom] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [islowestAge, setlowestAge] = React.useState(false);
  const [ismidAge, setmidAge] = React.useState(false);
  const [ishigherAge, sethigherAge] = React.useState(false);
  const [ishighestAge, sethighestAge] = React.useState(false);
  const [isMale, setMale] = React.useState(false);
  const [isFemale, setFemale] = React.useState(false);
  const [isOthers, setOthers] = React.useState(false);
  const [isfirstYear, setfirstYear] = React.useState(false);
  const [issecYear, setsecYear] = React.useState(false);
  const [isthirdYear, setthirdYear] = React.useState(false);
  const [isfourthYear, setfourthYear] = React.useState(false);
  const [ismorethanfourthYear, setmorethanfourthYear] = React.useState(false);

  const handleSubmit = async () => {
    let data = {
      place: place,
      room: room,
      price: price,
      lowestAge: islowestAge,
      midAge: ismidAge,
      higherAge: ishigherAge,
      highestAge: ishighestAge,
      male: isMale,
      female: isFemale,
      others: isOthers,
      firstYear: isfirstYear,
      secYear: issecYear,
      thirdYear: isthirdYear,
      fourthYear: isfourthYear,
      morethanfourthYear: ismorethanfourthYear,
      user: {
        email: user.email,
        created: user.metadata.creationTime,
      },
    };
    console.log(data);
    let response = await addDoc(roomCollection, data);

    console.log(response);

    if (!response) {
      handleClose();
    }
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
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

  // const ITEM_HEIGHT = 48;
  // const ITEM_PADDING_TOP = 8;
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250,
  //     },
  //   },
  // };

  // const names = [
  //   'Gate 1',
  //   'Gate 2',
  //   'Gate 3',
  //   'Vibhavadi Gate',
  //   'Phaholyothin Gate',
  // ];

  // const theme = useTheme();
  // const [personName, setPersonName] = React.useState([]);

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value,
  //   );
  // };

  // Roommate
  // const [level, setLevel] = React.useState('1');

  // const handleChange1 = (event) => {
  //   setLevel(event.target.value);
  // };

  // const [gender, setGender] = React.useState('Male');

  // const handleChange2 = (event) => {
  //   setGender(event.target.value);
  // };

  // const [age, setAge] = React.useState('17 - 19 years old');

  // const handleChange3 = (event) => {
  //   setAge(event.target.value);
  // };

  // const Genders = [
  //   {
  //     value: 'male',
  //     label: 'male',
  //   },
  //   {
  //     value: 'female',
  //     label: 'female',
  //   },
  //   {
  //     value: 'others',
  //     label: 'Others',
  //   },
  // ];

  // const levels = [
  //   {
  //     value: '1',
  //     label: '1',
  //   },
  //   {
  //     value: '2',
  //     label: '2',
  //   },
  //   {
  //     value: '3',
  //     label: '3',
  //   },
  //   {
  //     value: '4',
  //     label: '4',
  //   },
  //   {
  //     value: '>4',
  //     label: '> 4',
  //   },
  // ];

  // const Ages = [
  //   {
  //     value: '17 - 19 years old',
  //     label: '17 - 19 years old',
  //   },
  //   {
  //     value: '20 - 22 years old',
  //     label: '20 - 22 years old',
  //   },
  //   {
  //     value: '23 - 25 years old',
  //     label: '23 - 25 years old',
  //   },
  //   {
  //     value: '> 25 years old',
  //     label: '> 25 years old',
  //   },
  // ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen('paper')}>
        Post Match
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Post Match</DialogTitle>
        <form action="#href">
          <DialogContent dividers={scroll === 'paper'}>
            <div className="px-5 pb-5">
              {/* Place */}

              <div className="pt-3">
                <label for="title" className="text-lx font-serif">
                  Place :
                </label>
                <input
                  id="place"
                  required
                  type="place"
                  onChange={function (event) {
                    setPlace(event.target.value);
                  }}
                  value={place}
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>

              {/* room */}
              <div className="pt-3">
                <label for="title" className="text-lx font-serif">
                  Room :
                </label>
                <input
                  id="room"
                  required
                  type="room"
                  onChange={function (event) {
                    setRoom(event.target.value);
                  }}
                  value={room}
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>

              {/* price */}
              <div className="pt-3">
                <label for="title" className="text-lx font-serif ">
                  Price :
                </label>

                <div className="flex">
                  <div className="flex-grow w-1/4 pr-2">
                    <input
                      placeholder="Amount"
                      id="price"
                      required
                      type="price"
                      onChange={function (event) {
                        setPrice(event.target.value);
                      }}
                      value={price}
                      className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
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

              {/* roommate */}
              <div className="items-center pt-3">
                <label for="address" className="text-lx  font-serif">
                  Roommate :
                </label>
                <div>
                  <label for="address" className="text-lx  font-serif">
                    Age
                  </label>

                  <label
                    for="title"
                    className="text-lx laptop:ml-4 font-quicksand"
                  >
                    17 - 19
                  </label>
                  <Checkbox
                    {...label}
                    checked={islowestAge}
                    value={islowestAge}
                    onChange={(event) => setlowestAge(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label for="title" className="text-lx font-quicksand">
                    20 - 22
                  </label>
                  <Checkbox
                    {...label}
                    checked={ismidAge}
                    value={ismidAge}
                    onChange={(event) => setmidAge(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label for="title" className="text-lx font-quicksand">
                    23 - 25
                  </label>
                  <Checkbox
                    {...label}
                    checked={ishigherAge}
                    value={ishigherAge}
                    onChange={(event) => sethigherAge(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label for="title" className="text-lx font-quicksand">
                    more than 25
                  </label>
                  <Checkbox
                    {...label}
                    checked={ishighestAge}
                    value={ishighestAge}
                    onChange={(event) => sethighestAge(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                </div>
                <div>
                  <label for="address" className="text-lx  font-serif">
                    Gender{' '}
                  </label>

                  <label
                    for="title"
                    className="laptop:ml-4 text-lx font-quicksand"
                  >
                    Male
                  </label>
                  <Checkbox
                    {...label}
                    checked={isMale}
                    value={isMale}
                    onChange={(event) => setMale(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label for="title" className="text-lx font-quicksand">
                    Female
                  </label>
                  <Checkbox
                    {...label}
                    checked={isFemale}
                    value={isFemale}
                    onChange={(event) => setFemale(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label for="title" className="text-lx font-quicksand">
                    Others
                  </label>
                  <Checkbox
                    {...label}
                    checked={isOthers}
                    value={isOthers}
                    onChange={(event) => setOthers(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                </div>
                <div>
                  <label for="address" className="text-lx  font-serif">
                    Level{' '}
                  </label>

                  <label
                    for="title"
                    className="text-lx laptop:ml-4 font-quicksand"
                  >
                    Year 1
                  </label>
                  <Checkbox
                    {...label}
                    checked={isfirstYear}
                    value={isfirstYear}
                    onChange={(event) => setfirstYear(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label for="title" className="text-lx font-quicksand">
                    Year 2
                  </label>
                  <Checkbox
                    {...label}
                    checked={issecYear}
                    value={issecYear}
                    onChange={(event) => setsecYear(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label for="title" className="text-lx font-quicksand">
                    Year 3
                  </label>
                  <Checkbox
                    {...label}
                    checked={isthirdYear}
                    value={isthirdYear}
                    onChange={(event) => setthirdYear(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label for="title" className="text-lx font-quicksand">
                    Year 4
                  </label>
                  <Checkbox
                    {...label}
                    checked={isfourthYear}
                    value={isfourthYear}
                    onChange={(event) => setfourthYear(event.target.checked)}
                    type="checkbox"
                    color="success"
                  />
                  <label
                    for="title"
                    className="text-lx laptop:ml-14 font-quicksand"
                  >
                    more than Year 4
                  </label>
                  <Checkbox
                    {...label}
                    checked={ismorethanfourthYear}
                    value={ismorethanfourthYear}
                    onChange={(event) =>
                      setmorethanfourthYear(event.target.checked)
                    }
                    type="checkbox"
                    color="success"
                  />
                </div>
              </div>
              {/* description */}
              <div className="items-center pt-4">
                <label for="Description" className="text-lx font-serif">
                  Description:
                </label>
                <textarea
                  rows="3"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
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
