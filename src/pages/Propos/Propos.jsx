import "./Propos.scss";
import ImageApropos from "../../assets/imageApropos.jpg";
import BannerImage from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { aboutList } from "../../data/apropos";
// import styles from "../../components/styles.module.scss";

function Propos() {
   return (
      <div className="ProposWrapper">
         <BannerImage
            imageSrc={ImageApropos}
            imageAlt="Banner à propos"
            text=""
         />
         {aboutList.map(({ id, title, content }) => (
            <Collapse
               id={id}
               key={id}
               title={title}
               hiddenContent={content}
               // style1={styles.MenuWrapper}
               // style2={styles.MenuButton}
               // style3={styles.MenuTagName}
               // style4={styles.MenuTagArrow}
               // style5={styles.AproposHiddenContent}
            />
         ))}
      </div>
   );
}

export default Propos;
