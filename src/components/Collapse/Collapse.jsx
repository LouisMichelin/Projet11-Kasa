import "./Collapse.scss";
import ArrowBack from "../../assets/arrowBack.png";
import { useState } from "react";

function Collapse({ id, title, hiddenContent, menuWrapperClass, hiddenStyle }) {
   const [isShown, setIsShown] = useState(false);
   function showHidden() {
      setIsShown(!isShown);
   }
   return (
      <div key={id} className={menuWrapperClass}>
         <div key={id} id={id} className="MenuButton">
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
                  hiddenContent.map((element) => <span>{element}</span>)
               ) : (
                  <div>{hiddenContent}</div>
               )}
            </div>
         ) : null}
      </div>
   );
}

export default Collapse;
