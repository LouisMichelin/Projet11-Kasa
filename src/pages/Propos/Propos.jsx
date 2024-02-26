import "./Propos.scss";
import ImageApropos from "../../assets/imageApropos.jpg";
import BannerImage from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { aboutList } from "../../data/apropos";
import { useState } from "react";

function Propos() {
   const [isShown, setIsShown] = useState(false);
   function handleClick() {
      setIsShown(!isShown);
   }

   return (
      <div className="ProposWrapper">
         <BannerImage
            imageSrc={ImageApropos}
            imageAlt="Banner à propos"
            text=""
         />
         <div className="MenuWrapper">
            {aboutList.map(({ id, title, content }) => (
               <>
                  <Collapse title={title} onClick={handleClick} />
                  <div
                     style={isShown ? { display: "none" } : { display: "flex" }}
                     className="AproposHiddenContent"
                  >
                     {content}
                  </div>
               </>
            ))}
         </div>
      </div>
   );
}

export default Propos;
