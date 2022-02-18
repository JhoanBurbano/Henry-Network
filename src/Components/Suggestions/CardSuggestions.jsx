import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { tokenUsuario } from "../../actions/actionTypes";
import { StyledCardSuggestions } from "./StyledCardSuggestion";
import Follow from "../Icons/Follow";
import { useDispatch } from "react-redux";
import { getUsers } from "../../actions";
import Loading from "../Icons/Loading";

const CardSuggestions = ({ fullname, id, profile, email }) => {
  const dispatch = useDispatch();
  const [button, setButton] = useState(false);
  const [load, setLoad] = useState(false);

  const idToFollow = { followMe: id };

  async function followUnFollow(e) {
    e.preventDefault();
    try {
      setLoad(true);
      await axios.put(
        `${process.env.REACT_APP_PUERTO}usuarios/follow/`,
        idToFollow,
        tokenUsuario()
      );
      setButton(true);
      setLoad(false);
      setTimeout(function () {
        dispatch(getUsers());
      }, 500);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  }

  return (
    <StyledCardSuggestions className="card">
      <img
        className="card__image"
        src={
          profile.includes("http")
            ? profile
            : process.env.REACT_APP_PUERTO + profile
        }
        alt={fullname}
      />

      <h3 className="card__name">
        <Link to={`/profile/${id}`} className="Link">
          {fullname}
          <span className="card__span-link"></span>
        </Link>
      </h3>
      <p className="card__email">{email}</p>
      {button === false ? (
        <button onClick={followUnFollow} className="card__btn">
          {load ? <Loading /> : <Follow />} Seguir
        </button>
      ) : (
        <p className="card__follow">
          Ahora sigues a <span>{fullname.split(" ")[0]}</span>
        </p>
      )}
    </StyledCardSuggestions>
  );
};

export default CardSuggestions;
