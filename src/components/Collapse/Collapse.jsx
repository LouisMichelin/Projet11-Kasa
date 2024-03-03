// import "./Collapse.scss";
import ArrowBack from "../../assets/arrowBack.png";
import { useState } from "react";
// import styles from "../../components/styles.module.scss";

function Collapse({
   id,
   title,
   hiddenContent,
   style1,
   style2,
   style3,
   style4,
   style5,
}) {
   const [isShown, setIsShown] = useState(false);

   function showHidden() {
      setIsShown(!isShown);
   }
   return (
      <div key={id} className={style1}>
         <div key={id} id={id} className={style2}>
            <div className={style3}>{title}</div>
            <img
               className={style4}
               alt="Flèche vers le haut"
               src={ArrowBack}
               style={isShown ? { transform: "rotate(180deg)" } : null}
               onClick={showHidden}
            />
         </div>
         {isShown ? <div className={style5}>{hiddenContent}</div> : null}
      </div>
   );
}

export default Collapse;
