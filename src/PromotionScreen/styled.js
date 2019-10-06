import styled from "styled-components";

import colors from "../theme/colors";

export const Page = styled.div`
  background-color: ${colors.blue10};
`;

export const Main = styled.div`
  background-color: ${colors.blue10};
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 35px;
  padding: 60px 25px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Column = styled.section``;

export const Title = styled.h1`
  color: ${colors.blue20};
  font-family: LeasePlan, Arial, Helvetica, sans-serif;
  font-size: 36px;
  line-height: 1.2;
  margin: 22px 0;
`;

export const Paragraph = styled.p`
  color: ${colors.grey20};
  font-family: LeasePlan, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;
