import "./Propos.scss";
import ImageApropos from "../../assets/imageApropos.jpg";
import BannerImage from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { aboutList } from "../../data/apropos";
import { useState } from "react";

function Propos() {
   const [isShown0, setIsShown0] = useState(false);
   const [isShown1, setIsShown1] = useState(false);
   const [isShown2, setIsShown2] = useState(false);
   const [isShown3, setIsShown3] = useState(false);

   function handleClick(param) {
      switch (param) {
         case 0:
            setIsShown0(!isShown0);
            return alert(
               `"param" vaut ${param} ; ici, on a comme value de isShown0 : ${isShown0}`
            );
         case 1:
            setIsShown1(!isShown1);
            return alert(
               `"param" vaut ${param} ; ici, on a comme value de isShown0 : ${isShown1} ${`isShown${param}`}`
            );
         case 2:
            setIsShown2(!isShown2);
            return alert(
               `"param" vaut ${param} ; ici, on a comme value de isShown0 : ${isShown2}`
            );
         case 3:
            setIsShown3(!isShown3);
            return alert(
               `"param" vaut ${param} ; ici, on a comme value de isShown0 : ${isShown3}`
            );
         default:
            return alert("rien ne passe");
      }
   }

   return (
      <div className="ProposWrapper">
         <BannerImage
            imageSrc={ImageApropos}
            imageAlt="Banner à propos"
            text=""
         />
         <>
            {aboutList.map(({ id, title, content }) => (
               <div key={id} className="MenuWrapper">
                  <Collapse title={title} showHidden={() => handleClick(id)} />
                  <div
                     value={`isShown${id}`}
                     className="AproposHiddenContent"
                     style={
                        `isShown${id}`
                           ? { display: "none" }
                           : { display: "flex" }
                     }
                  >
                     {content}
                  </div>
               </div>
            ))}
         </>
      </div>
   );
}

export default Propos;
