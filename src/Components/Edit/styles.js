import styled from "styled-components";

export const StyledEdit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .edit__profile {
    text-align: center;
    margin-bottom: 50px;
    text-transform: uppercase;
    color: var(--grey-9);
    position: relative;
    font-weight: 900;
    letter-spacing: 0.5px;

    &::after {
      content: "";
      position: absolute;
      background-color: var(--yellow-1);
      width: 50px;
      height: 10px;
      display: block;
      margin-top: 5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .edit__images {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 150px;
  }

  .edit__portada {
    max-width: 1200px;
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 7px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover,
    &:focus {
      .edit__img-portada {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 1;

        label,
        button {
          position: absolute;
          width: 100px;
          height: 100px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
        }

        label {
          opacity: 0;
          overflow: hidden;
        }

        button {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          font-weight: 500;
          border-radius: 50%;
          border: 5px solid #eee;
          background-color: black;
          color: #eee;
          opacity: 1;

          svg {
            margin-bottom: 5px;
          }
        }
      }
    }
    .edit__img-portada {
      opacity: 0;
      transition: opacity 300ms;

      button {
        opacity: 0;
        transition: opacity 300ms;
      }
    }
  }

  .edit__avatar {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 60%;
    left: 15%;
    border: 5px solid #eee;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover,
    &:focus {
      .edit__img-avatar {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
        opacity: 1;

        label,
        button {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
        }

        label {
          opacity: 0;
          overflow: hidden;
          cursor: pointer;
        }

        button {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          font-weight: 500;
          border-radius: 50%;
          border: none;
          background-color: transparent;
          color: #eee;
          opacity: 1;

          svg {
            margin-bottom: 5px;
          }
        }
      }
    }
    .edit__img-avatar {
      opacity: 0;
      transition: opacity 300ms;

      button {
        opacity: 0;
        transition: opacity 300ms;
      }
    }
  }

  .edit__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grey-3);
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    border-radius: 7px;
    padding: 30px;
  }

  .edit__row {
    margin-bottom: 40px;

    label:first-child {
      margin-right: 50px;
    }
  }

  input,
  textarea,
  select {
    margin-top: 15px;
    padding: 12px;
    border-radius: 4px;
    border: 2px solid transparent;
    font-weight: 500;
    color: #eee;
    background-color: var(--grey-5);
    outline: none;
    transition: border-color 300ms;

    &:focus {
      border: 2px solid var(--yellow-1);
    }
  }

  label {
    display: inline-flex;
    flex-direction: column;
    color: #eee;
    font-weight: 600;
    font-size: 14px;
    width: 300px;
  }

  .edit__description {
    width: 100%;
    max-width: 650px;
    margin-bottom: 40px;

    textarea {
      min-height: 100px;
      resize: none;
    }
  }

  .edit__btn {
    display: flex;
    align-items: center;
    padding: 10px 35px;
    background-color: #eee;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 300ms, color 300ms;

    svg {
      margin-right: 12px;
    }

    &:hover {
      background-color: var(--yellow-1);
    }
  }
`;
