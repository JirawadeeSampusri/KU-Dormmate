import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';
import { collection,addDoc } from "firebase/firestore";
import {db, auth,storage} from '../firebase';
import { ref } from "@firebase/storage";
import { ref as getDownloadURL,storageRef, uploadBytesResumable } from "firebase/storage";



export default function ScrollDialog() {
  const roomCollection = collection(db, 'room')
  const user = auth.currentUser
  console.log(user);
  
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  // const [articles,setArticles] = useState([])

  const [room, setRoom] =  React.useState('');
  const [price, setPrice] =  React.useState('');
  const [address, setAddress] =  React.useState('');
  const [description, setDescription] =  React.useState('');
  const [isGate1, setIsGate1] =  React.useState(false);
  const [isGate2, setIsGate2] =  React.useState(false);
  const [isGate3, setIsGate3] =  React.useState(false);
  const [isGateViphavadi, setIsViphavadi] =  React.useState(false);
  const [isGatePhaholyothin, setIsPhaholyothin] =  React.useState(false);
  
  const [progress,setProgress] = React.useState(0);

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

  

  const uploadFiles = (file) =>{
    if(!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
   
    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100 

    );setProgress(prog);

  },
  (err) => console.log(err),
  () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
    }

  );
  };


  
  const handleSubmit = async () => {
  
    let data = {
      'room': room,
      'price': price,
      'address': address,
      'description': description,
      'gate1':isGate1,
      'gate2':isGate2,
      'gate3':isGate3,
      'gateViphavadi':isGateViphavadi,
      'gatePhaholyothin':isGatePhaholyothin,
      'file':{
        'file':progress,
      },
      'user': {
        'email': user.email,
        // 'name': user.displayName,
      }, 

    }
    console.log(data);
    let response = await addDoc(roomCollection, data)  
    let file = await uploadFiles();
    console.log(response);
    console.log(file);


  };

  const Input = styled('input')({
    display: 'none',
  });

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

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

   
    function getStyles(name, personName, theme) {
      return {
        fontWeight:
          personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
      };
    }

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };


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
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
        <div class="px-5 pb-5">
                   {/* room */}
                  <label for="title" class="text-lx font-serif">Room :</label>
                  <input  
                  id="room" type="room" 
                  onChange={function(event){
                    setRoom(event.target.value)
                  }} value={room}
                    class="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  />
                  
                 
                   {/* price */}
                   <div class="pt-3">
                   <label for="title" class="text-lx font-serif ">Price :</label>
                   
                  <div class="flex">
                      <div class="flex-grow w-1/4 pr-2">
                        <input 
                        id="price" type="price"
                        onChange={function(event){
                          setPrice(event.target.value)
                        }} value={price}

                        placeholder="Amount" 
                        class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                        </div>
                        <div class="flex-grow w-1/4 ">
                        <input placeholder="BHT" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current " disabled/>
                        </div>
                    </div>
                  
                   </div>
                 
                   {/* address */}
                  <div class="items-center pt-3">
                    <label for="address" class="text-lx  font-serif">Address :</label>
                    <textarea
                     id="address" type="address"
                     onChange={function(event){
                       setAddress(event.target.value)
                     }} value={address}

                    rows="3" placeholder="Street, house number, area, sub-area and postcode"  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                   
                    {/* <div class="flex">
                      <div class="flex-grow w-1/4 pr-2">
                        <input placeholder="Sub-area" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                        </div>
                        <div class="flex-grow w-1/4 ">
                        <input placeholder="Area" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                        </div>
                    </div> */}
                  </div>

                   {/* default address
                  <div class="flex">
                    <div class="flex-grow w-1/4 pr-2">
                      <input placeholder="Bangkok, Thailand" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   rounded-lg border-blueGray-500    " disabled/>
                      </div>
                      <div class="flex-grow w-1/4 ">
                      <input placeholder="Postcode" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                      </div>
                  </div> */}

                
                
                   {/* Specific address */}
                  <div class="items-center pt-3">
                    <label for="address" class="text-lx  font-serif">Specific address : </label>
                       <div>
                          <label for="title" class="text-lx font-quicksand">Gate 1</label>
                          <Checkbox {...label} 
                             checked={isGate1}
                             value={isGate1}
                             onChange={(event) => setIsGate1(event.target.checked)}
                            type="checkbox" color="success" 
                            />
                          <label for="title" class="text-lx font-quicksand">Gate 2</label>
                          <Checkbox {...label} 
                             checked={isGate2}
                             value={isGate2}
                             onChange={(event) => setIsGate2(event.target.checked)}
                            type="checkbox" color="success" 
                            />
                          <label for="title" class="text-lx font-quicksand">Gate 3</label>
                          <Checkbox {...label} 
                           checked={isGate3}
                           value={isGate3}
                           onChange={(event) => setIsGate3(event.target.checked)} 
                            type="checkbox"color="success" 
                          />
                        
                      </div>
                      <div>
                         
                          <label for="title" class="text-lx font-quicksand">Viphavadi Gate</label>
                          <Checkbox  {...label} 
                           checked={isGateViphavadi}
                           value={isGateViphavadi}
                           onChange={(event) => setIsViphavadi(event.target.checked)}
                            type="checkbox" color="success" 
                            />
                          <label for="title" class="text-lx font-quicksand">Phaholyothin Gate</label>
                          <Checkbox {...label}  
                           checked={isGatePhaholyothin}
                           value={isGatePhaholyothin}
                           onChange={(event) => setIsPhaholyothin(event.target.checked)}
                            type="checkbox" color="success" 
                          />
                          
                      </div>
                    
                     
                    
                  </div>

              
                  {/* upload image */}
                  <Stack  class="pt-2 pb-2 mt-6"  spacing={2}>

                    <form onSubmit={formHandler} >
                        <input type="file" className ="input"/>
                        <button type='submit'>Upload</button>
                    </form>
         
                      {/* <label class="pt-4" htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                          Upload Image1
                        </Button>
                      </label> */}
                      {/* <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                          Upload Image2
                        </Button>
                      </label>
                      <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                          Upload Image3
                        </Button>
                      </label>
                      <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                          Upload Image4
                        </Button>
                      </label> */}
                      
                     
                  </Stack>

                 

                  {/* description */}
                  <div class="items-center pt-4">
                      <label for="Description" class="text-lx font-serif">Description:</label>
                      <textarea 
                       id="description" type="description"
                       onChange={function(event){
                         setDescription(event.target.value)
                       }} value={description}
                      rows="5"   class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>

                    </div>
                    <h3>Upload {progress} %</h3>
                     
                  </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}






