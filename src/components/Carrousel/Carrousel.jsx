import "./Carrousel.scss";
// import { useParams } from "react-router-dom";
import ArrowLeft from "../../assets/arrowLeft.png";
import ArrowRight from "../../assets/arrowRight.png";

function Carrousel({ carrouselImgSrc }) {
   function lolTest(text) {
      alert(`AHAHA ça marche ${text}`);
   }
   // const { index } = useParams();

   return (
      <div className="CarrouselWrapper">
         {/* <div>JE SUIS UN CARROUSEL & Mon index = {index}</div> */}
         <img
            className="CarrouselArrowLeft"
            src={ArrowLeft}
            alt="Flèche directionnelle Gauche"
            onClick={() => lolTest("gauche")}
         />
         <img
            className="CarrouselImage"
            src={carrouselImgSrc}
            alt="Carrousel"
         />
         <img
            className="CarrouselArrowRight"
            src={ArrowRight}
            alt="Flèche directionnelle Droite"
            onClick={() => lolTest("droite")}
         />
      </div>
   );
}

export default Carrousel;
