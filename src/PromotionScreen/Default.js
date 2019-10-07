import React from "react";

import Form from "../components/Form";
import Header from "../components/Header";

import { Page, Main, Column, Title, Paragraph } from "./styled";

export default ({
  formState,
  shouldBlockFormSubmission,
  handleInputChange,
  handleInputBlur,
  handleSubmit
}) => {
  return (
    <Page>
      <Header />
      <Main>
        <Column>
          <Title>Get a free year of driving!</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat
            eros, finibus ac ullamcorper sit amet, tempus quis lacus. Quisque
            eleifend semper pretium. Sed rutrum odio lectus, id maximus nunc
            rhoncus sed. Praesent quis suscipit dui. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer orci dui, rutrum eu feugiat
            lobortis, tristique sollicitudin est. Nulla tincidunt semper nibh at
            pulvinar. Etiam tempor quam vitae neque ornare efficitur. Morbi id
            egestas est, at viverra orci. Fusce eleifend placerat ligula, eget
            viverra lectus facilisis vitae. Praesent placerat tortor a mi
            laoreet, quis lobortis nunc eleifend.
          </Paragraph>
        </Column>

        <Column>
          <Title>Get a car leasing offer</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat
            eros, finibus ac ullamcorper sit amet, tempus quis lacus.
          </Paragraph>
          <Form
            formState={formState}
            shouldBlockFormSubmission={shouldBlockFormSubmission}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
            handleSubmit={handleSubmit}
          />
        </Column>
      </Main>
    </Page>
  );
};
