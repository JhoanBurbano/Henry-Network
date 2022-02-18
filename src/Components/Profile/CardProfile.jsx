import axios from "axios";
import { ModalFollow } from "./ModalFollow";
import {
  Description,
  DivCardProfile,
  DivFollows,
  DivInfo,
} from "./styledCardProfile";
import { useDispatch } from "react-redux";
import {
  clearMyFollowsState,
  clearMyProfile,
  clearStateFollowsUser,
  getFollowUserById,
} from "../../actions";
import { tokenUsuario } from "../../actions/actionTypes";
import { useState } from "react";
import Cohorte from "../Icons/Cohorte";

const CardProfile = ({ profile, followUser, myId }) => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowings] = useState(false);

  console.log(showFollowers);
  console.log(showFollowing);

  const isFollowing = followUser?.followers
    ?.map((e) => e.id)
    .includes(myId?.id);
  const dispatch = useDispatch();
  const idToFollow = { followMe: profile.id };

  async function followUnFollow(e) {
    e.preventDefault();
    try {
      dispatch(clearMyProfile());
      await axios.put(
        `${process.env.REACT_APP_PUERTO}usuarios/follow/`,
        idToFollow,
        tokenUsuario()
      );
      dispatch(clearStateFollowsUser());
      dispatch(getFollowUserById(profile.id));
      dispatch(clearMyFollowsState());
    } catch (err) {
      console.log(err);
    }
  }

  async function handleChange(e) {
    if (e.target.value === "por malas palabras") {
      e.preventDefault();
      if (
        window.confirm("reportar a " + profile.fullname + " " + e.target.value)
      ) {
        try {
          await axios.put(
            `${process.env.REACT_APP_PUERTO}posts/notification`,
            { idUser: profile.id, message: e.target.value },
            tokenUsuario()
          );
          alert("reportaste a " + profile.fullname + " " + e.target.value);
        } catch (err) {
          console.log(err);
        }
      } else {
        return false;
      }
    }
    if (e.target.value === "por acoso") {
      e.preventDefault();
      if (
        window.confirm("reportar a " + profile.fullname + " " + e.target.value)
      ) {
        try {
          await axios.put(
            `${process.env.REACT_APP_PUERTO}posts/notification`,
            { idUser: profile.id, message: e.target.value },
            tokenUsuario()
          );
          alert("reportaste a " + profile.fullname + " " + e.target.value);
        } catch (err) {
          console.log(err);
        }
      } else {
        return false;
      }
    }
    if (e.target.value === "por contenido inapropiado") {
      e.preventDefault();
      if (
        window.confirm("reportar a " + profile.fullname + " " + e.target.value)
      ) {
        try {
          await axios.put(
            `${process.env.REACT_APP_PUERTO}posts/notification`,
            { idUser: profile.id, message: e.target.value },
            tokenUsuario()
          );
          alert("reportaste a " + profile.fullname + " " + e.target.value);
        } catch (err) {
          console.log(err);
        }
      } else {
        return false;
      }
    }
  }

  const previewP = profile.background_picture.includes("uploads");

  return (
    <>
      <DivCardProfile
        bg={
          previewP
            ? `${process.env.REACT_APP_PUERTO}${profile.background_picture}`
            : profile.background_picture
        }
      >
        <DivInfo>
          <img
            className="card__image"
            src={
              profile.profile?.includes("http")
                ? profile.profile
                : process.env.REACT_APP_PUERTO + profile.profile
            }
            alt={profile.fullname}
          />
          <h2 className="card__fullname">{profile.fullname}</h2>
          <p className="card__email">{profile.email}</p>
          <p className="card__cohorte">
            <Cohorte />
            {profile.cohorte?.[0]}
          </p>
        </DivInfo>
      </DivCardProfile>
      <DivFollows>
        <div className="card__center">
          <div className="card__show">
            <button onClick={() => setShowFollowers(!showFollowers)}>
              {followUser.followers?.length}
              <span>
                {followUser.followers?.length === 1
                  ? " Seguidor"
                  : " Seguidores"}
              </span>
            </button>
            <button onClick={() => setShowFollowings(!showFollowing)}>
              {followUser.follows?.length} <span>Siguiendo</span>
            </button>
          </div>
          <button onClick={followUnFollow} className="card__btn-follow">
            {isFollowing ? "Dejar de seguir" : "Seguir"}
          </button>
          <select className="card__select" onChange={handleChange}>
            <option>Reportar</option>
            <option value="por malas palabras">Por malas palabras</option>
            <option value="por acoso">Por acoso</option>
            <option value="por contenido inapropiado">
              Por contenido inapropiado
            </option>
          </select>
        </div>
        {followUser.follows ? (
          <>
            {showFollowers && (
              <ModalFollow
                setShow={setShowFollowers}
                followUser={followUser.followers}
                title="Seguidores"
              />
            )}
            {showFollowing && (
              <ModalFollow
                setShow={setShowFollowings}
                followUser={followUser.follows}
                title="Siguiendo"
              />
            )}
          </>
        ) : (
          <p>Cargando</p>
        )}
      </DivFollows>
      {profile.description && (
        <Description>
          <h2>Descripción</h2>
          <p>{profile.description}</p>
        </Description>
      )}
    </>
  );
};

export default CardProfile;
