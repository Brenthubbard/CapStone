import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ClassEventHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: blue;
`;
const StyledWrapper = styled.section`
  background-color: orange;
`;
function Header() {
  return (
    <React.Fragment>

      <StyledWrapper>

        <ClassEventHeader>
         Class Collective Events 
        </ClassEventHeader>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </StyledWrapper>
    </React.Fragment>
  );
}

export default Header;