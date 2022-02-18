import { Link } from "react-router-dom";
import { StyledLikes, StyledOverflow } from "./styledCardProfile";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export function ModalFollow({ followUser, setShow, title }) {
  const handleClose = () => setShow(false);
  const overlay = useRef();
  const event = (e) => {
    if (e.key === "Escape") {
      setShow(false);
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
      setShow(false);
    }
  };

  const myId = useSelector((state) => state.myId);

  return (
    <StyledOverflow ref={overlay} onClick={handleOverlayClick}>
      <StyledLikes>
        <h3 className="layout__title">{title}</h3>
        {followUser?.map((p) => {
          return (
            <div key={p.id} className="likes__div">
              <Link
                to={`/${myId.id === p.id ? "myprofile" : `profile/${p.id}`}`}
                className="likes__link"
              >
                <span className="likes__span" />
                <img
                  src={
                    p.profile?.includes("http")
                      ? p.profile.replace(/\\/g, "/")
                      : process.env.REACT_APP_PUERTO +
                        p.profile.replace(/\\/g, "/")
                  }
                  alt={p.fullname.split(" ")[0]}
                />
                <p>{p.fullname}</p>
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
