import React, { useEffect } from "react";
import { getFollows, getMyProfileData, getMyId } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Messenger from "./Messenger";
import Loaderfull from "../Loader/LoaderFull";
import Layout from "../Layout/Layout";

// import Chats from './Chats.jsx';
//import {conversaciones} from './Message/conversacion';
/* import {Link} from 'react-router-dom'; */
// const { user } = useUserAuth();
// console.log(user, "yo como persona que me logeo")

export default function Chat() {
  const dispatch = useDispatch();
  const fallows = useSelector((state) => state.follows);
  const user = useSelector((state) => state.myProfileData);

  // if(user.length !== 0)console.log(user, "yo como persona que me logeo")

  useEffect(() => {
    dispatch(getFollows());
    dispatch(getMyId());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMyProfileData());
  }, [dispatch]);

  const contactos = fallows.data;

  return (
    ///// aqui va el layout que dice August

    <Layout>
      {contactos ? (
        <Messenger user={user} contactos={contactos} />
      ) : (
        <Loaderfull></Loaderfull>
      )}
    </Layout>
  );
}
