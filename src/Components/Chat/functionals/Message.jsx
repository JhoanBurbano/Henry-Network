import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { format } from "timeago.js";
import {
  MessengeHead,
  MessengeCont,
  MessengeContFriend,
  Pfriend,
  Pyou,
  MessengeHeadyou,
  LabeldateFriend,
  LabeldateYou,
} from "./StyledChat";

const Message = ({ name, message, profile, date, type }) => {
  // const { myProfileData } = useSelector(state => state)
  // //  console.log(profile, 'mi perfil los datos')
  //  const me = useRef(null);
  // useEffect(()=>{

  //     if (profile === null || profile === undefined){

  //         me.current=myProfileData?.data[0].profile

  //     }

  // socket.current.on("getUsers", users=>{console.log(users, 'usuarios conectados')})
  // }, [myProfileData])

  switch (type) {
    case "own":
      return (
        <>
          <MessengeHeadyou>
            <MessengeCont>
              <Pyou>{message}</Pyou>

              <ListItemAvatar>
                <Avatar
                  alt={name}
                  src={
                    profile?.includes("uploads")
                      ? `${process.env.REACT_APP_PUERTO}` + profile
                      : profile
                  }
                />
              </ListItemAvatar>
            </MessengeCont>
          </MessengeHeadyou>
          <LabeldateYou>{format(date)} </LabeldateYou>
        </>
      );
    case "friend":
      return (
        <>
          <MessengeHead>
            <MessengeContFriend>
              <ListItemAvatar>
                <Avatar
                  alt={name}
                  src={
                    profile?.includes("uploads")
                      ? `${process.env.REACT_APP_PUERTO}` + profile
                      : profile
                  }
                />
              </ListItemAvatar>

              <Pfriend>{message}</Pfriend>
            </MessengeContFriend>
          </MessengeHead>
          <LabeldateFriend>{format(date)}</LabeldateFriend>
        </>
      );
    default:
      return <></>;
  }
};

export default Message;
