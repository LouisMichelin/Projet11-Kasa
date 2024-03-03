import "./Propos.scss";
import ImageApropos from "../../assets/imageApropos.jpg";
import BannerImage from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { aboutList } from "../../data/apropos";

function Propos() {
   return (
      <div className="AllProposContainer">
         {/* <div className="ProposWrapper"> */}
         <BannerImage
            className="ProposBanner"
            imageSrc={ImageApropos}
            imageAlt="Banner à propos"
            text=""
         />
         {/* </div> */}
         <div className="ProposCollapsesContainer">
            {aboutList.map(({ id, title, content }) => (
               <Collapse
                  id={id}
                  key={id}
                  title={title}
                  hiddenContent={content}
               />
            ))}
         </div>
      </div>
   );
}

export default Propos;
