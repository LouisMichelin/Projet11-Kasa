import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
   return (
      <div className="HeaderWrapper">
         <h2>HEADER</h2>
         <div className="NavContainer">
            <Link to="/">Accueil</Link>
         </div>
      </div>
   );
}

export default Header;
