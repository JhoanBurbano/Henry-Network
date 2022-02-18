import styled from "styled-components";

export const StyledOverflow = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const StyledLikes = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-9);
  width: 100%;
  max-width: 500px;
  height: 350px;
  margin: auto;
  padding: 25px;
  overflow-y: auto;
  border-radius: 7px;
  position: relative;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.3);

  h3 {
    color: black;
    text-align: center;

    &::after {
      background-color: var(--red-1);
    }
  }

  .likes__div {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 7px;
    width: 100%;
    transition: box-shadow 200ms;
    margin-bottom: 15px;
    position: relative;

    &:hover {
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.3);
    }

    svg {
      margin-left: auto;
      padding: 5px;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      background-color: var(--red-1);
      color: white;
    }
  }

  .likes__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    flex: 1;
    font-weight: 500;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 30px;
    }
  }

  .likes__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
    width: 50px;
    height: 50px;
    border-radius: 0 0 0 7px;
    border: none;
    background-color: var(--red-1);
    font-size: 20px;
    font-weight: bold;
    color: #eee;
    cursor: pointer;
    transition: filter 300ms;

    &:hover {
      filter: brightness(1.3);
    }
  }

  .likes__span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
