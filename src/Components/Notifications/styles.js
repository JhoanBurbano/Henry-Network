import styled from "styled-components";

export const StyledOverflow = styled.div`
  position: fixed;
  display: flex;
  background-color: transparent;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const StyledNotifications = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-84.1%);
  /* z-index: 1; */

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: var(--grey-9);
    position: absolute;
    bottom: 99.5%;
    left: 81.7%;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: 350px;
    border-radius: 7px;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.3);
    background-color: var(--grey-9);
    padding: 10px 10px 15px 10px;
    overflow-y: auto;

    .titulo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: black;
      font-family: "Montserrat", sans-serif;
      text-align: left;
      width: 100%;
      padding: 12px 5px;

      .btn {
        background-color: transparent;
        border: none;
        color: var(--blue-1);
        font-weight: 600;
        background-color: transparent;
        padding: 8px 10px;
        border-radius: 15px;
        transition: background-color 300ms;

        &:hover {
          background-color: var(--blue-2);
        }
      }
    }

    .empty {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ddd;
      width: 100%;
      padding: 10px;
      border-radius: 7px;
      color: var(--grey-3);
      font-weight: 500;
      font-family: inherit;

      svg {
        margin-right: 5px;
        color: #999;
      }
    }
  }

  @media (max-width: 550px) {
    transform: translateX(-50%);

    &::after {
      left: 47.7%;
    }

    .container {
      width: 80vw;
    }
  }
`;
