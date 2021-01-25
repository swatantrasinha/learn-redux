import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './user.type';
import axios from 'axios';


export const fetchUsersRequest = () => {
    console.log('user.action.js ==> function ==> fetchUsersRequest');
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (usersList) => {
    console.log('user.action.js ==> function ==> fetchUsersSuccess');
    return {
        type: FETCH_USERS_SUCCESS,
        payload :  usersList
    }
}

export const fetchUsersFailure = (errorMessage) => {
    console.log('user.action.js ==> function ==> fetchUsersFailure');
    return {
        type: FETCH_USERS_FAILURE,
        payload : errorMessage
    }
}

const myAsyncFunc = (mydDispatch) => { // this function will have  dispatch
    mydDispatch(fetchUsersRequest())

        setTimeout(() => { //simply added settim out to delay loading further so that can see loading clearly
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {      
                console.log(' user.action.js - myAsyncFunc - then - before dispatching success');          
                const users = response.data;
                mydDispatch(fetchUsersSuccess(users))
                console.log(' user.action.js - myAsyncFunc - then - after dispatching success !!!');    
            })
            .catch((error) => {
                console.log(' user.action.js - myAsyncFunc - catch');     
                const errMsg = error.message;
                mydDispatch(fetchUsersFailure(errMsg));
            })
        }, 3000);
       
}

export const fetchUsersAsync = () => {        //return function and not obj - possibe due to thunk
    console.log('user.action.js ==> function ==> fetchUsersAsync');
    return(myAsyncFunc);
}
