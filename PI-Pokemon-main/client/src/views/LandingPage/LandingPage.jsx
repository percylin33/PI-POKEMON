import imapica from "../../access/picachu.jpg";
import style from "./LandingPage.module.css"
import { useHistory } from 'react-router-dom';

function LandingPage() {
    const history = useHistory();
    return(
        <div className={style.container}>
         <img src={imapica} alt="" />
         <button className={style.button} onClick={() => history.push('/home')}>INGRESA</button>
        </div>
    )
}
export default LandingPage;