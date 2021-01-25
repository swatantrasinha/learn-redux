
Async action
============
e.g making API call to fetch data from end point
yarn add axios --save
yarn add redux-thunk --save


The main change to be noted is in action file :
other functions are similar to earlier seen lectures and return object with type
but this function "fetchUsersAsync" is returning object - this is thunk feature
## Check and remember in Line 16 comment "this function will have dispatch"
means function returned by thunk function has dispatch 
============================================================================================================
user.action.js
---------------
const myAsyncFunc = (mydDispatch) => { // this function will have dispatch
    mydDispatch(fetchUsersRequest())

        setTimeout(() => {  //simply added settim out to delay loading further so that can see loading clearly
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

============================================================================================================
