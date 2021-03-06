import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './components/blogdetails';
import NotFound from './notfound';
import Landing from './components/landing';
// import Footer from './components/footer';
import DetailsRoom from './components/details_room';
import Register_Renter from './register_renter';
import Register_Owner from './register_owner';
import Details from './components/details';
import Profile_Owner from './components/profile_owner';
import Profile_Renter from './components/profile_renter';
import Landing_Owner from './components/landing_owner';
import Landing_Renter from './components/landing_renter';
import Login_Owner from './login_owner';
import Login_Renter from './login_renter';
import FindMatch from './components/findmatch';
import OwnerPosted from './components/ownerposted';
import SavedDorm from './components/saved_dorm';

//sfc

function App() {
  // const title = 'KU Dorm-Mate'
  //bg-[url('./assets/bg-presentation.jpg')]
  return (
    <Router>
      <div className="  w-full h-screen bg-gray-50 ">
        <div className="App bg-gray-50">
          <Router>
            <Switch>
              <Route exact path="/login_owner" component={Login_Owner} />
              <Route exact path="/login_renter" component={Login_Renter} />
              <Route
                exact
                path="/register_renter"
                component={Register_Renter}
              />
              <Route exact path="/register_owner" component={Register_Owner} />
              <div>
                <div className="content ">
                  <Switch>
                    <Route exact path="/">
                      <Landing />
                    </Route>
                    <Route path="/details" component={Details}>
                      <Details />
                    </Route>
                    <Route path="/landing_owner">
                      <Landing_Owner />
                    </Route>
                    <Route path="/landing_renter">
                      <Landing_Renter />
                    </Route>
                    <Route path="/details_room/:id">
                      <DetailsRoom />
                    </Route>

                    <Route path="/profile_owner">
                      {/* <CustomizedDialogs /> */}
                      <Profile_Owner />
                    </Route>
                    <Route path="/profile_renter">
                      <Profile_Renter />
                    </Route>
                    <Route path="/findMatch">
                      <FindMatch />
                    </Route>
                    <Route path="/ownerposted">
                      <OwnerPosted />
                    </Route>
                    <Route path="/saved_dorm">
                      <SavedDorm />
                    </Route>
                    <Route path="/blogs/:id">
                      <BlogDetails />
                    </Route>
                    <Route path="*">
                      <NotFound />
                    </Route>
                  </Switch>
                </div>
              </div>
            </Switch>
          </Router>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
