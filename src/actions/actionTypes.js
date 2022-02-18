import {read_cookie} from 'sfcookies';

// variable para configurar el header 

export const tokenUsuario = () => {
    const token = read_cookie('userToken')
return {headers:{token}}
} 


export const GET_USER = 'GET_USER';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const CLEAR_USERS_STATE = 'CLEAR_USERS_STATE';
export const CLEAR_PROFILE_STATE = 'CLEAR_PROFILE_STATE';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const GET_MY_PROFILE ='GET_MY_PROFILE';
export const PUT_UPLOUD_PROFILE='PUT_UPLOUD_PROFILE';
export const MY_PROFILE='MY_PROFILE';
export const GET_NAME='GET_NAME';
export const CREATE_POST= 'CREATE_POST';
export const GET_ALL_POSTS = 'GET_ALL_POST';
export const GET_FOLLOWERS = 'GET_FOLLOWERS';
export const CLEAR_MY_FOLLOW_STATE = 'CLEAR_MY_FOLLOW_STATE'
export const GET_FOLLOWS = 'GET_FOLLOWS';
export const FOLLOW_USER_BY_ID='FOLLOW_USER_BY_ID';
export const GET_MY_POST = 'GET_MY_POST';
export const GET_MY_FRIENDS_POST = 'GET_MY_FRIENDS_POST';
export const CLEAR_FOLLOW_USER_STATE='CLEAR_FOLLOW_USER_STATE';
export const GET_MY_ID='GET_MY_ID';
export const GET_CLEAN_FRIENDS = 'GET_CLEAN_FRIENDS';
export const CLEAN_HOME = 'CLEAN_HOME';
export const GET_MY_PHOTO = 'GET_MY_PHOTO';
export const CLEAR_MY_PROFILE='CLEAR_MY_PROFILE';
export const GET_NOTIFICATIONS='GET_NOTIFICATIONS';
export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';
export const CONVERSATIONS = 'CONVERSATIONS';
export const CHAT='CHAT';
export const PUSHCHAT = 'PUSHCHAT';
export const USERS_ALL = 'USERS_ALL';
export const GET_POST_BY_ID= 'GET_POST_BY_ID';
export const CLEAR_POST_BY_ID='CLEAR_POST_BY_ID';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const SOCKET= 'SOCKET';
export const EXPERIENCES_POSTS = 'EXPERIENCES_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const CLEAR_ALL_USERS = 'CLEAR_ALL_USERS';
export const FILTER_BY_TAGS = 'FILTER_BY_TAGS';
export const CLEAR_MY_POSTS = 'CLEAR_MY_POSTS';
export const AUTHORIZED = 'AUTHORIZED';
export const POST_AUTHORIZED = 'POST_AUTHORIZED';