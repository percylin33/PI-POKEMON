import imapica from "../../access/picachu.jpg";
import style from "./LandingPage.module.css"
import { useHistory } from 'react-router-dom';

function LandingPage() {
    const history = useHistory();
    return(
        <div className={style.container}>
            <div className={style.bienvenida}>
                <h1>Bienvenidos al PI POKEMON</h1>
            </div>
         <img src={imapica} alt="" />
         <button className={style.button} onClick={() => history.push('/home')}>INGRESA</button>
        </div>
    )
}
export default LandingPage;