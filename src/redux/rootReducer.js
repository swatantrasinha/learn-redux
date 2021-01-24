import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './icerCream/iceCreamReducer';

console.log('root reducer !!!!!');
const rootReducer = combineReducers({
    myCake:cakeReducer,
    myIceCream:iceCreamReducer
});

export default rootReducer;