import "./Collapse.scss";
import ArrowBack from "../../assets/arrowBack.png";
import { useState } from "react";

function Collapse({ title, hiddenContent }) {
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
            <div className="AproposHiddenContent">
               {hiddenContent.map ? (
                  <ul className="HiddenListing">
                     {hiddenContent.map((element, id) => (
                        <li key={id}>{element}</li>
                     ))}
                  </ul>
               ) : (
                  <p>{hiddenContent}</p>
               )}
            </div>
         ) : null}
      </div>
   );
}

export default Collapse;
