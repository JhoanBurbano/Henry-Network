import * as React from "react";
import List from "@mui/material/List";
import Message from "./Message";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Container, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import {Ponline, NameHead, Poffline} from './StyledChat'

export default function Chat({ online }) {
  const {
    chat: { friend, chats },
    myProfileData,
  } = useSelector((state) => state);
  //  console.log(friend, 'lo que estoy areglando ??')
  //  console.log(chats, 'chats????')
  console.log(chats, "que mierda es chats");
  console.log(friend, "que es friend aqui y porque da error");
  console.log(online, " esta online?");
  let me = myProfileData.data?.[0];
  console.log(me, "yo soy yo");
  let contactOnline = false;
  if (online.length !== 0) {
    contactOnline = online.some((contact) => contact?.id === friend?.id);
    console.log(contactOnline, "validacion");
  }

  return (
    <List sx={{ width: "100%", maxWidth: 600, zIndex: 0 }}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar
            alt={friend?.username ? friend.username : me?.fullname}
            src={
              friend.profile
                ? friend.profile.includes("uploads")
                  ? `${process.env.REACT_APP_PUERTO}` + friend.profile
                  : friend.profile
                : me?.profile.includes("uploads")
                ? `${process.env.REACT_APP_PUERTO}` + me?.profile
                : me?.profile
            }
          />
        </ListItemAvatar>
        <ListItemText
          primary={<NameHead>
          {friend?.username ? friend?.username : me?.fullname}
          </NameHead>
          }
          secondary={
            <>
              {friend.username
                ? contactOnline
                  ? <Ponline>{"online"}</Ponline>
                  : <Poffline>{"offline"}</Poffline>
                : <Ponline>{"online"}</Ponline>}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      {/* //////////// */}

      {chats.length ? (
        <>
          <Container sx={{ marginTop: 2, height: "400px", overflow: "auto" }}>
            {chats?.map((e) => (
              <Message
                key={e.id}
                name={e.sender === friend.id ? friend.username : "You"}
                message={e.text}
                date={e.createdAt}
                type={
                  e.sender === friend?.id
                    ? "friend"
                    : e.sender === me?.id
                    ? "own"
                    : ""
                }
                profile={e.sender === friend.id ? friend.profile : me?.profile}
              />
            ))}
          </Container>
        </>
      ) : (
        <Container sx={{ height: "400px" }}>
          <p>No hay chats por mostrar</p>
        </Container>
      )}
    </List>
  );
}
