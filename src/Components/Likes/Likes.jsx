import { Link } from "react-router-dom";
import { StyledLikes, StyledOverflow } from "./styles";
import Experience from "../Icons/Experience";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function Likes({ setShowLikes, p }) {
  const handleClose = () => setShowLikes(false);
  const overlay = useRef();
  const event = (e) => {
    if (e.key === "Escape") {
      setShowLikes(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", event);
    return () => {
      window.removeEventListener("keydown", event);
    };
  });

  const handleOverlayClick = (e) => {
    if (e.target === overlay.current) {
      setShowLikes(false);
    }
  };

  const myId = useSelector((state) => state.myId);

  return (
    <StyledOverflow ref={overlay} onClick={handleOverlayClick}>
      <StyledLikes>
        <h3 className="layout__title">Marcado como me gusta por:</h3>
        {p?.likes?.map((p) => {
          return (
            <div key={p.id} className="likes__div">
              <Link
                to={`/${myId.id === p.id ? "myprofile" : `profile/${p.id}`}`}
                className="likes__link"
              >
                <span className="likes__span" />
                <img src={p.profile.includes('http')?p.profile:`${process.env.REACT_APP_PUERTO}${p.profile}`} alt={p.fullname.split(" ")[0]} />
                <p>{p.fullname}</p>
                <Experience />
              </Link>
            </div>
          );
        })}
        <button className="likes__btn" onClick={handleClose}>
          X
        </button>
      </StyledLikes>
    </StyledOverflow>
  );
}
