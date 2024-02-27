import "./Collapse.scss";
import ArrowBack from "../../assets/arrowBack.png";

function Collapse({ id, title, content, showHidden, isShown }) {
   return (
      <div key={id} className="MenuWrapper">
         <button key={id} className="MenuButton" onClick={showHidden}>
            <div className="MenuTagName">{title}</div>
            <img
               className="MenuTagArrow"
               alt="Flèche vers le haut"
               src={ArrowBack}
            />
         </button>
         <div className="AproposHiddenContent">
            {isShown ? { content } : "NOPE"}
         </div>
      </div>
   );
}

export default Collapse;
