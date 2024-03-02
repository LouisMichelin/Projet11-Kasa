import "./Logement.scss";
import ListeLogements from "../../data/logements";
import Carrousel from "../../components/Carrousel/Carrousel";
import Renseignements from "../../components/Renseignements/Renseignements";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Host from "../../components/Host/Host";

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
               <Host />
            </div>
         </div>
         <div className="LogementCollapses">
            <div>BOUTON1</div>
            <div>BOUTON2</div>
         </div>
      </div>
   );
}

export default Logement;
