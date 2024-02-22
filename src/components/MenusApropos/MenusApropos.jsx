import "./MenusApropos.scss";
import ArrowBack from "../../assets/arrowBack.png";
import { useState } from "react";
import { aboutList } from "../../data/apropos";

function ButtonApropos() {
   const [isShown, setIsShown] = useState(false);

   const handleClick = () => {
      // isShown ? setIsShown(false) : setIsShown(true);
      setIsShown(!isShown);
   };

   return (
      <div className="MenuWrapper">
         {aboutList.map(({ id, title, content }) => (
            <div>
               <button key={id} className="MenuButton" onClick={handleClick}>
                  <div className="MenuTagName">{title}</div>
                  <img
                     className="MenuTagArrow"
                     alt="Flèche vers le haut"
                     src={ArrowBack}
                  />
               </button>
               {isShown ? <div>{content}</div> : null}
            </div>
         ))}
      </div>
      // <div className="MenuWrapper">
      //    <div>
      //       <button className="MenuButton" onClick={handleClick}>
      //          <div className="MenuTagName">title</div>
      //          <img
      //             className="MenuTagArrow"
      //             alt="Flèche vers le haut"
      //             src={ArrowBack}
      //          />
      //       </button>
      //       {isShown ? <div>content</div> : null}
      //    </div>
      // </div>
   );
}

export default ButtonApropos;
