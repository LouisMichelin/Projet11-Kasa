import "./Home.scss";

import ImageAccueil from "../../assets/imageAccueil.png";
import BannerImage from "../../components/Banner/Banner";

function Home() {
   return (
      <div className="HomeWrapper">
         <BannerImage
            imageSrc={ImageAccueil}
            imageAlt="Banner à propos"
            text="Chez-vous, partout et ailleurs"
         />
      </div>
   );
}

export default Home;
