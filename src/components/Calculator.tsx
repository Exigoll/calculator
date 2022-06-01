import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Scoreboard from "./Scoreboard";

const Container = styled.div`
  max-width: 554px;
  padding: 45px 47px;
  margin: 0 auto;
  background: linear-gradient(155.23deg, #28518e 0%, #3a77d1 100%);
  box-shadow: 0 82px 158px rgba(0, 0, 0, 0.35),
    0 24.7206px 47.6324px rgba(0, 0, 0, 0.228056),
    0 10.2677px 19.7841px rgba(0, 0, 0, 0.175),
    0 3.71362px 7.1555px rgba(0, 0, 0, 0.121944);
  border-radius: 18px;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 16px;
  justify-items: center;
`;

// eslint-disable-next-line react/function-component-definition
const Calculator: React.FC<{}> = () => {
  return (
    <Container>
      <Scoreboard />
      <Menu>
        <Button label="C" />
        <Button label="√" />
        <Button label="%" />
        <Button label="÷" />
        <Button label="Cancel" />
        <Button label="(" />
        <Button label=")" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="×" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="00" />
        <Button label="0" />
        <Button label="," />
        <Button label="=" />
      </Menu>
    </Container>
  );
};

export default Calculator;
