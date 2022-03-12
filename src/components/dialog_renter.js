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

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function ScrollDialog_renter() {
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


    // Roommate
    const [level, setLevel] = React.useState('1');

        const handleChange1 = (event) => {
            setLevel(event.target.value);
        };


    const [gender, setGender] = React.useState('Male');

        const handleChange2 = (event) => {
            setGender(event.target.value);
        };

    const [age, setAge] = React.useState('17 - 19 years old');

        const handleChange3 = (event) => {
            setAge(event.target.value);
        };


    const Genders = [
            {
              value: 'male',
              label: 'male',
            },
            {
              value: 'female',
              label: 'female',
            },
            {
              value: 'others',
              label: 'Others',
            },
       
          ];

    const levels = [
        {
          value: '1',
          label: '1',
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
        {
          value: '4',
          label: '4',
        },
        {
            value: '>4',
            label: '> 4',
          },
      ];

      const Ages = [
        {
          value: '17 - 19 years old',
          label: '17 - 19 years old',
        },
        {
          value: '20 - 22 years old',
          label: '20 - 22 years old',
        },
        {
          value: '23 - 25 years old',
          label: '23 - 25 years old',
        },
        {
            value: '> 25 years old',
            label: '> 25 years old',
        },
   
      ];


    
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
        <DialogContent dividers={scroll === 'paper'}>
        <div class="px-5 pb-5">

                   {/* Place */}
                  <label for="title" class="text-lx font-serif">Place :</label>
                  <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                    
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Your Place"
                            inputProps={{ 'aria-label': 'search ' }}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                  
                        </Paper>

                  {/* room */}
                  <div class="pt-3">
                    <label for="title" class="text-lx font-serif">Room :</label>
                    <input  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                  </div>
                 
                   {/* price */}
                   <div class="pt-3">
                   <label for="title" class="text-lx font-serif ">Price :</label>
                   
                    <div class="flex">
                        <div class="flex-grow w-1/4 pr-2">
                            <input placeholder="Amount" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                            </div>
                            <div class="flex-grow w-1/4 ">
                            <input placeholder="BHT" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current " disabled/>
                            </div>
                        </div>
                  
                   </div>
                 
                   {/* address */}
                  <div class="items-center pt-3">
                    <label for="address" class="text-lx  font-serif">Roommate :</label>
                    <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '20ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div>
                        <TextField
                        id="level"
                        select
                        label="Level"
                        value={level}
                        onChange={handleChange1}
                      
                        >
                        {levels.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>

                        <TextField
                        id="gender"
                        select
                        label="Gender"
                        value={gender}
                        onChange={handleChange2}
                        SelectProps={{
                            native: true,
                        }}
                        
                        >
                        {Genders.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>

                        <TextField
                        id="age"
                        select
                        label="Age"
                        value={age}
                        onChange={handleChange3}
                        SelectProps={{
                            native: true,
                        }}
                        
                        >
                        {Ages.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField>
                    </div>
                  
                    </Box>


                   
                  </div>
                  {/* description */}
                  <div class="items-center pt-4">
                      <label for="Description" class="text-lx font-serif">Description:</label>
                      <textarea rows="3"   class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>

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






