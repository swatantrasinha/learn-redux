import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { buyCake } from '../redux/index';

function HooksCakeContainer() {
    console.log('HooksCakeContainer');
  
/*  Style 1 :
const num_Of_Cakez = useSelector( (state) => state.myCake.numOfCakes);
  
*/

/* Style 2:
   const num_Of_Cakez = useSelector( (state) => {
       return state.myCake.numOfCakes}
   ) 
   */

//Note : the above style is correct and in-short the above 2 style is same as 3rd style below:

const myFunc = (state) =>{
    console.log('HooksCakeContainer ==> myFunc called for useSelector Hook ==> ' , state);
    return state.myCake.numOfCakes;
}  
const num_Of_Cakez = useSelector(myFunc);

const dispatchCake= useDispatch();


    return (
        <div>
             <hr/>
            <h3>Using useSelector  </h3>
            <h2>Number of Cakes : {num_Of_Cakez}</h2>
            <button onClick={() => dispatchCake(buyCake())}> Buy Cake </button>  
            <hr/>
        </div>
    )
}

export default HooksCakeContainer
