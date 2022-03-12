import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';




export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
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

    const names = [
      'Gate 1',
      'Gate 2',
      'Gate 3',
      'Vibhavadi Gate',
      'Phaholyothin Gate',
    ];

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
                  <input  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                 
                   {/* price */}
                  <label for="title" class="text-lx font-serif">Price :</label>
                  <input  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                  
                   {/* address */}
                  <div class="items-center pt-3">
                    <label for="address" class="text-lx  font-serif">Address :</label>
                    <input  placeholder="Street and house number"  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /> 
                    <div class="flex">
                      <div class="flex-grow w-1/4 pr-2">
                        <input placeholder="Sub-area" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                        </div>
                        <div class="flex-grow w-1/4 ">
                        <input placeholder="Area" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                        </div>
                    </div>
                  </div>

                   {/* default address */}
                  <div class="flex">
                    <div class="flex-grow w-1/4 pr-2">
                      <input placeholder="Bangkok, Thailand" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   rounded-lg border-blueGray-500    " disabled/>
                      </div>
                      <div class="flex-grow w-1/4 ">
                      <input placeholder="Postcode" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                      </div>
                  </div>

                    {/* save default address */}
                  <div class="flex items-center pt-3">
                      <input type="checkbox" class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"/><label for="safeAdress" class="block ml-2 text-sm text-gray-900">
                    Save as default address</label>
                  </div>

                   {/* Specific address */}
                  <div class="items-center pt-3">
                  <label for="address" class="text-lx  font-serif">Specific Address :</label>
                  <FormControl sx={{ m: 1, width: 200 }} >
                    <InputLabel id="demo-multiple-chip-label">Gate</InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>    
                  </div>
                 
                   {/* room amentities */}
                  <div class="items-center pt-3">
                    <label for="address" class="text-lx  font-serif">Room Amenities : </label>
                       <div>
                          <label for="title" class="text-lx font-quicksand">Air Condition:</label>
                          <Checkbox {...label}  color="success" />
                          <label for="title" class="text-lx font-quicksand">Fan:</label>
                          <Checkbox {...label}  color="success" />
                      </div>
                      <div>
                         
                          <label for="title" class="text-lx font-quicksand">TV:</label>
                          <Checkbox  {...label}  color="success" />
                          <label for="title" class="text-lx font-quicksand">Water Heater:</label>
                          <Checkbox {...label}  color="success" />
                      </div>
                      <div>
                        
                              <label for="title" class="text-lx font-quicksand">Washing Machine:</label>
                              <Checkbox {...label}  color="success" />  
                      </div>
                      <div>
                          <label for="title" class="text-lx font-quicksand">Smoking:</label>
                          <Checkbox  {...label}  color="success" />
                          <label for="title" class="text-lx font-quicksand">Pet:</label>
                          <Checkbox {...label}  color="success" />  
                      </div>
                    
                  </div>

                  {/* building amentities */}
                  <div class="items-center pt-3">
                    <label for="address" class="text-lx  font-serif">Building Amenities : </label>
                       <div>
                          <label for="title" class="text-lx font-quicksand">Parking:</label>
                          <Checkbox {...label}  color="success" />
                          <label for="title" class="text-lx font-quicksand">Elevator:</label>
                          <Checkbox {...label}  color="success" />
                      </div>
                      <div>
                         
                          <label for="title" class="text-lx font-quicksand">Pool:</label>
                          <Checkbox  {...label}  color="success" />
                          <label for="title" class="text-lx font-quicksand">Fitness:</label>
                          <Checkbox {...label}  color="success" />
                      </div>
                      <div>
                        
                              <label for="title" class="text-lx font-quicksand">Security keycard:</label>
                              <Checkbox {...label}  color="success" />  
                      </div>
                      <div>
                          <label for="title" class="text-lx font-quicksand">CCTV:</label>
                          <Checkbox  {...label}  color="success" />
                          <label for="title" class="text-lx font-quicksand">Laundry:</label>
                          <Checkbox {...label}  color="success" />  
                      </div>
                    
                  </div>
          
                  {/* upload image */}
                  <Stack  class="pt-2 pb-2 mt-6"direction="row" alignItems="center" spacing={2}>
                      <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                        <Button variant="contained" component="span">
                          Upload Images
                        </Button>
                      </label>
                      {/* <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                          <PhotoCamera />
                        </IconButton>
                      </label> */}
                  </Stack>

                  {/* description */}
                  <div class="items-center pt-4">
                      <label for="Description" class="text-lx font-serif">Description:</label>
                      <textarea rows="5"   class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>

                    </div>
                   
                     
                  </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}






