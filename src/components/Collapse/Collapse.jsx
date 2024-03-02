// import "./Collapse.scss";
import ArrowBack from "../../assets/arrowBack.png";
import { useState } from "react";
import styles from "../../components/styles.module.scss";

function Collapse({ id, title, hiddenContent }) {
   const [isShown, setIsShown] = useState(false);

   function showHidden() {
      setIsShown(!isShown);
   }

   return (
      <div key={id} className={styles.MenuWrapper}>
         <div key={id} id={id} className={styles.MenuButton}>
            <div className={styles.MenuTagName}>{title}</div>
            <img
               className={styles.MenuTagArrow}
               alt="Flèche vers le haut"
               src={ArrowBack}
               style={isShown ? { transform: "rotate(180deg)" } : null}
               onClick={showHidden}
            />
         </div>
         {isShown ? (
            <div className={styles.AproposHiddenContent}>{hiddenContent}</div>
         ) : null}
      </div>
   );
}

export default Collapse;
