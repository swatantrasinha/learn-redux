import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './user.type';

const initialState={
    loading:false,
    user_list : [],
    errorMessage :''
}

const userReducer = (state=initialState,action) => {
    console.log('user.reducer.js ==> userReducer !!!!');

    switch (action.type) {
        case FETCH_USERS_REQUEST:{
            return {
                ...state,
                loading:true
            }
            break;
        }

        case FETCH_USERS_SUCCESS:{
            return {
                ...state,
                loading:false,
                user_list:action.payload,
                errorMessage:''
            }
            break;
        }
            
        case FETCH_USERS_FAILURE:{
            return {
                ...state,
                loading:false,
                user_list:[],
                errorMessage:action.payload
            }
            break;
        } 
    
        default:{
            return state;
        }
            
    }
}

export {userReducer};