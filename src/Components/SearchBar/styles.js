import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  border: none;
  background-color: white;
  padding: 0 16px 0 5px;
  margin: 0 10px;
  position: relative;

  input {
    font-size: 16px;
    color: #000;
    outline: none;
    border: none;
    border-radius: 15px;
    background-color: transparent;
    width: 100%;
    max-width: 300px;
    z-index: 1;
  }
  button {
    margin-left: 5px;
    border-radius: 5px;
    border: none;
    background-color: transparent;
    padding: 5px;
    color: #777;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .datalist {
    background-color: var(--grey-9);
    position: absolute;
    top: 140%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 10px;
    max-height: 200px;
    overflow-y: auto;
    border-radius: 7px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.3);
    z-index: 1;

    .name {
      padding: 10px;
      background-color: transparent;
      margin: 3px 0;
      width: 90vw;
      max-width: 300px;
      display: flex;
      align-items: center;
      border-radius: 7px;
      transition: background-color 250ms, box-shadow 250ms;
      position: relative;

      a {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-decoration: none;
        color: black;
        font-weight: 600;
      }

      .user-img {
        border-radius: 50%;
        margin-right: 15px;
        width: 35px;
        height: 35px;
      }

      &:hover {
        background-color: white;
        box-shadow: var(--box-shadow);
      }

      .email {
        font-weight: 500;
        font-size: 13px;
        color: #666;
      }

      .span-link {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }

  .overlay-searchBar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
