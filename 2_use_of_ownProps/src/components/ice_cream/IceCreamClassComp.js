import React, { Component } from 'react';
import {buyIceCream,returnIceCream} from '../../redux/index';
import {connect} from 'react-redux';
import './IceCreamHookComp.style.css';

 class IceCreamClassComp extends Component {
    constructor(props) {
        super(props);
        console.log('IceCreamClassComp ==> constructor');
    }


    render() {
        return (
           <div>
            <h1>IceCream Container </h1>
             
             <h2>IceCream Left in Shop : {this.props.IceCreamClassComp} </h2>
             <button className="iceCream-btn-class" onClick={this.props.purchaseIceCream}> Buy IceCream</button>
             <button className="iceCream-btn-class" onClick={this.props.returnBackIceCream}> Return IceCream</button>
           </div>
        )
    }
}

const mapStateToProps = (complete_state) => {
    console.log('IceCreamClassComp ==> mapStateToProps ==> complete_state : ' , complete_state);
    return {
        IceCreamClassComp : complete_state.myIceCream.num_of_iceCream
    }
}

const mapDispatchToProps = (dispatchIceCream) => {
    console.log('IceCreamClassComp ==> mapDispatchToProps');
    return {
      purchaseIceCream : () => dispatchIceCream(buyIceCream()),
      returnBackIceCream : () => dispatchIceCream(returnIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (IceCreamClassComp);
