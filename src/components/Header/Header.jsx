import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import LogoBig from "../../assets/logoBig.png";

function Header() {
   const location = useLocation();

   return (
      <div className="HeaderWrapper">
         <img className="HeaderLogo" src={LogoBig} alt="Logo Kasa" />
         <nav className="NavContainer">
            {location.pathname === "/" ? (
               <Link
                  className="NavLink"
                  style={{ textDecoration: "underline" }}
                  to="/"
               >
                  Accueil
               </Link>
            ) : (
               <Link
                  className="NavLink"
                  style={{ textDecoration: "none" }}
                  to="/"
               >
                  Accueil
               </Link>
            )}
            {location.pathname === "/a-propos" ? (
               <Link
                  className="NavLink"
                  style={{ textDecoration: "underline" }}
                  to="/a-propos"
               >
                  A Propos
               </Link>
            ) : (
               <Link
                  className="NavLink"
                  style={{ textDecoration: "none" }}
                  to="/a-propos"
               >
                  A Propos
               </Link>
            )}
         </nav>
      </div>
   );
}

export default Header;
