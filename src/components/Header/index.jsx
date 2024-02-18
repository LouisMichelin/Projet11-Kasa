import { Link } from "react-router-dom";
import colors from "../../utils/style/colors";
import styled from "styled-components";

const HeaderWrapper = styled.div`
   background-color: ${colors.primary};
   display: flex;
   justify-content: center;
   color: #f4f4f4;
`;

const NavContainer = styled.nav`
   padding: 30px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

function Header() {
   return (
      <HeaderWrapper>
         <h2>HEADER</h2>
         <NavContainer>
            <Link to="/">link to accueil</Link>
         </NavContainer>
      </HeaderWrapper>
   );
}

export default Header;
