import "./Host.scss";
import StarActive from "../../assets/starActive.png";
import StarInactive from "../../assets/starInactive.png";

function Host({ nomPrenom, hostPhotoSrc, rating }) {
   return (
      <>
         <div className="HostProfile">
            <div className="HostNomPrenom">{nomPrenom}</div>
            <img
               className="HostPhoto"
               src={hostPhotoSrc}
               alt="Profil de l'hôte"
            />
         </div>
         <div className="HostRating">
            <img
               className="HostStars"
               src={rating >= 1 ? StarActive : StarInactive}
               alt="Rating"
            />
            <img
               className="HostStars"
               src={rating >= 2 ? StarActive : StarInactive}
               alt="Rating"
            />
            <img
               className="HostStars"
               src={rating >= 3 ? StarActive : StarInactive}
               alt="Rating"
            />
            <img
               className="HostStars"
               src={rating >= 4 ? StarActive : StarInactive}
               alt="Rating"
            />
            <img
               className="HostStars"
               src={rating >= 5 ? StarActive : StarInactive}
               alt="Rating"
            />
         </div>
      </>
   );
}

export default Host;
