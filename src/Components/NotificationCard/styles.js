import styled from "styled-components";

export const StyledNotificationCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  border: 1px solid #ddd;
  padding: 15px 8px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  box-shadow: var(--box-shadow);
  transition: transform 200ms, box-shadow 200ms;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.2);
  }

  .icono {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-1);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: white;

    svg {
      width: 25px;
      height: 25px;
      margin: 0;
    }
  }

  .div-click {
    text-decoration: none;
    color: #444;
  }

  .link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .texto {
    color: #444;
    margin-left: 15px;
    font-size: 14px;

    .user-name {
      color: black;
      font-weight: bold;
    }
  }

  button.delete {
    margin-left: auto;
    width: 50px;
    height: 50px;
    color: black;
    font-weight: bold;
    z-index: 1;
  }
`;
