import "./Propos.scss";
import ImageApropos from "../../assets/imageApropos.jpg";
import BannerImage from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { aboutList } from "../../data/apropos";
import { useState } from "react";

function Propos() {
   function showHidden(id) {
      alert(`oui c'est responsive ${id}`);
   }

   return (
      <div className="ProposWrapper">
         <BannerImage
            imageSrc={ImageApropos}
            imageAlt="Banner à propos"
            text=""
         />

         {aboutList.map(({ id, title, content }) => (
            <Collapse
               key={id}
               title={title}
               content={content}
               showHidden={() => showHidden(id)}
               isShown={false}
            />
         ))}
      </div>
   );
}

export default Propos;
