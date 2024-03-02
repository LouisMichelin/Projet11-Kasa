import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ title, cardImageAlt, cardImageSrc, handleClick, pageIndex }) {
   return (
      <Link className="CardStructure" onClick={handleClick} to={pageIndex}>
         <img className="CardImage" alt={cardImageAlt} src={cardImageSrc} />
         <div className="CardTitle">{title}</div>
      </Link>
   );
}

export default Card;
