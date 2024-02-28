import "./Collapse.scss";
import ArrowBack from "../../assets/arrowBack.png";
import { useState } from "react";

function Collapse({
   id,
   title,
   hiddenContent,
   afficher,
   contentStyle,
   contentStatus,
}) {
   // const [contentStatus, setcontentStatus] = useState(false);
   // const [isShown, setIsShown] = useState([false, false, false, false]);

   // function showHidden(id) {
   //    setIsShown(!isShown[id]);
   //    alert(`Hello World ${id}, Statut = ${isShown[id]} vs ${isShown[id]} `);
   // }

   return (
      <div key={id} className="MenuWrapper">
         <button key={id} id={id} className="MenuButton" onClick={afficher}>
            <div className="MenuTagName">{title}</div>
            <img
               className="MenuTagArrow"
               alt="Flèche vers le haut"
               src={ArrowBack}
            />
         </button>
         <div
            className="AproposHiddenContent"
            style={contentStyle}
            contentStatus={true}
         >
            {contentStatus ? { hiddenContent } : null}
         </div>
      </div>
   );
}

export default Collapse;
