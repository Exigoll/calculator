import React from "react";
import styled from "styled-components";
import Button, { ButtonType } from "./Button";
import Calc, { CalcInput, InputType, OperatorType } from "../modules/calc";

const Container = styled.div`
  max-width: 554px;
  padding: 16px 47px 45px 47px;
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
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 16px;
  justify-items: center;
`;

const SmallDisplay = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  grid-column-end: span 4;
  width: 100%;
  height: 50px;
  outline: none;
  font-size: 24px;
  line-height: 32px;
`;

const Display = styled.div`
  position: relative;
  grid-column-end: span 4;
  width: 100%;
  height: 76px;
  margin-bottom: 30px;
  outline: none;
  font-size: 56px;
  line-height: 80px;
  text-align: right;

  &:after {
    content: "";
    position: absolute;
    top: 105px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.35);
    z-index: 1;
  }
`;

const Calculator: React.FC<{}> = () => {
  const [inputs, setInputs] = React.useState<Array<CalcInput>>([]);
  const state = Calc.getState(inputs);

  const appendInput = (input: CalcInput): void => {
    setInputs((prev) => [...prev, input]);
  };

  const handleAllClear = () => setInputs([]);

  const handleBack = () => setInputs((prev) => prev.slice(0, -1));

  const handNumerical = (value: number) => () => {
    appendInput({ type: InputType.Numerical, value });
  };

  const handleOperator = (operator: OperatorType) => () => {
    appendInput({ type: InputType.Operator, operator });
  };

  return (
    <Container>
      <Menu>
        <SmallDisplay>300+300+299+1</SmallDisplay>
        <Display>{state.displayValue}</Display>
        <Button label="C" position={[0, 2]} onClick={handleAllClear} />
        <Button label="√" position={[1, 2]} />
        <Button label="%" position={[2, 2]} />
        <Button label="÷" position={[3, 2]} />
        <Button label="⇐" position={[0, 3]} width={2} onClick={handleBack} />
        <Button label="(" position={[2, 3]} />
        <Button label=")" position={[3, 3]} />
        <Button label="×" position={[3, 4]} />
        <Button
          label="-"
          position={[3, 5]}
          onClick={handleOperator(OperatorType.Subtract)}
        />
        <Button
          label="+"
          position={[3, 6]}
          onClick={handleOperator(OperatorType.Add)}
        />
        <Button label="," position={[2, 7]} />
        <Button
          buttonType={ButtonType.Total}
          label="="
          position={[3, 7]}
          onClick={handleOperator(OperatorType.Equals)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="9"
          position={[2, 4]}
          onClick={handNumerical(9)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="8"
          position={[1, 4]}
          onClick={handNumerical(8)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="7"
          position={[0, 4]}
          onClick={handNumerical(7)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="6"
          position={[2, 5]}
          onClick={handNumerical(6)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="5"
          position={[1, 5]}
          onClick={handNumerical(5)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="4"
          position={[0, 5]}
          onClick={handNumerical(4)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="3"
          position={[2, 6]}
          onClick={handNumerical(3)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="2"
          position={[1, 6]}
          onClick={handNumerical(2)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="1"
          position={[0, 6]}
          onClick={handNumerical(1)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="0"
          position={[1, 7]}
          onClick={handNumerical(0)}
        />
        <Button
          buttonType={ButtonType.Number}
          label="00"
          position={[0, 7]}
          onClick={handNumerical(0)}
        />
      </Menu>
    </Container>
  );
};

export default Calculator;
