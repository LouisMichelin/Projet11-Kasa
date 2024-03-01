import "./Card.scss";
import { Link, useLocation } from "react-router-dom";

function Card({ title, cardImageAlt, cardImageSrc, handleClick }) {
   return (
      <div className="CardStructure" onClick={handleClick}>
         <img className="CardImage" alt={cardImageAlt} src={cardImageSrc} />
         <div className="CardTitle">{title}</div>
      </div>
      // <Link className="CardStructure" to={`/logement-${index}`}>
      //    <img className="CardImage" alt={cardImageAlt} src={cardImageSrc} />
      //    <div className="CardTitle">{title}</div>
      // </Link>
   );
}

export default Card;
