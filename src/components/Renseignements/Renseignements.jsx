import "./Renseignements.scss";

function Renseignements({ logementTitle, logementLocation, allTags }) {
   return (
      <div className="RenseignementsWrapper">
         <div>{logementTitle}</div>
         <div>{logementLocation}</div>
         <div className="RenseignementTagsContainer">
            {allTags.map((tags) => (
               <div className="RenseignementTag">{tags}</div>
            ))}
         </div>
      </div>
   );
}

export default Renseignements;
