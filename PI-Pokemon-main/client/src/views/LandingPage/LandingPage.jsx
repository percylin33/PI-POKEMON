import video from "../../access/pokemon-in-the-wild.mp4";
import style from "./LandingPage.module.css"
import { useHistory } from 'react-router-dom';


function LandingPage() {
  

    const history = useHistory();
    return(
        <div className={style.container}>
            <video className={style.videoBackground} autoPlay muted loop>
          <source src={video} type="video/mp4" />
   
  </video>
            <div className={style.bienvenida}>
                <h1 className={style.h1}>Welcome to the POKEMON PI</h1>
            </div>
        
         <button className={style.button} onClick={() => history.push('/home')}>GET INTO</button>
        </div>
    )
}
export default LandingPage;