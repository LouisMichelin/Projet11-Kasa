import "./Home.scss";
import BackgroundImage from "../../components/Background/Background";

function Home() {
   return (
      <figure className="HomeWrapper">
         <h2 className="HomeTitle">Chez-vous, partout et ailleurs</h2>
         <BackgroundImage />
      </figure>
   );
}

export default Home;
