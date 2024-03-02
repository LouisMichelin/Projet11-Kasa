import "./Logement.scss";
import ListeLogements from "../../data/logements";
import Carrousel from "../../components/Carrousel/Carrousel";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Logement() {
   const { index } = useParams();
   const [currentIndex, setCurrentIndex] = useState(0);

   let lastImg = parseInt(ListeLogements[index].pictures.length);
   let shownImg = ListeLogements[index];

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
            carrouselImgSrc={shownImg.pictures[currentIndex]}
            selectedImg={currentIndex + 1}
            totalImg={lastImg}
            toggleArrowLeft={() => handleClickLeft()}
            toggleArrowRight={() => handleClickRight()}
         />
      </div>
   );
}

export default Logement;
