import styled from "styled-components";

export const StyledMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;

  a {
    color: #eee;
    font-weight: bold;
    margin: 0 4px;
  }
`;

export const Div = styled.div`
  display: flex;
`;
export const Nose = styled.div`
  background-color: black;
`;

export const Welcome = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 1000px;
  text-align: center;
  .post {
    margin: 20px 0;
  }

  @media (max-width: 860px) {
    max-width: 900px;
  }

  .visor {
    width: 100%;
    text-align: center;
    margin-top: 25px;
    color: #eee;
    font-size: 20px;
  }
`;
