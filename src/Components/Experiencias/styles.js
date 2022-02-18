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

    .btn-submit,
    .tags__container {
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
    opacity: 0;
    transition: opacity 300ms, background-color 300ms, color 300ms;

    &:hover {
      transform: scale(1.03);
    }

    &:disabled {
      background-color: var(--grey-2);
      color: #999;
      cursor: not-allowed;
    }
  }

  .expanded__div {
    display: flex;
    align-items: flex-end;
  }

  .tags__container {
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 300ms;

    ul {
      list-style: none;
    }
  }

  .tags__label {
    margin-right: 15px;
    font-size: 14px;
    font-weight: 500;
    color: #eee;
  }

  .tags__select {
    padding: 8px;
    border-radius: 5px;
    font-weight: 500;
    outline: none;
    transition: box-shadow 0.3s ease;
    border: none;
    width: 180px;
    margin-right: 15px;

    &:focus {
      box-shadow: 0 0 0 3px var(--yellow-1);
    }
  }

  .tags__btn {
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 100px;
    border: 2px solid transparent;
    background-color: var(--grey-4);
    color: #eee;
    font-weight: 500;
    cursor: pointer;
    transition: border 300ms color 300ms;

    &:hover {
      border: 2px solid var(--yellow-1);

      svg {
        color: var(--yellow-1);
      }
    }

    svg {
      margin-left: 5px;
      width: 10px;
      height: 10px;
      color: #999;
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

    .btn-submit {
      margin-left: 0;
      margin-top: 10px;
    }
  }

  @media (max-width: 490px) {
    &.expanded {
      height: 240px;
    }
  }
`;

export const StyledDiv = styled.div`
  margin-top: 50px;
  width: 100%;

  .tags__label {
    margin-right: 15px;
    font-size: 14px;
    font-weight: 500;
    color: #eee;
  }

  .tags__select {
    padding: 8px;
    border-radius: 5px;
    font-weight: 500;
    outline: none;
    transition: box-shadow 0.3s ease;
    border: none;
    width: 180px;
    margin-right: 15px;

    &:focus {
      box-shadow: 0 0 0 3px var(--yellow-1);
    }
  }

  .post__contain {
    margin-top: 25px;
    columns: 3;
  }

  .post__article {
    padding: 15px;
    background-color: #eee;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    margin-bottom: 15px;
    border-radius: 7px;
    word-break: break-word;
  }

  .post__section {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--grey-2);
      font-weight: 600;
      width: 100%;
    }

    p {
      margin-left: 10px;
      font-size: 18px;
    }

    svg {
      color: #eee;
      margin-left: auto;
      padding: 5px;
      background-color: var(--red-1);
      border-radius: 50%;
      min-width: 30px;
      height: 30px;
    }
  }

  .post__profile {
    border-radius: 50%;
  }

  .post__desc {
    margin: 10px 0;
  }

  .post__ul {
    list-style: none;
    color: #666;
    font-weight: 600;

    li {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
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

  @media (max-width: 800px) {
    .post__contain {
      columns: 2;
    }
  }

  @media (max-width: 550px) {
    .post__contain {
      columns: 1;
    }
  }
`;
