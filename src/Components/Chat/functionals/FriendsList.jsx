import * as React from 'react';
import List from '@mui/material/List';
import FriendItem from './FriendItem';


export default function FriendList({online,offline}) {
 
  
  console.log(offline,'lo que me esta llegando en offline')

  return (
    <List sx={{ width: '100%', height:"100%", maxWidth: 360, zIndex: 1, overflowY: "auto", position: "relative" }}>
      {online?.map((e, i) => ( 
      
      <FriendItem
        name={e?.fullname}
        id={e?.id}
        state={"oline"}
        key={e?._id}
        profile={ 
          e.profile?.includes('uploads')?`${process.env.REACT_APP_PUERTO}` + e.profile 
                :
           e.profile}
      />))}  
    
      {offline?.map( (e, i) => (
        <FriendItem
         name={e?.fullname}
         id={e?.id}
         state={"offline"} 
         key={e?._id} 
         profile={
            e.profile?.includes('uploads')?`${process.env.REACT_APP_PUERTO}` + e.profile 
                 :
            e.profile} 
        /> ))}
  
     </List>
  );
}
