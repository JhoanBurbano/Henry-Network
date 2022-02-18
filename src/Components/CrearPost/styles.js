import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 95px;
  /* overflow: hidden; */
  border-radius: 7px;
  max-width: 600px;
  padding: 15px;
  background-color: var(--grey-3);
  position: relative;
  transition: height 300ms;
  transition-delay: 150ms;

  &.expanded {
    height: 140px;
    transition-delay: 0ms;

    .btn-submit {
      /* display: inline-block; */
      opacity: 1;
      transition-delay: 100ms;
    }
  }

  .img-post {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    .user-img {
      margin-right: 15px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    .textarea {
      min-height: 60px;
      width: 100%;
      border: 1px solid transparent;
      background-color: var(--grey-4);
      border-radius: 7px;
      font-size: 14px;
      color: #ccc;
      padding: 10px 50px 10px 10px;
      resize: none;
      transition: box-shadow 300ms, border 300ms;

      &:focus {
        outline: none;
        box-shadow: var(--box-shadow);
        border: 1px solid var(--grey-2);
      }
    }
  }

  .file-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: background-color 300ms;

    .input-file {
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      pointer-events: none;
      background-color: transparent;
      border: none;
      color: var(--blue-1);
    }
    &:hover {
      background-color: var(--blue-2-50);
    }
  }

  .btn-submit {
    margin-left: auto;
    background-color: transparent;
    border: none;
    color: white;
    font-weight: 600;
    background-color: var(--blue-1);
    padding: 8px 10px;
    border-radius: 15px;
    cursor: pointer;
    transition: transform 300ms;
    /* display: none; */
    opacity: 0;
    transition: opacity 300ms;

    &:hover {
      transform: scale(1.03);
    }
  }

  .img-preview {
    display: flex;
    flex-wrap: wrap;
    margin-right: auto;
    width: 100%;

    .img-preview-div {
      position: relative;
      width: 70px;
      height: 40px;
      margin-bottom: 5px;

      &:not(:last-child) {
        margin-right: 15px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .expanded__div {
    display: flex;
    align-items: flex-end;
  }

  .btn__delete {
    position: absolute;
    top: -10px;
    right: -10px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: none;
    background-color: var(--red-1);
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: filter 300ms;

    &:hover {
      filter: brightness(1.4);
    }
  }

  @media (max-width: 595px) {
    &.expanded {
      height: 190px;
    }

    .expanded__div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .img-preview {
      align-items: center;
      justify-content: center;
    }

    .btn-submit {
      margin-left: 0;
      margin-top: 10px;
    }
  }

  @media (max-width: 490px) {
    &.expanded {
      height: 240px;
    }

    .img-preview-div {
      margin: 5px;

      &:not(:last-child) {
        margin-right: 5px !important;
      }
    }
  }
`;
