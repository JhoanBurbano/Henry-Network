import { StyledSideBar } from "./styles";
import { useEffect, useState } from "react";
import Chevron from "../Icons/Chevron";
import Red from "../Icons/Red";
import Admin from "../Icons/Admin";
import Settings from "../Icons/Settings";
import { useUserAuth } from "../Context/UserContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyPhoto } from "../../actions";

export default function SideBar() {
  const { logOut } = useUserAuth();
  const dispatch = useDispatch();

  const myPhoto = useSelector((state) => state.myPhoto);

  useEffect(() => {
    dispatch(getMyPhoto());
  }, [dispatch]);

  const handleLogOut = () => {
    try {
      logOut();
      localStorage.clear()
    } catch (error) {
      console.log(error.message);
    }
  };
  const [isuser, setIsUser] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    if (isuser) setIsUser(false);
  };
  const handleClick = () => setIsUser(!isuser);

  return (
    <StyledSideBar className={open ? "open" : undefined}>
      <button
        className={open ? "open menu-button" : "menu-button"}
        onClick={handleOpen}
      >
        <span className="menu-icon" />
        <span className="menu-icon2" />
      </button>
      <div className="user">
        <button onClick={handleClick}>
          <img
            src={
              myPhoto
                ? myPhoto.data?.profile[0] === "u"
                  ? process.env.REACT_APP_PUERTO + myPhoto.data?.profile
                  : myPhoto.data?.profile
                : "https://static2.elnortedecastilla.es/www/pre2017/multimedia/noticias/201501/12/media/cortadas/facebook-profile-picture-no-pic-avatar--575x323.jpg"
            }
            alt=""
          />
          <p>{myPhoto?.data?.fullname.split(" ")[0]}</p>
          <span className={isuser ? "chevron" : undefined}>
            <Chevron />
          </span>
        </button>
      </div>
      {isuser && open && (
        <div className="settings">
          <Link to="/myprofile">
            <p># Perfil</p>
          </Link>

          <button className="cerrar-sesion" onClick={handleLogOut}>
            <a href="/"># Cerrar sesion</a>
          </button>
        </div>
      )}
      {myPhoto?.data?.state === true ? (
        <div>
          <details open={open === false && undefined}>
            <summary className="canales">
              <Red />
              Red
              <span>
                <Chevron />
              </span>
            </summary>
            {open && (
              <ul className="list">
                <li>
                  <Link to="/suggestions"># Sugerencias</Link>
                </li>
              </ul>
            )}
          </details>
          <details open={open === false && undefined}>
            <summary className="canales">
              <Settings />
              Settings
              <span>
                <Chevron />
              </span>
            </summary>
            {open && (
              <ul className="list">
                <Link to="/edit">
                  <li>
                    <p># Editar perfil</p>
                  </li>
                </Link>
              </ul>
            )}
          </details>
        </div>
      ) : null}
      {myPhoto.data ? (
        myPhoto.data.rol === "ADMIN" ? (
          <>
            <details open={open === false && undefined}>
              <summary className="canales">
                <Admin />
                Admin
                <span>
                  <Chevron />
                </span>
              </summary>
              {open && (
                <ul className="list">
                  <li>
                    <Link to="/admin/authorize"># Autorizar</Link>
                  </li>
                  <li>
                    <Link to="/admin/blockAccount"># Bloquear</Link>
                  </li>
                </ul>
              )}
            </details>
          </>
        ) : (
          <></>
        )
      ) : (
        []
      )}
    </StyledSideBar>
  );
}
