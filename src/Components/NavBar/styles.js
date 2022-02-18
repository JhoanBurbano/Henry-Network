import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - (100vw - 100%));
  border-bottom: 5px solid var(--yellow-1);
  background-color: #1d1d1d;
  color: #eee;
  padding: 20px 80px;
  position: relative;
  z-index: 2;

  .div-1 {
    display: flex;
    flex: 1;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;
    }

    form {
      margin: 0 auto;
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  .app-title {
    letter-spacing: 1.5px;
    font-weight: bold;
    font-size: 15px;
  }

  .logo {
    width: 25px;
    height: 25px;
    margin-left: 5px;
  }

  .botones {
    display: flex;
    justify-content: space-around;
    width: 150px;

    .open {
      position: relative;
      z-index: 1;
    }

    & > * {
      position: relative;

      .nav-hover {
        position: absolute;
        background-color: var(--yellow-1);
        color: var(--grey-1);
        font-weight: 500;
        top: 120%;
        left: 50%;
        font-size: 13px;
        transform: translateX(-50%);
        opacity: 0;
        padding: 4px 8px;
        border-radius: 3px;
        visibility: hidden;
        transition: opacity 0.5s;
      }
      &:hover {
        .nav-hover {
          opacity: 1;
          visibility: visible;
        }
      }
    }
    .nav-hover:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-bottom-color: var(--yellow-1);
      position: absolute;
      bottom: 80%;
      left: 50%;
      transform: translatex(-50%);
    }
    button {
      /* margin-left:30px; */
      background-color: transparent;
      border: none;
      color: #eee;
      cursor: pointer;
    }
    .link {
      text-decoration: none;
      color: #eee;
    }
  }

  @media (max-width: 800px) {
    padding: 20px 40px;
  }

  @media screen and (max-width: 700px) {
    .title-text {
      display: none;
    }

    .nav-hover {
      display: none;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
    padding: 20px 20px;

    .div-1 {
      margin-bottom: 20px;

      img {
        margin-right: 20px;
        width: 35px;
        height: 35px;
      }
    }
  }

  .bell {
    position: relative;
    background-color: red;
  }
  .bell::after {
    content: "";
    width: 1.2ch;
    height: 1.2ch;
    position: absolute;
    background: red;
    top: 0;
    left: 0.3ch;
    border-radius: 50%;
  }
`;
