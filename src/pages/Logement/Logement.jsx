import "./Logement.scss";
import ListeLogements from "../../data/logements";
import { useParams } from "react-router-dom";

function Logement() {
   const { index } = useParams();
   return <div className="LogementWrapper">Hello World</div>;
}

export default Logement;
