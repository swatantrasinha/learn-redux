import React, { Component } from 'react';
import { buyIceCream, returnIceCream } from '../../redux/index';
import {useSelector,useDispatch} from 'react-redux';
import './IceCreamHookComp.style.css';

const IceCreamHookComp = (props) =>  {
    
    
    /* working 
    const getIceCreamState = (complete_state) =>{
        console.log('IceCreamHookComp ==> getIceCreamState for useSelector Hook ==> complete_state ==> ' , complete_state);
        return complete_state.myIceCream.num_of_iceCream;
    } 
    const numOfIceCream = useSelector(getIceCreamState);
    */

    const numOfIceCream = useSelector((complete_state) => { //alternate way of writing
        console.log('IceCreamHookComp ==> useSelector ==> complete_state : ' , complete_state);
        return complete_state.myIceCream.num_of_iceCream;
    });

     const dispatchIceCream = useDispatch();

    return (
       <div>
            <h3>Using IceCream Component using Hook : useSelector and useDispatch </h3>
            <h2>Number of Cakes : {numOfIceCream}</h2>
            <button className="iceCream-btn-class" onClick={() => dispatchIceCream(buyIceCream())}> Buy IceCream </button>  
            <button className="iceCream-btn-class" onClick={() => dispatchIceCream(returnIceCream())}> Return IceCream </button>  
       </div>
    )
}


export default IceCreamHookComp;
