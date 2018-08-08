import React, { Fragment } from "react";

import "../src/styles/global";

import Sidebar from './components/Sidebar';

import { Wrapper, Container, Content } from './styles/components';

const App = () =>  (
  <Fragment>
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <h1>Tela Inicial</h1>
        </Content>
      </Container>
    </Wrapper>
  </Fragment>
);

export default App;
