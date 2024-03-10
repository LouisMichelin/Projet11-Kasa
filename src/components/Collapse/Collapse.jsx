import "./Collapse.scss";
import ArrowBack from "../../assets/arrowBack.png";
import { useState } from "react";

function Collapse({ title, hiddenContent, hiddenStyle }) {
   const [isShown, setIsShown] = useState(false);
   function showHidden() {
      setIsShown(!isShown);
   }
   return (
      <div className="MenuWrapper">
         <div className="MenuButton">
            <div className="MenuTagName">{title}</div>
            <img
               className="MenuTagArrow"
               alt="Flèche vers le haut"
               src={ArrowBack}
               style={
                  isShown
                     ? {
                          transform: "rotate(180deg)",
                          transition: "transform 400ms ease",
                       }
                     : {
                          transform: "rotate(0deg)",
                          transition: "transform 400ms ease",
                       }
               }
               onClick={showHidden}
            />
         </div>
         {isShown ? (
            <div className="AproposHiddenContent" style={hiddenStyle}>
               {hiddenContent.map ? (
                  hiddenContent.map((element, id) => (
                     <span key={id}>{element}</span>
                  ))
               ) : (
                  <div>{hiddenContent}</div>
               )}
            </div>
         ) : null}
      </div>
   );
}

export default Collapse;
