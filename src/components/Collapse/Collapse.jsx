import "./Collapse.scss";
import ArrowBack from "../../assets/arrowBack.png";

function Collapse({ id, title, showHidden }) {
   return (
      <button key={id} className="MenuButton" onClick={showHidden}>
         <div className="MenuTagName">{title}</div>
         <img
            className="MenuTagArrow"
            alt="Flèche vers le haut"
            src={ArrowBack}
         />
      </button>
   );
}

export default Collapse;
