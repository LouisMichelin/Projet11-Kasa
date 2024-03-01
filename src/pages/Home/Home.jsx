import "./Home.scss";
import ImageAccueil from "../../assets/imageAccueil.png";
import BannerImage from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Logements from "../../data/logements.json";

function Home() {
   return (
      <div className="HomeWrapper">
         <BannerImage
            imageSrc={ImageAccueil}
            imageAlt="Banner à propos"
            text="Chez-vous, partout et ailleurs"
         />
         <div className="CardWrapper">
            {/*----------------------------------------------*/}
            {/*!!!!!!!!!!!!!! LE CODE EST BON !!!!!!!!!!!!!! */}
            {Logements.map(({ id, title, cover }) => (
               <Card
                  key={id}
                  title={title}
                  cardImageAlt={title}
                  cardImageSrc={cover}
               />
            ))}
            {/*----------------------------------------------*/}
         </div>
      </div>
   );
}

export default Home;
