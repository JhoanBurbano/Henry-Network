import styled from "styled-components";

export const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .card {
    margin: 20px;
  }

  .post__error {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-1);
    padding: 20px 30px;
    border-radius: 7px;
    width: fit-content;
    margin: 0 auto;
    font-weight: 600;
    border: 3px solid var(--red-1);
    color: #bbb;

    svg {
      margin-right: 10px;
      color: var(--red-1);
    }
  }
`;
