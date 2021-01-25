import {combineReducers} from 'redux';
import { userReducer } from './user/user.reducer';

console.log('root reducer !!!!!');

const rootReducer = combineReducers({
    myUser: userReducer
});

export default rootReducer;