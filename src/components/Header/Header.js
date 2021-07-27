import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
// import React, { useState } from "react";
//


  const ClassEventHeader = styled.h1`
  font-size: 64px;
  padding: 30px;
  text-align: center;
  color: blue;
`;
  const StyledWrapper = styled.section`
  background-color: Pink;
`;
  function Header() {

    return (
      <React.Fragment>

        <StyledWrapper>

          <ClassEventHeader>
            Class Collective Events
          </ClassEventHeader>

        </StyledWrapper>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
</React.Fragment>

       


    );
  };

  export default Header;