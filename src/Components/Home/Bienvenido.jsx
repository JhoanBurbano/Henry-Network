import React from "react";
import { Link } from "react-router-dom";
import { StyledMessage } from "./styles";

export default function Bienvenido() {
  return (
    <StyledMessage>
      No sigues a nadie en la red, aqui tenemos
      <Link to="/suggestions">
        <p>sugerencias</p>
      </Link>
      para ti
    </StyledMessage>
  );
}
