import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const StyledCardSuggestions = styled.article`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  background-color: var(--grey-9);
  padding: 15px;
  border-radius: 7px;
  box-shadow: var(--box-shadow);
  position: relative;
  text-align: center;
  transition: box-shadow 200ms, transform 200ms;

  &:hover,
  &:focus-within {
    box-shadow: var(--box-shadow-hover);
    transform: translateY(-5px);
  }

  .card__image {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }

  svg.card__image {
    color: #999;
  }

  .card__name {
    margin-top: 10px;

    a {
      text-decoration: none;
      color: var(--grey-1);
    }
  }

  .card__email {
    font-size: 14px;
    font-weight: 500;
    color: #666;
    word-break: break-word;
  }

  .card__container-btn {
    display: flex;

    & button:last-child {
      margin-left: 10px;
    }
  }

  .card__btn {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--yellow-1);
    border: none;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    z-index: 1;
    transition: background-color 300ms, color 300ms;

    &:hover {
      background-color: black;
      color: var(--yellow-1);
    }

    svg {
      margin-right: 7px;
    }

    &.secondary {
      background-color: transparent;

      &:hover {
        background-color: #ccc;
        color: black;
      }
    }
  }

  .card__follow {
    margin-top: 30px;
    font-weight: 500;
    color: var(--grey-1);

    span {
      font-weight: 600;
    }
  }

  .card__span-link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .loading {
    animation: ${spin} 2s linear infinite;
  }

  .reporte {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
  }
`;
