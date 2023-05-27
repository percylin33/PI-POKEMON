import './App.css';
import {LandingPage, HomePage, DetailPage, FormPage }   from "./views";
import NavBar from "./Components/NavBar";
import {Route, useLocation} from "react-router-dom";


function App() {

  const location = useLocation();
  return (
    <div className="App">

        {location.pathname !== "/" &&  <NavBar />}

        <Route exact path='/' component = {LandingPage} />
        <Route exact path='/detail/:id' component = {DetailPage} />
        <Route exact path='/form' component = {FormPage} />
        <Route path='/home' render = {()=> <HomePage/>} />
      

    </div>
  );
}
 
export default App;
