import "./Logement.scss";
import styles from "../../components/styles.module.scss";
import ListeLogements from "../../data/logements";
import Carrousel from "../../components/Carrousel/Carrousel";
import Renseignements from "../../components/Renseignements/Renseignements";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Host from "../../components/Host/Host";
import Collapse from "../../components/Collapse/Collapse";

function Logement() {
   const { index } = useParams();
   const [currentIndex, setCurrentIndex] = useState(0);
   let lastImg = parseInt(ListeLogements[index].pictures.length);
   let selectedLogement = ListeLogements[index];
   function handleClickLeft() {
      if (currentIndex > 0) {
         return setCurrentIndex(currentIndex - 1);
      }
   }
   function handleClickRight() {
      if (currentIndex < lastImg - 1) {
         return setCurrentIndex(currentIndex + 1);
      }
   }

   return (
      <div className="LogementWrapper" key={selectedLogement.id}>
         <Carrousel
            carrouselImgSrc={selectedLogement.pictures[currentIndex]}
            selectedImg={currentIndex + 1}
            totalImg={lastImg}
            toggleArrowLeft={() => handleClickLeft()}
            toggleArrowRight={() => handleClickRight()}
         />
         <div className="LogementExplications">
            <Renseignements
               logementTitle={selectedLogement.title}
               logementLocation={selectedLogement.location}
               allTags={selectedLogement.tags}
               cle={selectedLogement.id}
            />
            <div className="LogementHost">
               <Host
                  nomPrenom={selectedLogement.host.name}
                  hostPhotoSrc={selectedLogement.host.picture}
                  rating={selectedLogement.rating}
               />
            </div>
         </div>
         <div className="LogementCollapses">
            <Collapse
               className
               title="Description"
               hiddenContent={selectedLogement.description}
            />
            <Collapse
               className
               title="Equipements"
               hiddenContent={selectedLogement.equipments}
            />
         </div>
      </div>
   );
}

export default Logement;
