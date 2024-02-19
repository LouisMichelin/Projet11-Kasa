import "./Header.scss";
import { Link } from "react-router-dom";
import LogoBig from "../../assets/logoBig.png";

function Header() {
   return (
      <div className="HeaderWrapper">
         <img className="HeaderLogo" src={LogoBig} alt="Logo Kasa" />
         <nav className="NavContainer">
            <Link
               className="NavLink"
               to="/"
               // style={{ textDecoration: "solid" }}
            >
               Accueil
            </Link>

            <Link
               className="NavLink"
               to="/1337"
               // style={{ textDecoration: "solid" }}
            >
               A Propos
            </Link>
         </nav>
      </div>
   );
}

export default Header;
