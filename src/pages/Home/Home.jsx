import "./Home.scss";
import ImageAccueil from "../../assets/imageAccueil.png";
import BannerImage from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import ListeLogements from "../../data/logements";

function Home() {
   function test123(valeurDefinie, index) {
      alert(`L'unique ID = ${valeurDefinie} & son index = ${index}`);
   }
   return (
      <div className="HomeWrapper">
         <BannerImage
            imageSrc={ImageAccueil}
            imageAlt="Banner à propos"
            text="Chez-vous, partout et ailleurs"
         />
         <div className="CardWrapper">
            {ListeLogements.map(({ id, title, cover }, index) => (
               <Card
                  key={id}
                  title={title}
                  cardImageAlt={title}
                  cardImageSrc={cover}
                  // index={title}
                  handleClick={() => test123(id, index)}
               />
            ))}
         </div>
      </div>
   );
}

export default Home;
