import "./Logement.scss";
import ListeLogements from "../../data/logements";
import Carrousel from "../../components/Carrousel/Carrousel";
import Renseignements from "../../components/Renseignements/Renseignements";
import { useParams } from "react-router-dom";
import { useState } from "react";

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
      <div className="LogementWrapper">
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
            />
            <div className="LogementHost">Proprio (A FAIRE EN COMPONENT)</div>
         </div>
         <div className="LogementCollapses">2</div>
      </div>
   );
}

export default Logement;
