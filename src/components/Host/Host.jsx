import "./Host.scss";
import StarActive from "../../assets/starActive.png";
import StarInactive from "../../assets/starInactive.png";

function Host({ nomPrenom, hostPhotoSrc, rating }) {
   const evaluation = [1, 2, 3, 4, 5];
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
            {evaluation.map((note) =>
               note <= rating ? (
                  <img className="HostStars" src={StarActive} alt="Rating" />
               ) : (
                  <img className="HostStars" src={StarInactive} alt="Rating" />
               )
            )}
         </div>
      </>
   );
}

export default Host;
