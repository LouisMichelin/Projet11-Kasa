import "./Logement.scss";
import ListeLogements from "../../data/logements";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Renseignements from "../../components/Renseignements/Renseignements";
import Host from "../../components/Host/Host";
import Collapse from "../../components/Collapse/Collapse";

function Logement() {
   // Setup relatif aux logements
   const { id } = useParams();
   const [currentIndex, setCurrentIndex] = useState(0);
   let logement = ListeLogements.find((element) => element.id === id);
   let lastImg = parseInt(logement.pictures.length);
   let selectedLogement = logement;
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
   // Setup des dimensions conditionnelles de la page
   const [windowSize, setWindowSize] = useState(getWindowSize());
   useEffect(() => {
      function handleWindowResize() {
         setWindowSize(getWindowSize());
      }
      window.addEventListener("resize", handleWindowResize);
      return () => {
         window.removeEventListener("resize", handleWindowResize);
      };
   }, []);
   function getWindowSize() {
      const { innerWidth } = window;
      return { innerWidth };
   }

   return (
      <div className="LogementWrapper" key={selectedLogement.id}>
         {/* <div>{windowSize.innerWidth}</div> */}
         <Carrousel
            carrouselImgSrc={selectedLogement.pictures[currentIndex]}
            selectedImg={currentIndex + 1}
            totalImg={lastImg}
            toggleArrowLeft={() => handleClickLeft()}
            toggleArrowRight={() => handleClickRight()}
            // cle={selectedLogement.id}
         />
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
               menuWrapperClass={
                  windowSize.innerWidth > 1000
                     ? "LogementConditionnalCollapse"
                     : "MenuWrapper"
               }
               title="Description"
               hiddenContent={selectedLogement.description}
            />
            <Collapse
               menuWrapperClass={
                  windowSize.innerWidth > 1000
                     ? "LogementConditionnalCollapse"
                     : "MenuWrapper"
               }
               title="Equipements"
               hiddenContent={selectedLogement.equipments}
               hiddenStyle={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
               }}
            />
         </div>
      </div>
   );
}

export default Logement;
