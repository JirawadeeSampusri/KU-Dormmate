import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Post
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          New Post
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <div>
          <label for="title" class="text-lx font-serif">Title:</label>
          <input type="text" placeholder="title" id="title" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
          </Typography>
          <Typography gutterBottom>
          <div>
          <label for="description" class="block mb-2 text-lg font-serif">Description:</label>
          <textarea id="description" cols="30" rows="10" placeholder="whrite here.." class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
        </div>
          </Typography>
          <Typography gutterBottom>
          <div>
          <label for="title" class="text-lx font-serif">Title:</label>
          <input type="text" placeholder="title" id="title" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
          </Typography>
          <Typography gutterBottom>
          <div>
          <label for="title" class="text-lx font-serif">Title:</label>
          <input type="text" placeholder="title" id="title" class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        </div>
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Post
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}



