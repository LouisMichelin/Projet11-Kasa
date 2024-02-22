import "./MenusApropos.scss";
import ArrowBack from "../../assets/arrowBack.png";
import { useState } from "react";

function Menus() {
   // const sayHello = (e) => {
   //    e.preventDefault();
   //    alert("Hello!");
   // };

   const [isShown, setIsShown] = useState(false);

   const handleClick = () => {
      isShown ? setIsShown(false) : setIsShown(true);
   };

   return (
      <div className="MenuWrapper">
         <button className="MenuButton" onClick={handleClick}>
            <div className="MenuTagName">Fiabilité</div>
            <img
               className="MenuTagArrow"
               alt="Flèche vers le haut"
               src={ArrowBack}
            />
         </button>
         {isShown ? <div className="">HIDDEN MESSAGE</div> : null}
         <button className="MenuButton" onClick={handleClick}>
            <div className="MenuTagName">Respect</div>
            <img
               className="MenuTagArrow"
               alt="Flèche vers le haut"
               src={ArrowBack}
            />
         </button>
         {isShown ? <div className="">HIDDEN MESSAGE</div> : null}
         <button className="MenuButton" onClick={handleClick}>
            <div className="MenuTagName">Service</div>
            <img
               className="MenuTagArrow"
               alt="Flèche vers le haut"
               src={ArrowBack}
            />
         </button>
         {isShown ? <div className="">HIDDEN MESSAGE</div> : null}
         <button className="MenuButton" onClick={handleClick}>
            <div className="MenuTagName">Sécurité</div>
            <img
               className="MenuTagArrow"
               alt="Flèche vers le haut"
               src={ArrowBack}
            />
         </button>
         {isShown ? <div className="">HIDDEN MESSAGE</div> : null}
      </div>
   );
}

export default Menus;
