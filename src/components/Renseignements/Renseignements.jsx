import "./Renseignements.scss";

function Renseignements({ logementTitle, logementLocation, allTags }) {
   return (
      <div className="RenseignementsWrapper">
         <div className="RenseignementTitle">{logementTitle}</div>
         <div className="RenseignementLocation">{logementLocation}</div>
         <div className="RenseignementTagsContainer">
            {allTags.map((tags, cle) => (
               <div key={cle} className="RenseignementTag">
                  {tags}
               </div>
            ))}
         </div>
      </div>
   );
}

export default Renseignements;
