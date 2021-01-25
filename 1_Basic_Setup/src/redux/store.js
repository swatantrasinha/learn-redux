//import {createStore} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


console.log('store  !!!!!');
//const store = createStore(rootReducer);
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(),
  ));
  
export default store;

 



 
