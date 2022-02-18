import { StyledNotificationCard } from "./styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { tokenUsuario } from "../../actions/actionTypes";
import { useDispatch } from "react-redux";
import { getNotifications } from "../../actions";

export default function NotificationCard({
  id,
  content,
  name,
  icon,
  _id,
  idpost,
}) {
  const dispatch = useDispatch();
  async function deleteOne(e) {
    e.preventDefault();
    try {
      await axios.delete(
        `${process.env.REACT_APP_PUERTO}usuarios/notifications/${_id}`,
        tokenUsuario()
      );
      dispatch(getNotifications());
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <StyledNotificationCard key={_id}>
      <div className="icono">
        <img src={process.env.REACT_APP_PUERTO + icon} alt="NotFound" />
      </div>
      <div className="texto">
        <p>
          <Link
            to={`/${
              content === "te empezó a seguir"
                ? `profile/${id}`
                : content === `Ha sido reportado(a)`
                ? `admin/blockAccount`
                : `post/${idpost}`
            }`}
            className="div-click"
          >
            <span className="link"></span>
            <span className="user-name">{name + " "}</span>
            {content}
          </Link>
        </p>
      </div>
      <button className="delete" onClick={deleteOne}>
        X
      </button>
    </StyledNotificationCard>
  );
}
