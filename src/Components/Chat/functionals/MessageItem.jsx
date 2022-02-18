import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { format } from 'timeago.js'
import Typography from '@mui/material/Typography';
import { get_CHAT } from '../../../actions';
import { useDispatch } from 'react-redux';
import {Pconversa} from './StyledChat'

const MessageItem = ({ name, message, profile, date, id, friend}) => {

  // const [time, settime] = useState(format(date, 'en_US'));
  const dispatch = useDispatch()
  const handleChat = (id)=>{
    dispatch(get_CHAT(id, friend))
  }

  return (
    <>
      <ListItem alignItems="flex-start" onClick={()=>handleChat(id)} >
        <ListItemAvatar>
          <Avatar alt={name} src={profile?.includes('uploads')?`${process.env.REACT_APP_PUERTO}` + profile : profile} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
            <Pconversa>
              {message}
            </Pconversa>

              <Typography
                sx={{ display: 'inline', color:'gray' }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                {format(date)} 
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

    </>
  )
};

export default MessageItem;
