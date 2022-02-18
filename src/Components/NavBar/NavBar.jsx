import { Link } from "react-router-dom";
import logo from "../../images/LogoHenry.svg";
import SearchBar from "../SearchBar/SearchBar";
import { StyledDiv } from "./styles";
import Email from "../Icons/Email";
import Bell from "../Icons/Bell";
import BellPlus from "../Icons/BellPlus";
import Experience from "../Icons/Experience";
import { useEffect, useState } from "react";
import Notifications from "../Notifications/Notifications";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../actions";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const notifications = useSelector((state) => state.notifications);
  const fastProfile = useSelector((state) => state.myPhoto);
  const handleClick = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  return (
    <StyledDiv>
      <div className="div-1">
        <p className="app-title">
          <Link to="/home">
            <span className="title-text">HENRY NETWORK</span>
            <img className="logo" src={logo} alt="" />
          </Link>
        </p>
        {fastProfile?.data?.state === true ? <SearchBar />:null}
      </div>
      {fastProfile?.data?.state === true ?
      <div className="botones">
        <Link to="/chat" className="link">
          {!open && <span className="nav-hover">Mensajes</span>}
          <Email />
        </Link>
        <div className="open">
          <button onClick={handleClick}>
            {!open && <span className="nav-hover">Notificaciones</span>}
            {notifications.notifications?.length > 0 ? <BellPlus /> : <Bell />}
          </button>
          {open && (
            <motion.div
              className="motion"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Notifications setOpen={setOpen} notifications={notifications} />
            </motion.div>
          )}
        </div>
        <Link to="/experiences" className="link">
          {!open && <span className="nav-hover">Experiencias</span>}
          <Experience />
        </Link>
      </div>:null}
    </StyledDiv>
  );
}
