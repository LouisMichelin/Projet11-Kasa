import colors from "../../utils/style/colors.js";
import styled from "styled-components";

const HomeWrapper = styled.div`
   display: flex;
   justify-content: center;
   background-color: ${colors.home};
`;

function Home() {
   return (
      <HomeWrapper>
         <div>
            <h2>PAGE ACCUEIL</h2>
         </div>
      </HomeWrapper>
   );
}

export default Home;
