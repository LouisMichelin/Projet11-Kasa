import "./Carrousel.scss";
import ArrowLeft from "../../assets/arrowLeft.png";
import ArrowRight from "../../assets/arrowRight.png";

function Carrousel({
   carrouselImgSrc,
   selectedImg,
   totalImg,
   toggleArrowLeft,
   toggleArrowRight,
   cle,
}) {
   return (
      <div className="CarrouselWrapper" key={cle}>
         <img
            className="CarrouselArrowLeft"
            src={ArrowLeft}
            alt="Flèche directionnelle Gauche"
            onClick={() => toggleArrowLeft()}
         />
         {/* {selectedImg === 1 ? null : (
            <img
               className="CarrouselArrowLeft"
               src={ArrowLeft}
               alt="Flèche directionnelle Gauche"
               onClick={() => toggleArrowLeft()}
            />
         )} */}
         <img
            className="CarrouselImage"
            src={carrouselImgSrc}
            alt="Carrousel"
         />
         <img
            className="CarrouselArrowRight"
            src={ArrowRight}
            alt="Flèche directionnelle Droite"
            onClick={() => toggleArrowRight()}
         />
         {/* {selectedImg === totalImg ? null : (
            <img
               className="CarrouselArrowRight"
               src={ArrowRight}
               alt="Flèche directionnelle Droite"
               onClick={() => toggleArrowRight()}
            />
         )} */}
         <div className="CarrouselCompteur">{`${selectedImg}/${totalImg}`}</div>
      </div>
   );
}

export default Carrousel;
