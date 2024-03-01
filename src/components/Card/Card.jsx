import "./Card.scss";

function Card({ title, cardImageAlt, cardImageSrc }) {
   return (
      <div className="CardStructure">
         <img className="CardImage" alt={cardImageAlt} src={cardImageSrc} />
         {/* <div className="CardTitle">Titre de la location</div> */}
         <div className="CardTitle">{title}</div>
      </div>
   );
}

export default Card;
