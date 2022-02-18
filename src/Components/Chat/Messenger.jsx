import { Container, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_CONVERSATIONS,
  PUSHchat,
  user_ALL,
  getFollows,
  getMyProfileData,
} from "../../actions";
import Conversation from "./functionals/Conversation";
import FriendList from "./functionals/FriendsList";
import MessagesList from "./functionals/MessagesList";
import { io } from "socket.io-client";

export default function Messenger({ visible, contactos, user }) {
  // const sockete = useRef(sockety)
  const dispatch = useDispatch();
  const { conversations, myId, follows } = useSelector((state) => state);
  const [online, setOnline] = useState([]);
  const [offline, setOffline] = useState([]);
  const gsock = useRef();
  // const contr = useRef(0);

  console.log(follows.data, "heee k2");
  console.log(contactos, "lo que llega de contactos");

  useEffect(() => {
    gsock.current = io(`${process.env.REACT_APP_PUERTO}`);
    gsock.current.emit("addUser", myId?.id);
    // socket.current.on("getUsers", users=>{console.log(users, 'usuarios conectados')})
    //dispatch(get_SOCKET(gsock.current))
  }, [dispatch, myId?.id]);

  useEffect(() => {
    gsock.current?.on("getMessage", (data) => {
      console.log("aqui???");
      dispatch(
        PUSHchat({
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
        })
      );
    });

    gsock.current?.on("myMessage", (data) => {
      console.log("aqui???");
      dispatch(
        PUSHchat({
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
        })
      );
    });
  }, [dispatch]);

  let Offline = []

  useEffect(() => {
    Offline = [];
    gsock.current?.on("getUsers", (users) => {
      let online = [];
      let aux = users.filter((e) => e.userId !== myId?.id);
      console.log(aux, "auxiliar");

      if (aux.length) {
        for (let i = 0; i < aux.length; i++) {
          for (let j = 0; j < contactos.length; j++) {
            if (aux[i].userId === contactos[j].id) {
              online.push(contactos[j]);
              continue;
            }else
            if (aux[i].userId !== contactos[j].id) {
              Offline.push(contactos[j]);
            }
          }
        }
        console.log(online, "brge");
        console.log(Offline, "bgre 2");
      } else {
        Offline = contactos;
      }
      console.log(Offline, "mmm");
      // console.log(online, 'contactos online')
      setOnline(online);
      setOffline(Offline);
    });
    
    if(Offline.length === 0){
     
        setOffline(contactos)
    }

  }, [gsock.current]);

  useEffect(() => {
    dispatch(user_ALL());
  }, [dispatch]);

  useEffect(() => {
    dispatch(get_CONVERSATIONS());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFollows());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMyProfileData());
  }, [dispatch]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="start">
      <Grid xs item={true}>
        <Container
          sx={{ maxHeight: "80vh", overflow: "hidden", height: "80vh" }}
        >
          <MessagesList conversations={conversations} user={user} />
        </Container>
      </Grid>
      <Grid xs={6} item={true}>
        <Container>
          <Conversation socket={gsock} online={online} />
        </Container>
      </Grid>
      <Grid xs item={true}>
        <Container
          sx={{ maxHeight: "80vh", overflow: "hidden", height: "80vh" }}
        >
          <FriendList online={online} offline={offline} />
        </Container>
      </Grid>
    </Grid>
  );
}
