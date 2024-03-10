import "./Carrousel.scss";
import ArrowLeft from "../../assets/arrowLeft.png";
import ArrowRight from "../../assets/arrowRight.png";
import { useState } from "react";

function Carrousel({ carrouselImgSrc }) {
   const [currentIndex, setCurrentIndex] = useState(0); // INDEX DU CARROUSEL
   const carrouselLength = carrouselImgSrc.length;

   function handleClickLeft() {
      if (currentIndex === 0) {
         return setCurrentIndex(carrouselLength - 1);
      } else {
         return setCurrentIndex(currentIndex - 1);
      }
   }
   function handleClickRight() {
      if (currentIndex === carrouselLength - 1) {
         return setCurrentIndex(0);
      } else {
         return setCurrentIndex(currentIndex + 1);
      }
   }

   return (
      <div className="CarrouselWrapper">
         {carrouselLength > 1 && (
            <img
               className="CarrouselArrowLeft"
               src={ArrowLeft}
               alt="Flèche directionnelle Gauche"
               onClick={() => handleClickLeft()}
            />
         )}
         <img
            className="CarrouselImage"
            src={carrouselImgSrc[currentIndex]}
            alt="Carrousel"
         />
         {carrouselLength > 1 && (
            <img
               className="CarrouselArrowRight"
               src={ArrowRight}
               alt="Flèche directionnelle Droite"
               onClick={() => handleClickRight()}
            />
         )}
         {carrouselLength > 1 && (
            <div className="CarrouselCompteur">{`${
               currentIndex + 1
            }/${carrouselLength}`}</div>
         )}
      </div>
   );
}

export default Carrousel;
