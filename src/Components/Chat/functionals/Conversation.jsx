import { Container } from "@mui/material";
import Chat from "./Chat";
import TypeBox from "./TypeBox";

const Conversation = ({socket, online, user}) => {
  
  return(
      <Container>
          <Chat socket={socket} online={online} user={user} />
          <TypeBox socket={socket} />
      </Container>
  );
};

export default Conversation;
