// import styled from "styled-components";
// import colors from "../../utils/style/colors.js";
// import { StyledLink } from "../../utils/style/Atoms.jsx";
// import HomeIllustration from "../../assets/home-illustration.svg";

// const HomeWrapper = styled.div`
//    display: flex;
//    justify-content: center;
// `;

// const HomerContainer = styled.div`
//    margin: 30px;
//    background-color: ${colors.background};
//    padding: 60px 90px;
//    display: flex;
//    flex-direction: row;
//    max-width: 1200px;
// `;

// const LeftCol = styled.div`
//    display: flex;
//    flex-direction: column;
//    justify-content: center;
//    flex: 1;
//    ${StyledLink} {
//       max-width: 250px;
//    }
// `;

// const StyledTitle = styled.h2`
//    padding-bottom: 30px;
//    max-width: 280px;
//    line-height: 50px;
// `;

// const Illustration = styled.img`
//    flex: 1;
// `;

function Home() {
   return (
      <div>
         <div>
            <div>
               <div>
                  Repérez vos besoins, on s'occupe du reste, avec les meilleurs
                  talents
               </div>
               <div to="/survey/1" $isFullLink>
                  Faire le test
               </div>
            </div>
            {/* <div src={HomeIllustration} /> */}
         </div>
      </div>
   );
}

export default Home;
