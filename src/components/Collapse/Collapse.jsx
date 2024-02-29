import "./Collapse.scss";
import ArrowBack from "../../assets/arrowBack.png";
import { useState } from "react";

function Collapse({ id, title, hiddenContent }) {
   const [isShown, setIsShown] = useState(false);

   function showHidden() {
      setIsShown(!isShown);
   }

   return (
      <div key={id} className="MenuWrapper">
         <button key={id} id={id} className="MenuButton" onClick={showHidden}>
            <div className="MenuTagName">{title}</div>
            <img
               className="MenuTagArrow"
               alt="Flèche vers le haut"
               src={ArrowBack}
               style={isShown ? { transform: "rotate(180deg)" } : null}
            />
         </button>
         {isShown ? (
            <div className="AproposHiddenContent">{hiddenContent}</div>
         ) : null}
      </div>
   );
}

export default Collapse;
