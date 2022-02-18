import {
  Description,
  DivCardProfile,
  DivFollows,
  DivInfo,
} from "./StyledMyProfile";
import PostContainer from "../PostContainer/PostContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearMyPosts, getMyPost } from "../../actions";
import Cohorte from "../Icons/Cohorte";
import { ModalFollow } from "../Profile/ModalFollow";
import LoaderFull from "../Loader/LoaderFull";

const MyProfile = ({ myProfile }) => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowings] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPost());
    return () => {
      dispatch(clearMyPosts());
    };
  }, [dispatch]);

  const posts = useSelector((state) => state.myProfilePost);
  const follows = useSelector((state) => state.follows);
  const followers = useSelector((state) => state.followers);
  const preview = myProfile.data[0].background_picture.includes("uploads");

  let background = myProfile.data[0].background_picture.replace(/\\/g, "/");

  return (
    <>
      <DivCardProfile
        bg={
          preview ? `${process.env.REACT_APP_PUERTO}${background}` : background
        }
      >
        <DivInfo>
          <div style="
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border: 5px solid rgb(238, 238, 238);
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
">
          <img
            className="card__image"
            src={
              myProfile.data[0].profile?.includes("http")
              ? myProfile.data[0].profile
              : process.env.REACT_APP_PUERTO + myProfile.data[0].profile
            }
            alt={myProfile.data[0].fullname}
            />
            </div>
          <h2 className="card__fullname">{myProfile.data[0].fullname}</h2>
          <p className="card__email">{myProfile.data[0].email}</p>
          <p className="card__cohorte">
            <Cohorte />
            {myProfile.data[0].cohorte?.[0]}
          </p>
        </DivInfo>
      </DivCardProfile>
      <DivFollows>
        <div className="card__center">
          <div className="card__show">
            <button onClick={() => setShowFollowers(!showFollowers)}>
              {followers.data?.length}
              <span>
                {followers.data?.length === 1 ? " Seguidor" : " Seguidores"}
              </span>
            </button>
            <button onClick={() => setShowFollowings(!showFollowing)}>
              {follows.data?.length} <span>Siguiendo</span>
            </button>
          </div>
        </div>
        {follows.data ? (
          <>
            {showFollowers && (
              <ModalFollow
                title="Seguidores"
                setShow={setShowFollowers}
                followUser={followers.data}
              />
            )}
            {showFollowing && (
              <ModalFollow
                title="Seguidos"
                setShow={setShowFollowings}
                followUser={follows.data}
              />
            )}
          </>
        ) : (
          <p>Este usuario no está siguiendo a nadie</p>
        )}
      </DivFollows>
      {myProfile.data[0].description && (
        <Description>
          <h2>Descripción</h2>
          <p>{myProfile.data[0].description}</p>
        </Description>
      )}
      {/* <img
        src={
          preview
            ? `${process.env.REACT_APP_PUERTO}${myProfile.data[0].profile}`
            : myProfile.data[0].profile
        }
        alt={myProfile.data[0].fullname}
        width="250"
        height="250"
      />
      <h1>{myProfile.data[0].fullname}</h1> */}
      {/* <DivModal>
        <ModalMyFollow follow={followers} action={"Seguidores"} />
        <ModalMyFollow follow={follows} action={"Siguiendo"} />
      </DivModal> */}
      {posts?.length ? <PostContainer posts={posts} /> : <LoaderFull />}
    </>
  );
};

export default MyProfile;
