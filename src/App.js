import logo from './logo.svg';
import './App.css';
import  LandingPage from './MyComponents/LandingPage';
import Manager from './MyComponents/Manager';
import Header from './MyComponents/Header';
import Signup from './MyComponents/Signup';
import UserDash from './MyComponents/UserDash';
import Map from './MyComponents/Map';
import Reward from './MyComponents/Reward';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={ <LandingPage/>}/>
         
      
        <Route exact path="/managerSignin" element={<Manager/>}/>
          
        <Route exact path="/reward" element={<Reward/>}/>
        <Route excat path="/signup" element={<Signup/>}/>
        <Route exact path="/UserDash"element={<UserDash/>}/>
        <Route exact path="/Map" element={<Map/>}/>        
      </Routes>
      
        
      
    </Router>
  );
}

export default App;
