import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
   return (
      <div className="HeaderWrapper">
         <h2>HEADER</h2>
         <div className="NavContainer">
            <Link to="/">Accueil</Link>
            <Link to="/1337">404</Link>
         </div>
      </div>
   );
}

export default Header;
