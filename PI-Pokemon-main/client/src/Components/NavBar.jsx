import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
    return(
        <div className= {style.mainComtainer}>
            <Link to = "/home">HOME</Link>
            <Link to = "/form">FORM</Link>
        

        </div>
    )
}

export default NavBar;