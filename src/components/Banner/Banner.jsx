import "./Banner.scss";

function BannerImage({ imageSrc, imageAlt, text }) {
   return (
      <div className="BannerWrapper">
         <img className="BannerImage" alt={imageAlt} src={imageSrc} />
         {text ? <h1 className="BannerText">{text}</h1> : null}
      </div>
   );
}

export default BannerImage;
