import styled from "styled-components";

export const DivCardProfile = styled.div`
  background-color: var(--grey-5);
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 1200px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 7px;
  position: relative;
`;

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  grid-column-gap: 200px;
  position: absolute;
  width: 100%;
`;

const ModalDiv = styled.div`
  display: ${(p) => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;
const ContentDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: auto;
  padding: 2rem;
  transform: translate(-50%, -50%);
  background: white;
`;

export const StyledModal = ({ handleClose, show, children }) => {
  return (
    <ModalDiv block={show ? "block" : "none"}>
      <ContentDiv>
        {children}
        <button onClick={handleClose}>Close</button>
      </ContentDiv>
    </ModalDiv>
  );
};

export const Card = styled.div`
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
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 15px;
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
`;

export const Button = styled.div`
  .follow {
    background-color: yellow;
    border: 2px solid white;
    width: 80px;
    height: 25px;
    border-radius: 5px;
  }
  .unfollow {
    background-color: white;
    color: black;
    border: 2px solid white;
    width: 80px;
    height: 25px;
    border-radius: 5px;
  }
`;

export const BtnModal = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivInfo = styled.div`
  position: absolute;
  top: 60%;
  left: 5%;
  text-align: center;
  width: 300px;

  .card__image {
    width: 200px;
    height: 200px;
    border: 5px solid #eee;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
  }

  .card__fullname {
    color: #eee;
    margin-bottom: 10px;
    font-size: 30px;
  }

  .card__email {
    font-size: 16px;
    font-weight: 500;
    color: #ccc;
    word-break: break-word;
    margin-bottom: 10px;
  }

  .card__cohorte {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: fit-content;
    background-color: var(--grey-4);
    color: #eee;
    padding: 5px 15px;
    border-radius: 30px;

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 650px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const DivFollows = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: right;
  margin-top: 40px;
  margin-bottom: 100px;

  .card__center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    justify-content: center;
    margin-left: auto;
  }

  .card__show {
    button {
      background-color: transparent;
      border: none;
      padding: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      color: #eee;

      &:first-child {
        margin-right: 15px;
      }
    }
    span {
      display: block;
      font-size: 14px;
      color: #ccc;
    }
  }

  .card__btn-follow {
    width: 150px;
    padding: 8px 16px;
    background-color: var(--yellow-1);
    border: none;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 300ms, color 300ms;

    &:hover {
      background-color: black;
      color: var(--yellow-1);
    }
  }

  .card__select {
    padding: 8px;
    border-radius: 5px;
    font-weight: 500;
    outline: none;
    transition: box-shadow 0.3s ease;
    border: none;
    width: 180px;
    margin-top: 20px;
    &:focus {
      box-shadow: 0 0 0 3px var(--yellow-1);
    }
  }

  @media (max-width: 650px) {
    text-align: center;
    margin: 200px auto 50px;

    .card__center {
      margin: 0 auto;
    }
  }
`;

export const Description = styled.section`
  width: 100%;
  max-width: 1000px;
  background-color: var(--grey-4);
  padding: 20px;
  border-radius: 7px;
  color: #eee;
  margin-bottom: 50px;

  h2 {
    letter-spacing: 0.5px;
    width: fit-content;
    position: relative;
    margin-bottom: 25px;

    &::after {
      content: "";
      position: absolute;
      background-color: var(--yellow-1);
      width: 50px;
      height: 7px;
      display: block;
      margin-top: 9px;
    }
  }

  p {
    line-height: 1.5;
  }
`;

export const StyledOverflow = styled.div`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

export const StyledLikes = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-9);
  width: 100%;
  max-width: 500px;
  height: 360px;
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
