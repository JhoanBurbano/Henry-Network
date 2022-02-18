import React from "react";
import { Link } from "react-router-dom";
import { StyledMessage } from "./styles";

export default function NoPosts() {
  return (
    <StyledMessage>
      Aún no tenes publicaciones. ¡Animate a crear tu primer publicación
      <Link to="/home">aqui</Link>!
    </StyledMessage>
  );
}
