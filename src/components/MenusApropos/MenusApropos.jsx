import "./MenusApropos.scss";
import ArrowBack from "../../assets/arrowBack.png";
import { useState } from "react";

function Button({ name }) {
   return (
      <button className="MenuButton">
         <div className="MenuTagName">{name}</div>
         <img
            className="MenuTagArrow"
            alt="Flèche vers le haut"
            src={ArrowBack}
         />
      </button>
   );
}

function Menus() {
   const [isShown, setIsShown] = useState(false);

   const handleClick = () => {
      isShown ? setIsShown(false) : setIsShown(true);
   };

   return (
      <div className="MenuWrapper">
         <Button name="Fiabilité" />
         <Button name="Respect" />
         <Button name="Service" />
         <Button name="Sécurité" />

         {/* <button className="MenuButton" onClick={handleClick} id="1">
            <div className="MenuTagName">Fiabilité</div>
            <img
               className="MenuTagArrow"
               alt="Flèche vers le haut"
               src={ArrowBack}
            />
         </button>
         {isShown ? (
            <div className="MenuHiddenDiv">HIDDEN MESSAGE 1</div>
         ) : null} */}
      </div>
   );
}

export default Menus;
