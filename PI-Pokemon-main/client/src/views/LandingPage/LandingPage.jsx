import video from "../../access/pokemon-in-the-wild.mp4";
import style from "./LandingPage.module.css"
import { useHistory } from 'react-router-dom';

function LandingPage() {
    const history = useHistory();
    return(
        <div className={style.container}>
            <video className="video-background" autoPlay muted loop>
    <source src={video} type="video/mp4" />
    Tu navegador no admite la reproducción de videos.
  </video>
            <div className={style.bienvenida}>
                <h1>Bienvenidos al PI POKEMON</h1>
            </div>
        
         <button className={style.button} onClick={() => history.push('/home')}>INGRESA</button>
        </div>
    )
}
export default LandingPage;