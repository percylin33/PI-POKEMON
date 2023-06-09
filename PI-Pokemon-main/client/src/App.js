import './App.css';
import {LandingPage, HomePage, DetailPage, FormPage, About }   from "./views";
import NavBar from "./Components/Nav/NavBar";
import {Route, useLocation} from "react-router-dom";
import axios from 'axios';
axios.defaults.baseURL = "https://pi-pokemon-production-c990.up.railway.app/";


function App() {

  const location = useLocation();
  return (
    <div className="App">

        {location.pathname !== "/"  &&  <NavBar />}

        <Route exact path='/' component = {LandingPage} />
        <Route exact path='/detail/:id' component = {DetailPage} />
        <Route exact path='/form' component = {FormPage} />
        <Route exact path='/about' component = {About} />
        <Route path='/home' render = {()=> <HomePage/>} />
      

    </div>
  );
}
 
export default App;
