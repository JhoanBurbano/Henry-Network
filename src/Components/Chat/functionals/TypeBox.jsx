import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NEW_MESSAGE } from "../../../actions";
import { InputMessage, SendContainer, ButtonSubmit } from "./StyledChat";

const TypeBox = ({ socket }) => {
  
  const {
    chat: { id, friend },
    myId,
  } = useSelector((state) => state);
  // console.log(myId.id, 'desde typebox');
  // console.log(friend, 'desde friend typebox');
  const [msg, setmsg] = useState();

  const handleClick = ({ target: { value } }) => {
    if (value!=="") {
      
      socket.current.emit("sendMessage", {
        senderId: myId.id,
        receiverId: friend.id,
        text: msg
      }) 
      
      NEW_MESSAGE({ conversationId: id, text: msg, sender: myId.id });
      setmsg("");
    }else{
      alert('No debes enviar mensajes vacios')

    }

    //  dispatch(get_CONVERSATIONS())
  };

  function handleChange(evt) {
    setmsg(evt.target.value);
  }


 

   const handleKey=(e)=>{

    if(e.key==='Enter' && e.target.value!==""){

      socket.current.emit("sendMessage", {
         senderId: myId.id,
         receiverId: friend.id,
         text: msg
    }) 

      NEW_MESSAGE({conversationId:id, text: msg, sender:myId.id})
     
      setmsg("")
  
     }
     else {
      alert('No debes enviar mensajes vacios')
     }
}


  return (
    <>
      {
        id?

      
          
       <SendContainer >

           <InputMessage
                autoComplete="off"
                required
                type='text'
                value={msg}
                name="message"
                onKeyPress={handleKey}
                onChange={(evt) => handleChange(evt)}
                minLength='1'
              />  

          <ButtonSubmit
            onClick={(evt) => handleClick(evt)}
            type="submit"
            variant="contained"
          >
            {
              <SendIcon
                sx={{ marginLeft: 0, height: "40px", color: "#504949" }}
              />
            }
          </ButtonSubmit>
        </SendContainer>
       : ( <span></span> )}
    </>
  );
};

export default TypeBox;
