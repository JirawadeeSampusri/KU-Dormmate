import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
        <div class="px-5 pb-5">
                  <label for="title" class="text-lx font-serif">Title:</label>
                  <input  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>

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
                  

                  <div class="flex">
                    <div class="flex-grow w-1/4 pr-2">
                      <input placeholder="Bangkok, Thailand" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   rounded-lg border-blueGray-500    " disabled/>
                      </div>
                      <div class="flex-grow w-1/4 ">
                      <input placeholder="Postcode" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                      </div>
                  </div>
                  <div class="flex items-center pt-3">
                      <input type="checkbox" class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"/><label for="safeAdress" class="block ml-2 text-sm text-gray-900">
                    Save as default address</label>
                    </div>
                  <div class="items-center pt-6">
                      <label for="Description" class="text-lx font-serif">Description:</label>
                      <input  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>

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
