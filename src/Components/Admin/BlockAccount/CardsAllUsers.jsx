import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { tokenUsuario } from "../../../actions/actionTypes";
import { StyledCardSuggestions } from "../../Suggestions/StyledCardSuggestion";

const CardAllUsers = ({ users }) => {
  // const dispatch = useDispatch()
  const [button, setButton] = useState(false);
  const [reports, setReports] = useState(true);
  const locked = { iduser: users.id };
  async function lockedUnlocked(e) {
    e.preventDefault();
    try {
      if (users.state === true) {
        await axios.put(
          `${process.env.REACT_APP_PUERTO}usuarios/locked`,
          locked,
          tokenUsuario()
        );
        button === true ? setButton(false) : setButton(true);
      } else {
        await axios.put(
          `${process.env.REACT_APP_PUERTO}usuarios/locked`,
          locked,
          tokenUsuario()
        );
        button === false ? setButton(true) : setButton(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteReports(e) {
    e.preventDefault();
    try {
      await axios.delete(
        `${process.env.REACT_APP_PUERTO}reportes/${users.id}`,
        tokenUsuario()
      );
      setReports(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <StyledCardSuggestions className="card">
      <img
        className="card__image"
        src={
          users.profile.includes("http")
            ? users.profile
            : process.env.REACT_APP_PUERTO + users.profile
        }
        alt={users.fullname}
      />

      <h3 className="card__name">
        <Link to={`/profile/${users.id}`} className="Link">
          {users.fullname}
          <span className="card__span-link"></span>
        </Link>
      </h3>
      <p className="card__email">{users.email}</p>
      {reports ? (
        <div className="card__container-btn">
          {button === users.state ? (
            <button className="card__btn" onClick={lockedUnlocked}>
              desbloquear
            </button>
          ) : (
            <button className="card__btn" onClick={lockedUnlocked}>
              Suspender
            </button>
          )}

          <button className="card__btn secondary" onClick={deleteReports}>
            Descartar
          </button>
        </div>
      ) : (
        <p className="reporte">Reporte eliminado</p>
      )}
    </StyledCardSuggestions>
  );
};

export default CardAllUsers;
