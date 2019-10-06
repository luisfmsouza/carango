import React from "react";
import styled from "styled-components";

import logo from "../assets/images/car-next-logo.png";
import colors from "../theme/colors";

const Header = styled.header`
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.grey10};
  height: 72px;
`;

const Logo = styled.img`
  height: 106px;
`;

export default () => (
  <Header>
    <a href="#">
      <Logo src={logo} alt="CarNext logo" title="CarNext logo" />
    </a>
  </Header>
);
