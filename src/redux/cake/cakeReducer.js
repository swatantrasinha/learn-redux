import {BUY_CAKE} from './cakeTypes';

const initialState={
    numOfCakes:10
}

const cakeReducer = (state=initialState,action) => {
    console.log('cakeReducer !!!!');
    switch(action.type){
        case BUY_CAKE : {
            console.log('cakeReducer matched action ==> BUY_CAKE  ==> now state before changes is : ' , state);

            return {
                ...state,
                numOfCakes:state.numOfCakes-1
            }
        }
        default:
            return state
    }
}

export default cakeReducer;