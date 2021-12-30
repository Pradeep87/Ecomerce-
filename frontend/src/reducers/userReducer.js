import { LOGIN_FAIL, LOGIN_REQUEST, 
    LOGIN_SUCCESS, CLEAR_ERROR,
     REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAIL,
     LOAD_USER_FAIL,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,
     LOGOUT_FAIL,LOGOUT_SUCCESS,
     USER_PROFILE_RESET,UPDATE_USER_PROFILE_FAIL,UPDATE_USER_PROFILE_SUCCESS,
     UPDATE_USER_PROFILE_REQUEST,
     UPDATE_USER_PASSWORD_FAIL,
     UPDATE_USER_PASSWORD_REQUEST,UPDATE_USER_PASSWORD_SUCCESS,
     USER_PASSWORD_RESET,
     FORGOT_PASSWORD_FAIL,FORGOT_PASSWORD_SUCCESS,FORGOT_PASSWORD_REQUEST,
   RESET_PASSWORD_FAIL,RESET_PASSWORD_REQUEST,RESET_PASSWORD_SUCCESS,
   ALL_USERS_FAIL,ALL_USERS_REQUEST,ALL_USERS_SUCCESS,
   USER_DETAILS_FAIL,USER_DETAILS_REQUEST,USER_DETAILS_SUCCESS,
   UPDATE_USER_SUCCESS,UPDATE_USER_REQUEST,UPDATE_USER_FAIL,UPDATE_USER_RESET,
   DELETE_USER_FAIL,DELETE_USER_REQUEST,DELETE_USER_SUCCESS,DELETE_USER_RESET,
    } from "../constant/userConstant";


export const userReducer=(state={user:{}},action)=>{

switch (action.type) {
    case LOAD_USER_REQUEST:
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:    
        return{ 
            loading:true,
            isAthenticated:false,
            }

       case LOAD_USER_SUCCESS: 
       case LOGIN_SUCCESS:
       case REGISTER_SUCCESS:    
           return{ 
               ...state,
               loading:false,
               isAthenticated:true,
               user:action.payload,
           }
        case LOGOUT_SUCCESS:
            return{loading:false,
                   user:null,
                isAthenticated:false }   

case LOGIN_FAIL:
case REGISTER_FAIL:    
    return{
...state,
loading:false,
isAthenticated:false,
user:null,
error:action.payload
    }
    case LOAD_USER_FAIL:
        return { 
    loading:false,
    isAthenticated:false,
    user:null,
    error:action.payload
        }
case LOGOUT_FAIL:
    return{ 
        ...state,
        loading:false,
        error:action.payload,
    }
    case CLEAR_ERROR:
    return{
        ...state,
        error:null,
    }
    default:
       return state
}


}



export const userProfileR=(state={},action)=>{

    switch (action.type) {
       
      case UPDATE_USER_REQUEST:
        case DELETE_USER_REQUEST:
        case UPDATE_USER_PASSWORD_REQUEST:
        case UPDATE_USER_PROFILE_REQUEST:    
            return{ 
                ...state,
                loading:true,
                          }
         case UPDATE_USER_PASSWORD_SUCCESS:
           case UPDATE_USER_PROFILE_SUCCESS:    
           case UPDATE_USER_SUCCESS:
               return{ 
                   ...state,
                   loading:false,
                   isUpdated:action.payload,
               }
               case DELETE_USER_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  isDeleted: action.payload.success,
                  message: action.payload.message,
                };
         case UPDATE_USER_PASSWORD_FAIL:
        case UPDATE_USER_PROFILE_FAIL:
          case UPDATE_USER_FAIL:
            case DELETE_USER_FAIL:
            return { 
        ...state,
        loading:false,
        error:action.payload
            }
  
        case CLEAR_ERROR:
        return{
            ...state,
            error:null,
        }
         case USER_PASSWORD_RESET:
        case USER_PROFILE_RESET:
          case UPDATE_USER_RESET:
            return{ 
                ...state,
                isUpdated:false
            }

            case DELETE_USER_RESET:
              return {
                ...state,
                isDeleted: false,
              };

        default:
           return state
    }
    
    
    }
    
    
    
 
export const forgotPasswordR=(state={},action)=>{

    switch (action.type) {
       
      case RESET_PASSWORD_REQUEST:
        case FORGOT_PASSWORD_REQUEST:    
            return{ 
                ...state,
                loading:true,
                error:null,          }
      
           case FORGOT_PASSWORD_SUCCESS:    
               return{ 
                   ...state,
                   loading:false,
                   message:action.payload,
               }
               case RESET_PASSWORD_SUCCESS:    
               return{ 
                   ...state,
                   loading:false,
                   success:action.payload,
               }



        case RESET_PASSWORD_FAIL:       
        case FORGOT_PASSWORD_FAIL:
            return { 
        ...state,
        loading:false,
        error:action.payload
            }
  
        case CLEAR_ERROR:
        return{
            ...state,
            error:null,
        }
               default:
           return state
    }
    
    
    }
    
       
    
export const allUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case ALL_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALL_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
        };
  
      case ALL_USERS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
  export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case USER_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
        };
  
      case USER_DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  
    


