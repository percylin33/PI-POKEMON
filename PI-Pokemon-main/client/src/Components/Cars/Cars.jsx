import style from "./Cars.module.css";
import { Link } from "react-router-dom";
const Cars = (props) => {
  
    return (
        <div className={ style.container} >


           <p className={style.carTitle}>{props.name}</p>
            <Link to={`/detail/${props.id}`}>
              <img className={style.ima} src={props.image} alt= {`imagen de ${props.name} `}/>
            </Link> 
           <p className={style.carDescription} >
               Types: {props.types}
           </p>
        </div>
    )
}

export default Cars;