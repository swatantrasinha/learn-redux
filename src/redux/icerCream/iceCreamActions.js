import {BUY_ICECREAM} from './iceCreamTypes.js';

export const buyIceCream = () =>{
    console.log('actionCreator ==> buyIceCream ==>  will return BUY_ICECREAM ');
    return {
        type:BUY_ICECREAM
    }
}

