import {combineReducers} from 'redux';
import {cakeReducer} from './cake/cake.reducer';
import {iceCreamReducer} from './iceCream/ice_cream.reducer';



console.log('root reducer !!!!!');

const rootReducer = combineReducers({
    myCake : cakeReducer,
    myIceCream : iceCreamReducer
});

export default rootReducer;