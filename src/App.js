import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Create from './create';
import BlogDetails from './components/blogdetails';
import NotFound from './notfound';
import Landing from './components/landing';
import Card from './components/card';
import Footer from './components/footer';


//sfc

function App() {
  // const title = 'KU Dorm-Mate'

  return (
    <Router>
      <div  className="  w-full h-screen bg-[url('./assets/bg-presentation.jpg')]">
        <div className='App'>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Landing />
                <Card />
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
        < Footer />
        
      </div>
      {/* <div >
        <Switch>
                <Route exact path="/">
                  <Home />
                  <Home />
                  <Home />
                </Route>
              
        </Switch>
      </div> */}
      
    </Router>
    
    
  );
}

export default App;