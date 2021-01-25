import {BUY_CAKE,RETURN_CAKE} from './cake.type';

const initialState={
    num_of_cakes : 10
}

const cakeReducer = (state=initialState,action) => {
    console.log('cake.reducer.js ==> cakeReducer !!!!');
    switch (action.type) {
        case BUY_CAKE:{
            return {
                ...state,
                num_of_cakes : state.num_of_cakes - 1
            }
            break;
        }

        case RETURN_CAKE:{
            return {
                ...state,
                num_of_cakes : state.num_of_cakes + 1
            }
            break;
        }
            
            
    
        default:{
            return state;
        }
            
    }
}

export {cakeReducer};