import {BUY_ICECREAM} from './iceCreamTypes';

const initialState={
    numOfIceCreams:20
}

const iceCreamReducer = (state=initialState,action) => {
    console.log('iceCreamReducer !!!!');
    switch(action.type){
        case BUY_ICECREAM : {
            console.log('iceCreamReducer matched action ==> BUY_ICECREAM  ==> now state before changes is : ' , state);
            return {
                ...state,
                numOfIceCreams:state.numOfIceCreams-1
            }
        }
        default:
            return state
    }
}

export default iceCreamReducer;