import "./Background.scss";
import ImageApropos from "../../assets/imageApropos.jpg";

function BackgroundImage() {
   return (
      <div className="BackgroundWrapper">
         <img
            className="BackgroundImage"
            alt="Un paysage montagneux"
            src={ImageApropos}
         />
      </div>
   );
}

export default BackgroundImage;
