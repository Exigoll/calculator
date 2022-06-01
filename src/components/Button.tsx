import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
};

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 36px;
  line-height: 88px;
  color: #f2f2f2;
  border-radius: 50%;
  transition: 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }

  &:active {
    transform: scale(1.1);
  }
  &:nth-child(5) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &:last-child {
    background: #fff;
    color: #2b589a;
  }
`;

// eslint-disable-next-line react/function-component-definition
const Button: React.FC<Props> = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
