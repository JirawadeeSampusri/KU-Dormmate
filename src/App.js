import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Create from './create';
import BlogDetails from './blogdetails';
import NotFound from './notfound';


//sfc

function App() {
  // const title = 'KU Dorm-Mate'

  return (
    <Router>
      <div className="App bg-[url('./assets/bg-presentation.jpg')] ">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
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
    </Router>
    
  );
}

export default App;