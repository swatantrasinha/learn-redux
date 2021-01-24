import React from 'react'
import {buyIceCream} from '../redux/index'; //import action creator
import {connect} from 'react-redux';
import { BUY_ICECREAM } from '../redux/icerCream/iceCreamTypes'; //import type - constant

function IceCreamContainer(props) {
    console.log('IceCreamContainer ==> props ==> ' , props);
    return (
        <div>
            <hr/>
            <h3>Using Connect with (mapStateToProps and mapDispatchToProps) </h3>
            <h2>Number of IceCream : {props.numOfIceCreamz}</h2>
            <button onClick={props.buyIceCreamz}> Buy IceCream </button>
            <hr/>
        </div>
    )
}


const mapStateToProps = state => {     //gets redux state as param and return an object - state is mapped to component props
    console.log('IceCreamContainer => mapStateToProps : ' , state);
    return {
        numOfIceCreamz:state.myIceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => { //redux dispatch as param- map dispatch to action
    console.log('IceCreamContainer => mapDispatchToProps : ' );
    return{
        buyIceCreamz: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
