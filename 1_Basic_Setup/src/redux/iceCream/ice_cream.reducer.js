import {BUY_ICECREAM,RETURN_ICECREAM} from './ice_cream.type';


const iceCreamReducer = (state={num_of_iceCream:20}, action) => {
    console.log('iceCreamReducer !!');
    switch (action.type) {
        case BUY_ICECREAM:{
            return {
                ...state,
                num_of_iceCream : state.num_of_iceCream - 1
            }
            break;
        }
            
        case RETURN_ICECREAM:{
            return {
                ...state,
                num_of_iceCream : state.num_of_iceCream + 1
            }
            break;
        }   
    
        default:{
            return state;
        }
    }
}

export {iceCreamReducer};