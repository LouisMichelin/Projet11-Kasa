import "./Card.scss";
import { Link, useParams } from "react-router-dom";
// import ListeLogements from "../../data/logements";

function Card({ title, cardImageAlt, cardImageSrc, handleClick, pageIndex }) {
   return (
      // <div className="CardStructure" onClick={handleClick}>
      //    <img className="CardImage" alt={cardImageAlt} src={cardImageSrc} />
      //    <div className="CardTitle">{title}</div>
      // </div>
      <Link
         className="CardStructure"
         onClick={handleClick}
         // index={index}
         to={pageIndex}
      >
         <img className="CardImage" alt={cardImageAlt} src={cardImageSrc} />
         <div className="CardTitle">{title}</div>
      </Link>
   );
}

export default Card;
