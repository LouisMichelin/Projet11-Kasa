import "./Propos.scss";
import ImageApropos from "../../assets/imageApropos.jpg";
import BannerImage from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { aboutList } from "../../data/apropos";
import { useState } from "react";

function Propos() {
   function test2() {
      return alert("LOL");
   }

   return (
      <div className="ProposWrapper">
         <BannerImage
            imageSrc={ImageApropos}
            imageAlt="Banner à propos"
            text=""
         />
         <>
            <div className="MenuWrapper" key={aboutList[0].id}>
               <Collapse title={aboutList[0].title} lol={test2} />
               <div
                  className="AproposHiddenContent"
                  // style={isShown ? { display: "flex" } : { display: "none" }}
               >
                  {aboutList[0].content}
               </div>
            </div>
            {/* {aboutList.map(({ id, title, content }) => (
               <div className="MenuWrapper" key={id}>
                  <Collapse title={title} />
                  <div
                     className="AproposHiddenContent"
                     // style={isShown ? { display: "flex" } : { display: "none" }}
                  >
                     {content}
                  </div>
               </div>
            ))} */}
         </>
      </div>
   );
}

export default Propos;
