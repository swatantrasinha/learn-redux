1. create a project using ==>  create-react-app

2. install redux and react-redux
yarn add redux --save
yarn add react-redux

3. create 2 folders ==> "component" folder and "redux" folder 

4. In redux folder :
- cake folder with files    ==> type,action,reducer
- ice_cream folder with files ==> ype,action,reducer
- index.js - to export actions to be used in Components like CakeComp in the component folder
- rootReducer.js - combine reducer of cake and ice_cream 
- store.js 

## from redux ==> import combinedReducers in rootReducer.js and "createStore" in store.js
==========================================================================================
The basic code changes for rootReducer and store is below :

rootReducer.js
-------------
import {combineReducers} from 'redux';

const rootReducer = combineReducers({

});

export default rootReducer;


store.js
--------
import {createStore} from 'redux';
import rootReducer from './rootReducer';


const store = createStore(rootReducer);
export default store;
=============================================

##Redux DevTools
=================
In chrome search for "Redux DevTools" and add extension
Press F12 to check Redux tab 
Note : "Components" and "Profiles" tab will also appear

npm install --save redux-devtools-extension

For redux-dev-tool : we import and use in code "composeWithDevTools" and this "composeWithDevTools" 
needs applyMiddleware as its arguments

Now add below changes in store.js 
----------------------------------
//import {createStore} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(),
  ));

Note : Any middlewhere like logger etc can be added in line 56 above 


