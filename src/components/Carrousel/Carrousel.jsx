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
         {totalImg > 1 && (
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
         {totalImg > 1 && (
            <img
               className="CarrouselArrowRight"
               src={ArrowRight}
               alt="Flèche directionnelle Droite"
               onClick={() => toggleArrowRight()}
            />
         )}
         {totalImg > 1 && (
            <div className="CarrouselCompteur">{`${selectedImg}/${totalImg}`}</div>
         )}
      </div>
   );
}

export default Carrousel;
