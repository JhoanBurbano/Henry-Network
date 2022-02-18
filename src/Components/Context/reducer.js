import { io } from "socket.io-client";

export const reducer = (state, action) => {
  switch (action.type) {
    case "CONECT":
      return {
        ...state,
        socket: io(`${process.env.REACT_APP_PUERTO}`),
      };
    default:
      return state;
  }
};
