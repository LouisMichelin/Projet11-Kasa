import "./Header.scss";
import { Link } from "react-router-dom";
import LogoBig from "../../assets/logoBig.png";

function Header() {
   return (
      <div className="HeaderWrapper">
         <img className="HeaderLogo" src={LogoBig} alt="Logo Kasa" />
         <nav className="NavContainer">
            <Link className="NavLink" to="/">
               Accueil
            </Link>

            <Link className="NavLink" to="/a-propos">
               A Propos
            </Link>
            {/* <Link className="NavLink" to="/1337">
               404
            </Link> */}
         </nav>
      </div>
   );
}

export default Header;
