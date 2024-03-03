import "./Home.scss";
import ImageAccueil from "../../assets/imageAccueil.png";
import BannerImage from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import ListeLogements from "../../data/logements";

function Home() {
   return (
      <div className="HomeWrapper">
         <BannerImage
            imageSrc={ImageAccueil}
            imageAlt="Banner à propos"
            text="Chez-vous, partout et ailleurs"
         />
         <div className="CardWrapper">
            {ListeLogements.map(({ id, title, cover }) => (
               <Card
                  key={id}
                  title={title}
                  cardImageAlt={title}
                  cardImageSrc={cover}
                  pageIndex={`/logement/${id}`}
               />
            ))}
         </div>
      </div>
   );
}

export default Home;
