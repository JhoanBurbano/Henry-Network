import {ListItem, ListItemText, ListItemAvatar, Divider, Avatar} from '@mui/material/';
import axios from 'axios';
import { read_cookie } from 'sfcookies';
import { useDispatch} from 'react-redux';
import {  get_CONVERSATIONS} from "../../../actions";
import {Ponline, NameHead, Poffline} from './StyledChat'

const FriendItem = ({ name, profile, state, id }) => {
  
  const dispatch = useDispatch()

 
    
    const handleClick = async () => {
    await axios.post(`${process.env.REACT_APP_PUERTO}conversation/`, 
    { receiverId: id }, { headers: { token: read_cookie('userToken') } })
    
    dispatch(get_CONVERSATIONS())
  }
  
  if(state ==="offline"){
    state=false;
  }

  if(state==="oline"){
    state=true
  }

  return (
  <>
    <ListItem alignItems="flex-start" onClick={handleClick}>
    <ListItemAvatar>
      <Avatar alt={name} src={profile} />
    </ListItemAvatar>
    <ListItemText
      primary={
      <NameHead>
      {name}
      </NameHead>
      }
      secondary={
        <>
          {state? <Ponline>{"online"}</Ponline> :<Poffline>{"offline"}</Poffline>}
        </>
      }
    />
  </ListItem>
          <Divider variant="inset" component="li"/>
  </>
  )
};

export default FriendItem;
