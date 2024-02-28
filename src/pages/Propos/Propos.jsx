import "./Propos.scss";
import ImageApropos from "../../assets/imageApropos.jpg";
import BannerImage from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { aboutList } from "../../data/apropos";
import { useState } from "react";

function Propos() {
   // const [contentStatus, setcontentStatus] = useState([
   //    false,
   //    false,
   //    false,
   //    false,
   // ]);

   const showHidden = (contentStatus) => {
      alert(`${contentStatus}`);
      return !contentStatus;
   };

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
               contentStatus={false}
               afficher={showHidden}
               contentStyle={{ display: "flex" }}
               hiddenContent={content}
            />
         ))}
      </div>
   );
}

export default Propos;
