import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { StyledComment } from "./styles";

export default function Comments({ el }) {
  console.log(el, "coment");
  const myId = useSelector((state) => state.myPhoto);

  return (
    <StyledComment>
      <Link
        to={`/${myId.data.id === el.id ? "myprofile" : `profile/${el.id}`}`}
      >
        <img
          className="comment__avatar"
          src={
            el.profile?.includes("http")
              ? el.profile.replace(/\\/g, "/")
              : process.env.REACT_APP_PUERTO + el.profile.replace(/\\/g, "/")
          }
          alt={el.fullname.split(" ")[0]}
        />
      </Link>
      <div className="comment__text">
        <div>
          <Link
            to={`/${myId.data.id === el.id ? "myprofile" : `profile/${el.id}`}`}
          >
            <h3>{el.fullname}</h3>
          </Link>
          <p>{el.comentario}</p>
        </div>
        <p className="comment__time">{format(el.createdAt)}</p>
      </div>
    </StyledComment>
  );
}
