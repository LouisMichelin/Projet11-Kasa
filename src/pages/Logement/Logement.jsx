import "./Logement.scss";
import ListeLogements from "../../data/logements";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Renseignements from "../../components/Renseignements/Renseignements";
import Host from "../../components/Host/Host";
import Collapse from "../../components/Collapse/Collapse";

function Logement() {
   const { id } = useParams();
   const [currentIndex, setCurrentIndex] = useState(0);
   let logement = ListeLogements.find((element) => element.id === id);
   let lastImg = parseInt(logement.pictures.length);
   let selectedLogement = logement;

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
            // cle={selectedLogement.id}
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
                  cle={selectedLogement.id}
               />
            </div>
         </div>
         <div className="LogementCollapses">
            <Collapse
               className={"test"}
               title="Description"
               hiddenContent={selectedLogement.description}
            />
            <Collapse
               title="Equipements"
               hiddenContent={selectedLogement.equipments}
               className={"test"}
            />
         </div>
      </div>
   );
}

export default Logement;
