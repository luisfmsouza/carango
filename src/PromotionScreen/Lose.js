import React from "react";

import Header from "../components/Header";

import { Page, Main, Column, Title, Paragraph } from "./styled";

export default () => {
  return (
    <Page>
      <Header />
      <Main>
        <Column>
          <Title>Better luck next time!</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat
            eros, finibus ac ullamcorper sit amet, tempus quis lacus. Quisque
            eleifend semper pretium.
          </Paragraph>
        </Column>
      </Main>
    </Page>
  );
};
