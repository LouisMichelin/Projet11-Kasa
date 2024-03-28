import "./Logement.scss";
import ListeLogements from "../../data/logements";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Renseignements from "../../components/Renseignements/Renseignements";
import Host from "../../components/Host/Host";
import Collapse from "../../components/Collapse/Collapse";

function Logement() {
   const { id } = useParams();
   const [selectedLogement, setSelectedLogement] = useState(null);
   let navigate = useNavigate();

   useEffect(() => {
      let data = ListeLogements.find((element) => element.id === id);
      if (data == null) {
         navigate("/error");
      }
      setSelectedLogement(data);
   }, [id, navigate]);

   return (
      <>
         {selectedLogement !== null && (
            <div className="LogementWrapper" key={selectedLogement.id}>
               <Carrousel carrouselImgSrc={selectedLogement.pictures} />
               <div className="LogementExplications">
                  <Renseignements
                     logementTitle={selectedLogement.title}
                     logementLocation={selectedLogement.location}
                     allTags={selectedLogement.tags}
                     cle={selectedLogement.id}
                  />
                  <div className="LogementHost">
                     <Host
                        nomPrenom={selectedLogement.host.name}
                        hostPhotoSrc={selectedLogement.host.picture}
                        rating={selectedLogement.rating}
                        cle={selectedLogement.id}
                     />
                  </div>
               </div>
               <div className="LogementCollapses">
                  <Collapse
                     menuWrapperClass="MenuWrapper"
                     title="Description"
                     hiddenContent={selectedLogement.description}
                  />
                  <Collapse
                     menuWrapperClass="MenuWrapper"
                     title="Equipements"
                     hiddenContent={selectedLogement.equipments}
                     hiddenStyle={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "baseline",
                     }}
                     id={id}
                  />
               </div>
            </div>
         )}
      </>
   );
}

export default Logement;
