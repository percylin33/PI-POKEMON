import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "./SearchBar/SearchBar";

const NavBar = () => {
    return(
        <div className= {style.mainComtainer}>
            <Link to = "/home">HOME</Link>
            <Link to = "/form">FORM</Link>
            <SearchBar />

        

        </div>
    )
}

export default NavBar;