import React from "react";
import { useReducer } from "react";
import { reducer } from "./reducer";
import { SocketContext } from "./SocketContext";

const State = {
  socket: {},
};

function SocketPrivider({ children }) {
  const [state] = useReducer(reducer, State);

  /* const conexion = ()=>{
        dispatch({type:'CONECT'});
    } */

  return (
    <SocketContext.Provider value={state}> {children} </SocketContext.Provider>
  );
}

export default SocketPrivider;
