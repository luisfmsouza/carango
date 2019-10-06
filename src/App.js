import React from "react";

import Header from "./components/Header";
import Form from "./components/Form";

import styled from "styled-components";
import colors from "./theme/colors";

const Page = styled.div`
  background-color: ${colors.blue10};
`;

const Main = styled.div`
  background-color: ${colors.blue10};
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 35px;
  padding: 60px 25px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Column = styled.section``;

const Title = styled.h1`
  color: ${colors.blue20};
  font-family: LeasePlan, Arial, Helvetica, sans-serif;
  font-size: 36px;
  line-height: 1.2;
  margin: 22px 0;
`;

const Paragraph = styled.p`
  color: ${colors.grey20};
  font-family: LeasePlan, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export default () => (
  <Page>
    <Header />
    <Main>
      <Column>
        <Title>Get a free year of driving!</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat eros,
          finibus ac ullamcorper sit amet, tempus quis lacus. Quisque eleifend
          semper pretium. Sed rutrum odio lectus, id maximus nunc rhoncus sed.
          Praesent quis suscipit dui. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer orci dui, rutrum eu feugiat lobortis,
          tristique sollicitudin est. Nulla tincidunt semper nibh at pulvinar.
          Etiam tempor quam vitae neque ornare efficitur. Morbi id egestas est,
          at viverra orci. Fusce eleifend placerat ligula, eget viverra lectus
          facilisis vitae. Praesent placerat tortor a mi laoreet, quis lobortis
          nunc eleifend.
        </Paragraph>
      </Column>

      <Column>
        <Title>Get a car leasing offer</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat eros,
          finibus ac ullamcorper sit amet, tempus quis lacus.
        </Paragraph>
        <Form />
      </Column>
    </Main>
  </Page>
);
