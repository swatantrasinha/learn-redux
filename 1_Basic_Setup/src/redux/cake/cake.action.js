import {BUY_CAKE,RETURN_CAKE} from './cake.type';


export const buyCake = () => {
    console.log('cake.action.js ==> function ==> buyCake');
    return {
        type: BUY_CAKE
    }
}

export const returnCake = () => {
    console.log('cake.action.js ==> function ==> returnCake');
    return {
        type: RETURN_CAKE
    }
}