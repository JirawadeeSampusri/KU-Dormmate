import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Create from './create';
import BlogDetails from './components/blogdetails';
import NotFound from './notfound';
import Landing from './components/landing';
import Card from './components/card';
import Footer from './components/footer';
import Login from './login';
import Register from './register';
import Details from './components/details';
import Profile_Owner from './components/profile_owner';
import Profile_Renter from './components/profile_renter';


//sfc

function App() {
  // const title = 'KU Dorm-Mate'
   //bg-[url('./assets/bg-presentation.jpg')]
  return (
    <Router>
      <div  className="  w-full h-screen bg-gray-50 ">
        
        
      <div className="App bg-gray-50">
        
          <Router>

            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <div>
                <Navbar />
                <div className="content ">
                  
                  <Switch>
                    <Route exact path="/">
                      <Landing />
                      <Card />
                    </Route>
                    <Route path="/details" component={Details} >
                      <Details />
                    </Route>
                    <Route path="/profile_owner">
                      <Profile_Owner />
                    </Route>
                    <Route path="/profile_renter">
                      <Profile_Renter/>
                    </Route>
                    <Route path="/create">
                      <Create />
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
          < Footer />
        
      </div>
      <div >
      </div >
     
      </div>
      
    </Router>
    
    
  );
}

export default App;