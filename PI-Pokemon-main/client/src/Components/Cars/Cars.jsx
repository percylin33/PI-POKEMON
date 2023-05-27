import style from "./Cars.module.css";
import { Link } from "react-router-dom";
const Cars = (props) => {
  
    return (
        <div className={ style.card} >

          <Link to={`/detail/${props.id}`}>

           <p>Name: {props.name}</p>
           <img src={props.image} alt= {`imagen de ${props.name} `}/>
          </Link>
        </div>
    )
}

export default Cars;