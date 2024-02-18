import colors from "../../utils/style/colors";
import styled from "styled-components";

const ErrorWrapper = styled.div`
   background-color: ${colors.fatalerror};
   display: flex;
   justify-content: center;
`;

function Error() {
   return (
      <ErrorWrapper>
         <h2>404 404 404 !!!</h2>
      </ErrorWrapper>
   );
}

export default Error;
