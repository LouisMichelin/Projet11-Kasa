import "./Carrousel.scss";
import ArrowLeft from "../../assets/arrowLeft.png";
import ArrowRight from "../../assets/arrowRight.png";

function Carrousel({
   carrouselImgSrc,
   selectedImg,
   totalImg,
   toggleArrowLeft,
   toggleArrowRight,
}) {
   return (
      <div className="CarrouselWrapper">
         {selectedImg === 1 ? null : (
            <img
               className="CarrouselArrowLeft"
               src={ArrowLeft}
               alt="Flèche directionnelle Gauche"
               onClick={() => toggleArrowLeft()}
            />
         )}
         <img
            className="CarrouselImage"
            src={carrouselImgSrc}
            alt="Carrousel"
         />
         {selectedImg === totalImg ? null : (
            <img
               className="CarrouselArrowRight"
               src={ArrowRight}
               alt="Flèche directionnelle Droite"
               onClick={() => toggleArrowRight()}
            />
         )}
         <div className="CarrouselCompteur">{`${selectedImg}/${totalImg}`}</div>
      </div>
   );
}

export default Carrousel;
