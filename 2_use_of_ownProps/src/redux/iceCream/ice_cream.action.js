import {BUY_ICECREAM,RETURN_ICECREAM} from './ice_cream.type';


export const buyIceCream = () => {
    console.log('ice_cream.action.js ==> function ==> buyCake');
    return {
        type: BUY_ICECREAM
    }
}

export const returnIceCream = () => {
    console.log('ice_cream.action.js ==> function ==> returnCake');
    return {
        type: RETURN_ICECREAM
    }
}