import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    border: 0;
  }

  input,
  select {
    padding: 8px 20px 8px 12px;
    border-radius: 7px;
    border: none;
    margin-right: 10px;

    &:focus {
      outline: 3px solid var(--yellow-1);
    }
  }

  .form__btn {
    padding: 8px 20px;
    border: none;
    border-radius: 7px;
    background-color: black;
    color: white;
    margin-top: 15px;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 300ms;

    &:hover {
      background-color: var(--blue-1);
    }
  }
`;

export const Card = styled.article`
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: var(--grey-9);
  padding: 15px;
  border-radius: 7px;
  box-shadow: var(--box-shadow);
  text-align: center;

  p:first-child {
    font-size: 18px;
    font-weight: 600;
    word-break: break-word;
    margin-bottom: 10px;
  }

  p:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: var(--blue-2);
    border-radius: 100px;
    width: fit-content;
    margin: 0 auto;
    margin-top: 10px;
    color: var(--blue-1);
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: auto;

    svg {
      margin-right: 5px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;

  article {
    margin: 10px;
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
