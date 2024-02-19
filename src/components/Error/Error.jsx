import "./Error.scss";
import { Link } from "react-router-dom";

function Error() {
   return (
      <div className="ErrorWrapper">
         <h1 className="Error404">404</h1>
         <div className="ErrorOups">
            Oups! La page que vous demandez n'existe pas.
         </div>
         <Link className="ErrorHomeLink" to="/">
            Retourner sur la page d'accueil
         </Link>
      </div>
   );
}

export default Error;
