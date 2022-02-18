import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid var(--grey-1);
  border-top-color: var(--yellow-1);
  border-right-color: var(--yellow-1);
  animation: ${spin} 2s ease infinite;
  border-radius: 50%;
  margin-top: 100px;
`;
