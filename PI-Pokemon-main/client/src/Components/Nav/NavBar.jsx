import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return(
        <div>
        <nav className={style.navContainer}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <Link to="/home" className={style.navLink}>HOME</Link>
          </li>
          <li className={style.navItem}>
            <Link to="/form" className={style.navLink}>FORM</Link>
          </li>
        </ul>
        <SearchBar />
      </nav>
      </div>

    )
}

export default NavBar;