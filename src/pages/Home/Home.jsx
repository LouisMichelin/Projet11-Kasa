import "./Home.scss";
import ImageAccueil from "../../assets/imageAccueil.png";
import BannerImage from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

function Home() {
   return (
      <div className="HomeWrapper">
         <BannerImage
            imageSrc={ImageAccueil}
            imageAlt="Banner à propos"
            text="Chez-vous, partout et ailleurs"
         />
         <div className="CardWrapper">
            <Card />
         </div>
      </div>
   );
}

export default Home;
