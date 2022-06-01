import React from "react";
import styled from "styled-components";

const StyledScoreboard = styled.input`
  position: relative;
  max-width: 100%;
  margin-bottom: 55px;
  outline: none;
  font-size: 56px;
  line-height: 80px;
  text-align: right;
  &:after {
    content: "";
    position: absolute;
    top: 105px;
    left: 0;
    height: 0.5px;
    width: 100vw;
    background-color: red;
    z-index: 1;
  }
`;

// eslint-disable-next-line react/function-component-definition
const Scoreboard: React.FC = () => {
  return <StyledScoreboard />;
};

export default Scoreboard;
