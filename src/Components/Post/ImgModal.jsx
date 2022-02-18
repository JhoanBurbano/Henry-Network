import { useEffect, useRef } from "react";
import { StyledOverflow } from "./styles";

export default function ImgModal({ img, handleCloseModal }) {
  console.log(img);
  const overlay = useRef();
  const event = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
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
      handleCloseModal();
    }
  };
  return (
    <StyledOverflow ref={overlay} onClick={handleOverlayClick}>
      <div className="div__img">
        <img src={process.env.REACT_APP_PUERTO + img} alt="" />
        <button className="btn__close" onClick={handleCloseModal}>
          X
        </button>
      </div>
    </StyledOverflow>
  );
}
