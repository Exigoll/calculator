import React from "react";
import styled from "styled-components";

import "./scss/app.scss";

import Calculator from "./components/Calculator";

const Container = styled.div`
  max-width: 616px;
  margin: 20px auto;
  padding: 40px 0;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 18px;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
