import "./ButtonApropos.scss";
import ArrowBack from "../../assets/arrowBack.png";
import { useState } from "react";
import { aboutList } from "../../data/apropos";

function ButtonApropos() {
   // States
   const [isShown1, setIsShown1] = useState(false);
   const [isShown2, setIsShown2] = useState(false);
   const [isShown3, setIsShown3] = useState(false);
   const [isShown4, setIsShown4] = useState(false);
   // Change State onClick()
   function handleClick1() {
      setIsShown1(!isShown1);
   }
   function handleClick2() {
      setIsShown2(!isShown2);
   }
   function handleClick3() {
      setIsShown3(!isShown3);
   }
   function handleClick4() {
      setIsShown4(!isShown4);
   }

   return (
      // <div className="MenuWrapper">
      //    <div>
      //       {aboutList.map(({ id, title, content }) => (
      //          <button key={id} className="MenuButton" onClick={handleClick}>
      //             <div className="MenuTagName">{title}</div>
      //             <img
      //                className="MenuTagArrow"
      //                alt="Flèche vers le haut"
      //                src={ArrowBack}
      //                value={`isShown${id}`}
      //             />
      //          </button>
      //       ))}
      //    </div>
      // </div>
      <div className="MenuWrapper">
         <button className="MenuButton" onClick={handleClick1}>
            <div className="MenuTagName">{aboutList[0].title}</div>
            {isShown1 ? (
               <img
                  className="MenuTagArrow"
                  alt="Flèche vers le haut"
                  src={ArrowBack}
                  style={{
                     transform: "rotate(180deg)",
                     transition: "transform 150ms ease",
                  }}
               />
            ) : (
               <img
                  className="MenuTagArrow"
                  alt="Flèche vers le haut"
                  src={ArrowBack}
                  style={{
                     transform: "rotate(0deg)",
                     transition: "transform 150ms ease",
                  }}
               />
            )}
         </button>
         {isShown1 ? (
            <div className="AproposHiddenContent">{aboutList[0].content}</div>
         ) : null}

         <button className="MenuButton" onClick={handleClick2}>
            <div className="MenuTagName">{aboutList[1].title}</div>
            {isShown2 ? (
               <img
                  className="MenuTagArrow"
                  alt="Flèche vers le haut"
                  src={ArrowBack}
                  style={{
                     transform: "rotate(180deg)",
                     transition: "transform 150ms ease",
                  }}
               />
            ) : (
               <img
                  className="MenuTagArrow"
                  alt="Flèche vers le haut"
                  src={ArrowBack}
                  style={{
                     transform: "rotate(0deg)",
                     transition: "transform 150ms ease",
                  }}
               />
            )}
         </button>
         {isShown2 ? (
            <div className="AproposHiddenContent">{aboutList[1].content}</div>
         ) : null}

         <button className="MenuButton" onClick={handleClick3}>
            <div className="MenuTagName">{aboutList[2].title}</div>
            {isShown3 ? (
               <img
                  className="MenuTagArrow"
                  alt="Flèche vers le haut"
                  src={ArrowBack}
                  style={{
                     transform: "rotate(180deg)",
                     transition: "transform 150ms ease",
                  }}
               />
            ) : (
               <img
                  className="MenuTagArrow"
                  alt="Flèche vers le haut"
                  src={ArrowBack}
                  style={{
                     transform: "rotate(0deg)",
                     transition: "transform 150ms ease",
                  }}
               />
            )}
         </button>
         {isShown3 ? (
            <div className="AproposHiddenContent">{aboutList[2].content}</div>
         ) : null}

         <button className="MenuButton" onClick={handleClick4}>
            <div className="MenuTagName">{aboutList[3].title}</div>
            {isShown4 ? (
               <img
                  className="MenuTagArrow"
                  alt="Flèche vers le haut"
                  src={ArrowBack}
                  style={{
                     transform: "rotate(180deg)",
                     transition: "transform 150ms ease",
                  }}
               />
            ) : (
               <img
                  className="MenuTagArrow"
                  alt="Flèche vers le haut"
                  src={ArrowBack}
                  style={{
                     transform: "rotate(0deg)",
                     transition: "transform 150ms ease",
                  }}
               />
            )}
         </button>
         {isShown4 ? (
            <div className="AproposHiddenContent">{aboutList[3].content}</div>
         ) : null}
      </div>
   );
}

export default ButtonApropos;
