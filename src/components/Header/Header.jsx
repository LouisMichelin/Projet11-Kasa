import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import LogoBig from "../../assets/logoBig.png";

function Header() {
   const location = useLocation();
   return (
      <div className="HeaderWrapper">
         <img className="HeaderLogo" src={LogoBig} alt="Logo Kasa" />
         <nav className="NavContainer">
            <Link
               className="NavLink"
               style={
                  location.pathname === "/"
                     ? { textDecoration: "underline" }
                     : { textDecoration: "none" }
               }
               to="/"
            >
               Accueil
            </Link>
            <Link
               className="NavLink"
               style={
                  location.pathname === "/a-propos"
                     ? { textDecoration: "underline" }
                     : { textDecoration: "none" }
               }
               to="/a-propos"
            >
               A Propos
            </Link>
         </nav>
      </div>
   );
}

export default Header;
