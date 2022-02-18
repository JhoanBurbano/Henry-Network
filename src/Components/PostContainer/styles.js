import styled from "styled-components";

export const StyledPostContainer = styled.section`
  margin-top: 30px;
  width: 100%;
  max-width: 1000px;

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
