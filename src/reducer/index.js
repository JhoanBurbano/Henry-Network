import { CLEAR_PROFILE_STATE, CLEAR_USERS_STATE, GET_USER, GET_NAME, 
     PUT_UPLOUD_PROFILE, GET_MY_PROFILE, GET_USER_BY_ID,
     MY_PROFILE, CREATE_POST, GET_ALL_POSTS, 
     GET_FOLLOWS, GET_FOLLOWERS, FOLLOW_USER_BY_ID, GET_MY_POST, 
     GET_MY_FRIENDS_POST,CLEAR_FOLLOW_USER_STATE,
     GET_MY_ID, CLEAR_MY_FOLLOW_STATE, 
     GET_CLEAN_FRIENDS, CLEAN_HOME, GET_MY_PHOTO, 
     CLEAR_MY_PROFILE, GET_NOTIFICATIONS, CLEAR_NOTIFICATIONS,
     GET_POST_BY_ID, CLEAR_POST_BY_ID, CREATE_COMMENT,CONVERSATIONS,
     PUSHCHAT, USERS_ALL, CHAT, EXPERIENCES_POSTS, GET_ALL_USERS, CLEAR_ALL_USERS, FILTER_BY_TAGS, CLEAR_MY_POSTS, AUTHORIZED} from "../actions/actionTypes"


const initialState = {

    users: [],
    profile: [],
    search:[],
    myprofile:{},
    myProfileData:[],
    conversations: [],
    Users: [],
    allPost: [],
    Socket:[],
    follows:[],
    followers:[],
    followUser:[],
    myProfilePost:[],
    myFriendsPost: [],
    myId:[],
    sort:[],
    myPhoto:[],
    notifications:[],
    chat:   {
		      chats: [],
		      friend: {},
		      id: ''
            },

    postById:[],
    experiencesPost:[],
    experiences:[],
    allUsers:[],
    authorized:[]
}



export function rootReducer(state = initialState, action) {

    switch (action.type) {

        case GET_USER:
            return {
                ...state,
                users: action.payload,
            }
        case CLEAR_USERS_STATE:
            return {
                ...state,
                users:action.payload
            }
        case GET_USER_BY_ID:
            return{
                ...state,
                profile:action.payload
            }
        case CLEAR_PROFILE_STATE:
            return{
                ...state,
                profile:action.payload,
                followUser:action.payload
            }
        case GET_NAME:
            return{
                ...state,
                search:action.payload
            }       
            
        case  GET_MY_PROFILE:
            return{
                ...state,
                myprofile:action.payload
            }

            case  PUT_UPLOUD_PROFILE:
            return{
                ...state,
                myprofile:action.payload
            }
        case MY_PROFILE:
            return{
                ...state,
                myProfileData:action.payload
            }   
            case CREATE_POST:
            return{
                ...state
            }
            case CREATE_COMMENT: 
            return{
                ...state
            }
            case GET_ALL_POSTS:
                return{
                    ...state,
                    allPost: action.payload
                }
            case GET_FOLLOWS:
                return{
                    ...state,
                    follows:action.payload
                }
            case GET_FOLLOWERS:
                return{
                    ...state,
                    followers:action.payload
                }
            case FOLLOW_USER_BY_ID:
                return{
                    ...state,
                    followUser:action.payload,
                } 
                case GET_MY_POST:
                    return{
                        ...state,
                        myProfilePost: action.payload,
                    }      
                case GET_MY_FRIENDS_POST:
                    return{
                        ...state,
                        myFriendsPost: action.payload,
                    }         
                
            case CLEAR_FOLLOW_USER_STATE:
                return{
                    ...state,
                    followUser:action.payload,
                }
            case GET_MY_ID:
                return{
                    ...state,
                    myId:action.payload,
                }
            case CLEAR_MY_FOLLOW_STATE:
                return{
                    ...state,
                    followers:action.payload,
                    follows:action.payload,
                }                                  
                case GET_CLEAN_FRIENDS:
                    return{
                        ...state,
                        myFriendsPost:[],
                    }   
                    
                case CLEAN_HOME: 
                return{
                    ...state,
                    allPost:[],
                    myProfileData:[]
                }  
                
                case GET_MY_PHOTO:
                    return{
                        ...state,
                        myPhoto: action.payload
                    }
                case CLEAR_MY_PROFILE:
                    return{
                        ...state,
                        myProfileData:[]
                    }
                case GET_NOTIFICATIONS:
                    return{
                        ...state,
                        notifications:action.payload
                    }
                case CLEAR_NOTIFICATIONS:
                    return{
                        ...state,
                        notifications:action.payload
                    }      
                    
                 case CONVERSATIONS:
                        return {
                            ...state,
                            conversations: action.payload
                        }; 

               case CHAT:
		         	return {
				       ...state,
				       chat: action.payload
		        	};

               case PUSHCHAT:
                        return {
                             ...state,
                             chat: {
                                  ...state.chat,
                                  chats: [ ...state.chat.chats, action.payload ]
                                  }
                            };   
                            
                case USERS_ALL:
                    return {
                             ...state,
                             Users: action.payload
                            };  
   
                case GET_POST_BY_ID:
                    return{
                        ...state,
                        postById:action.payload
                    }   
                case CLEAR_POST_BY_ID:
                    return{
                        ...state,
                        postById:action.payload
                    }   
                
                case EXPERIENCES_POSTS:
                    return{
                        ...state,
                        experiencesPost: action.payload,
                        experiences: action.payload
                    }
                case GET_ALL_USERS:
                    return{
                        ...state,
                        allUsers:action.payload
                    }
                case CLEAR_ALL_USERS:
                    return{
                        ...state,
                        allUsers:action.payload
                    } 
                case FILTER_BY_TAGS:
                    const experiencesPost = state.experiences
                    const regex = /#experience, /i;
                    const tagsFiltered = action.payload === 'Todos' ? experiencesPost : experiencesPost.filter(el => el.tags[0].replace(regex,"") === action.payload)
                    return{
                        ...state,
                       experiencesPost: tagsFiltered 
                    }
                case CLEAR_MY_POSTS:
                    return{
                        ...state,
                        myProfilePost:action.payload
                    }
                case AUTHORIZED:
                    return{
                        ...state,
                        authorized:action.payload
                    }                                     
        default:
            return state
    }
}    
       