import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component= { Home } ></Route>
        <Route  path='/resume' component = { Resume } ></Route>
        <Route  path='/projects' component = { Projects } ></Route>
        <Route  path='/contact' component = { Contact } ></Route>
        <Route component = { Home } ></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;