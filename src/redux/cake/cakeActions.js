import {BUY_CAKE} from './cakeTypes.js';

export const buyCake = () =>{
    console.log('actionCreator ==> buyCake - will return BUY_CAKE ');
    return {
        type:BUY_CAKE
    }
}

