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

//sfc

function App() {
  // const title = 'KU Dorm-Mate'
  
  return (
    <Router>
      <div  className="  w-full h-screen bg-[url('./assets/bg-presentation.jpg')]">
      <div className="App">
          <Router>

            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <div>
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