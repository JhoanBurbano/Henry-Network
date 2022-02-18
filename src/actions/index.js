import axios from "axios";
import {
  CLEAR_PROFILE_STATE,
  CLEAR_USERS_STATE,
  GET_USER,
  GET_MY_PROFILE,
  GET_USER_BY_ID,
  tokenUsuario,
  MY_PROFILE,
  GET_ALL_POSTS,
  GET_NAME,
  GET_FOLLOWS,
  GET_FOLLOWERS,
  FOLLOW_USER_BY_ID,
  GET_MY_POST,
  GET_MY_FRIENDS_POST,
  CLEAR_FOLLOW_USER_STATE,
  GET_MY_ID,
  CLEAR_MY_FOLLOW_STATE,
  GET_CLEAN_FRIENDS,
  CLEAN_HOME,
  GET_MY_PHOTO,
  CLEAR_MY_PROFILE,
  GET_NOTIFICATIONS,
  CLEAR_NOTIFICATIONS,
  CONVERSATIONS,
  PUSHCHAT,
  USERS_ALL,
  CHAT,
  GET_POST_BY_ID,
  CLEAR_POST_BY_ID,
  EXPERIENCES_POSTS,
  GET_ALL_USERS,
  CLEAR_ALL_USERS,
  FILTER_BY_TAGS,
  CLEAR_MY_POSTS,
  AUTHORIZED,
} from "./actionTypes";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const users = await axios.get(
        `${process.env.REACT_APP_PUERTO}usuarios/?myself=false&follows=false`,
        tokenUsuario()
      );

      return dispatch({ type: GET_USER, payload: users.data.data.length === 0 ? ["algo"] : users.data.data});
    } catch (err) {
      console.log(err);
    }
  };
};

export const clearUsersState = () => {
  return { type: CLEAR_USERS_STATE, payload: [] };
};

export const getProfile = (id) => {
  return async (dispatch) => {
    try {
      const user = await axios.get(
        `${process.env.REACT_APP_PUERTO}usuarios/Id/${id}`,
        tokenUsuario()
      );
      return dispatch({ type: GET_USER_BY_ID, payload: user.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getFollowUserById = (id) => {
  return async (dispatch) => {
    try {
      const followUser = await axios.get(
        `${process.env.REACT_APP_PUERTO}usuarios/Id/${id}?follow=true`,
        tokenUsuario()
      );
      return dispatch({ type: FOLLOW_USER_BY_ID, payload: followUser.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const clearProfileState = () => {
  return { type: CLEAR_PROFILE_STATE, payload: [] };
};

export const getMyProfile = () => {
  return async (dispatch) => {
    try {
      const usuario = await axios.get(
        `${process.env.REACT_APP_PUERTO}usuarios/?myself=true`,
        tokenUsuario()
      );

      return dispatch({
        type: GET_MY_PROFILE,
        payload: {
          //esta actions la puede hacer getProfile  mandandole el ID de mi perfil
          name: usuario.data[0].fullname,
          description: usuario.data[0].description,
          imageprofile: usuario.data[0].profile,
          imageport: "./BReact.png",
          birthday: usuario.data[0].fullname,
          roll: "Estudiante",
          cohorte: "FT-19b",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export function postUploadProfile(payload) {
  console.log(payload);
  return async function (dispatch) {
    try {
      console.log(payload, "dentro del try");
      const response = await axios.put(
        `${process.env.REACT_APP_PUERTO}usuarios`,
        payload,
        tokenUsuario()
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPeopleByName(name) {
  return async function (dispatch) {
    try {
      let names = await axios.get(
        `${process.env.REACT_APP_PUERTO}usuarios/${name}`,
        tokenUsuario()
      );

      return dispatch({
        type: GET_NAME,
        payload: names.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getMyProfileData = () => {
  return async (dispatch) => {
    try {
      const profile = await axios.get(
        `${process.env.REACT_APP_PUERTO}usuarios/?myself=true`,
        tokenUsuario()
      );
      return dispatch({ type: MY_PROFILE, payload: profile.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const CreatePost = (payload) => {
  return async (dispatch) => {
    try {
      const data = await axios.post(
        `${process.env.REACT_APP_PUERTO}posts`,
        payload,
        tokenUsuario()
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

export const CreateComment = (payload) => {
  return async (dispatch) => {
    try {
      const info = await axios.post(
        `${process.env.REACT_APP_PUERTO}posts/comentarios`,
        payload,
        tokenUsuario()
      );
      return info;
    } catch (error) {
      console.log(error);
    }
  };
};

export const AllPost = () => {
  return async (dispatch) => {
    try {
      let {
        data: { data },
      } = await axios.get(
        `${process.env.REACT_APP_PUERTO}posts/?follows=true`,
        tokenUsuario()
      ); //despues agregarle la query
      return dispatch({
        type: GET_ALL_POSTS,
        payload: data.length === 0 ? ["algo"] : data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFollows = () => {
  return async (dispatch) => {
    try {
      const follows = await axios.get(
        `${process.env.REACT_APP_PUERTO}usuarios/?myself=false&follows=true`,
        tokenUsuario()
      );
      return dispatch({ type: GET_FOLLOWS, payload: follows.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getFollowers = () => {
  return async (dispatch) => {
    try {
      const followers = await axios.get(
        `${process.env.REACT_APP_PUERTO}usuarios/?myself=false&followers=true`,
        tokenUsuario()
      );
      return dispatch({ type: GET_FOLLOWERS, payload: followers.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getMyPost = () => {
  return async (dispatch) => {
    try {
      const myPost = await axios.get(
        `${process.env.REACT_APP_PUERTO}posts/?myself=true`,
        tokenUsuario()
      );
      return dispatch({
        type: GET_MY_POST,
        payload: myPost.data.data.length === 0 ? ["algo"] : myPost.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMyfriendsPost = (id) => {
  return async (dispatch) => {
    try {
      const friendsPost = await axios.get(
        `${process.env.REACT_APP_PUERTO}posts/?userid=${id}`,
        tokenUsuario()
      );
      return dispatch({
        type: GET_MY_FRIENDS_POST,
        payload:
          friendsPost.data.data.length === 0 ? ["algo"] : friendsPost.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const clearStateFollowsUser = () => {
  return { type: CLEAR_FOLLOW_USER_STATE, payload: [] };
};

export const clearMyFollowsState = () => {
  return { type: CLEAR_MY_FOLLOW_STATE, payload: [] };
};

export const getMyId = () => {
  return async (dispatch) => {
    try {
      const myId = await axios.get(
        `${process.env.REACT_APP_PUERTO}usuarios/?myId=true`,
        tokenUsuario()
      );
      return dispatch({ type: GET_MY_ID, payload: myId.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export function getCleanFriends() {
  return {
    type: GET_CLEAN_FRIENDS,
  };
}
export function getCleanHome() {
  return {
    type: CLEAN_HOME,
  };
}

export const getMyPhoto = () => {
  return async (dispatch) => {
    try {
      const myPhoto = await axios.get(
        `${process.env.REACT_APP_PUERTO}usuarios/?myId=true&fastProfile=true`,
        tokenUsuario()
      );
      return dispatch({ type: GET_MY_PHOTO, payload: myPhoto.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const clearMyProfile = () => {
  return { type: CLEAR_MY_PROFILE, payload: [] };
};

export const getNotifications = () => {
  return async (dispatch) => {
    try {
      const notifications = await axios.get(
        `${process.env.REACT_APP_PUERTO}usuarios/notifications`,
        tokenUsuario()
      );
      return dispatch({ type: GET_NOTIFICATIONS, payload: notifications.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const clearNotifications = () => {
  return { type: CLEAR_NOTIFICATIONS, payload: { notifications: [] } };
};

export const get_CONVERSATIONS = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_PUERTO}conversation/`,
        tokenUsuario()
      );
      console.log(data, "data de mis conversaciones");
      return dispatch({ type: CONVERSATIONS, payload: data });
    } catch (error) {
      console.error(error);
      alert("error");
    }
  };
};

//{headers:{token: read_cookie('userToken')}}
export const get_CHAT = (conversationId, friend) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_PUERTO}message/${conversationId}`,
        tokenUsuario()
      );
      return dispatch({
        type: CHAT,
        payload: { id: conversationId, friend: friend, chats: data },
      });
    } catch (error) {
      console.error(error);
      alert("error");
    }
  };
};

export const PUSHchat = (msg) => ({
  type: PUSHCHAT,
  payload: msg,
});

export const NEW_MESSAGE = async (body) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_PUERTO}message/`,
      body,
      tokenUsuario()
    );
    return;
  } catch (error) {
    console.error(error);
    alert("error");
  }
};

export const user_ALL = () => {
  return async (dispatch) => {
    try {
      const { data: Users } = await axios(
        `${process.env.REACT_APP_PUERTO}usuarios/?myself=false&follows=false`,
        tokenUsuario()
      );
      console.log(Users, "Probando ruta Users");
      return dispatch({ type: USERS_ALL, payload: Users });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getPostById = (id) => {
  return async (dispatch) => {
    try {
      const postById = await axios.get(
        `${process.env.REACT_APP_PUERTO}posts/?idpost=${id}`,
        tokenUsuario()
      );
      return dispatch({
        type: GET_POST_BY_ID,
        payload: postById.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearPostById = () => {
  return { type: CLEAR_POST_BY_ID, payload: [] };
};

export const getExperiencesPosts = () => {
  return async (dispatch) => {
    try {
      const expPost = await axios.get(
        `${process.env.REACT_APP_PUERTO}posts?experience=true`,
        tokenUsuario()
      );
      return dispatch({
        type: EXPERIENCES_POSTS,
        payload: expPost.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const allUsers = await axios(
        `${process.env.REACT_APP_PUERTO}usuarios?locked=true`,
        tokenUsuario()
      );
      return dispatch({ type: GET_ALL_USERS, payload: allUsers.data });
    } catch (error) {
      console.error(error);
    }
  };
};

export const clearAllUsers = () => {
  return { type: CLEAR_ALL_USERS, payload: [] };
};

export const filterByTags = (payload) => {
  return {
    type: FILTER_BY_TAGS,
    payload,
  };
};

export const clearMyPosts = () => {
  return {
    type: CLEAR_MY_POSTS,
    payload: [],
  };
};

export const authorized = () => {
  return async (dispatch) => {
    try {
      const authorized = await axios(
        `${process.env.REACT_APP_PUERTO}reportes/auth`,
        tokenUsuario()
      );
      return dispatch({ type: AUTHORIZED, payload: authorized.data });
    } catch (error) {
      console.error(error);
    }
  };
};
