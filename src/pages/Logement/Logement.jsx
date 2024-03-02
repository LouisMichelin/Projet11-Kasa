import "./Logement.scss";
import ListeLogements from "../../data/logements";
import Carrousel from "../../components/Carrousel/Carrousel";
import { useParams } from "react-router-dom";

function Logement() {
   const { index } = useParams();

   return (
      <div className="LogementWrapper">
         {/* <div>{index}</div> */}
         <Carrousel carrouselImgSrc={ListeLogements[index].cover} />
         {/* <div>Bonjour, je joue avec {index}</div> */}
      </div>
   );
}

export default Logement;
