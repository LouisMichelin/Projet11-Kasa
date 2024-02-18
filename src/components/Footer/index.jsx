import colors from "../../utils/style/colors";
import styled from "styled-components";

const FooterWrapper = styled.div`
   background-color: ${colors.secondary};
   display: flex;
   justify-content: center;
`;

function Footer() {
   return (
      <FooterWrapper>
         <h2>FOOTER</h2>
      </FooterWrapper>
   );
}

export default Footer;
