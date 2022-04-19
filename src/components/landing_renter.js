import './landing.css';
import Card from './card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Carousel_Renter from './slider_renter';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Carousel } from 'react-bootstrap';
import Draggable from 'react-draggable';

import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Landing_Renter = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen1 = () => () => {
    setOpen1(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open1) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open1]);

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  return (
    <div>
      <Navbar />

      <div className=" 2xl:mx-auto 2xl:container mx-4  ">
        <div
          role="main"
          className="flex flex-col items-center justify-center mb-6 "
        >
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block laptop:hidden h-11 w-auto"
              src={require('./photo/logo1.png')}
              // src="./assets/logo.jpg'"
              alt="Workflow"
            />
          </div>
        </div>
        <div className="laptop:pl-14 laptop:pt-0 laptop:pr-14 laptop:pb-8 relative bg-blueGray-50">
          {/* Information */}

          <Carousel_Renter />

          <div className="py-16 bg-gray-50 overflow-hidden">
            <div className="container m-auto px-6 space-y-8 text-gray-500 tablet:px-12">
              {/* <div>
                <span className="text-gray-600 text-lg font-semibold">
                 
                </span>
                {/* <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">A technology-first approach to payments<br className="laptop:block" /> hidden and finance</h2> */}
              {/* </div> */}

              <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden tablet:grid-cols-2 laptop:divide-y-0 laptop:grid-cols-3 grid-cols-3">
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div
                    onClick={handleClickOpen1('paper')}
                    className="relative p-8 space-y-8"
                  >
                    <img
                      src={require('./photo/map.png')}
                      className="w-10"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />

                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                        Kasetsart University Map
                      </h5>
                      <p className="text-sm text-gray-600">
                        Places, Fastest Walking Route, Bike Route, Bus Route,
                        Bus Stop.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="no-underline flex justify-between items-center group-hover:text-yellow-600"
                    >
                      <span className="text-sm">Read more</span>
                      <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        &RightArrow;
                      </span>
                    </a>
                  </div>
                </div>
                <Dialog
                  fullScreen
                  open={open1}
                  onClose={handleClose}
                  TransitionComponent={Transition}
                >
                  <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                      <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                      {/* <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                      >
                        KU CAMPUS MAP
                      </Typography> */}
                    </Toolbar>
                  </AppBar>
                  <List>
                    <ListItem>
                      <img
                        className="d-block w-100"
                        src={require('./photo/kumap.jpg')}
                        alt="Third slide"
                      />
                    </ListItem>
                  </List>
                </Dialog>

                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div
                    variant="outlined"
                    onClick={handleClickOpen}
                    className="relative p-8 space-y-8"
                  >
                    <img
                      src={require('./photo/bus.png')}
                      className="w-10"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />
                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                        Kasetsart Bus Route
                      </h5>
                      <p className="text-sm text-gray-600">
                        More details about Bus Route.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="no-underline flex justify-between items-center group-hover:text-yellow-600"
                    >
                      <span className="mt-6 text-sm">Read more</span>
                      <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        &RightArrow;
                      </span>
                    </a>
                  </div>

                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <DialogContent dividers>
                      <DialogContentText>
                        <div className="laptop:pl-20 laptop:pr-20 laptop:pt-0 bg-gray-100">
                          <Carousel>
                            <Carousel.Item interval={500}>
                              <img
                                className="d-block w-100"
                                src={require('./photo/talai1.png')}
                                alt="Second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={require('./photo/talai2.png')}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={require('./photo/talai3.png')}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                        Cancel
                      </Button>
                    </DialogActions>
                  </BootstrapDialog>
                </div>

                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                  <div
                    variant="outlined"
                    onClick={handleClickOpen2}
                    className="relative p-8 space-y-8"
                  >
                    <img
                      src={require('./photo/bike.png')}
                      className="w-10"
                      width="512"
                      height="512"
                      alt="burger illustration"
                    />

                    <div className="space-y-2">
                      <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                        Motorcycle Taxi Rate
                      </h5>
                      <p className="text-sm text-gray-600">
                        From Univerity Gate/student's dormitories building to
                        the destination with Price
                      </p>
                    </div>
                    <a
                      href="#"
                      className="flex no-underline justify-between items-center group-hover:text-yellow-600"
                    >
                      <span className="text-sm">Read more</span>
                      <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        &RightArrow;
                      </span>
                    </a>
                  </div>
                  <Dialog
                    open={open2}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                  >
                    <DialogContent>
                      <DialogContentText>
                        <div className="laptop:pl-20 laptop:pr-20 laptop:pt-0 bg-gray-100">
                          <Carousel>
                            <Carousel.Item interval={500}>
                              <img
                                className="d-block w-100"
                                src={require('./photo/biketaxi1.png')}
                                alt="Second slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={require('./photo/biketaxi2.png')}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={require('./photo/biketaxi3.png')}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={require('./photo/biketaxi4.png')}
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Landing_Renter;
