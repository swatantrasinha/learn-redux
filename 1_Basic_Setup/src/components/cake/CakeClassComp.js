import React, { Component } from 'react'
import {buyCake,returnCake} from '../../redux/index';
import {connect} from 'react-redux';
import './CakeComp.style.css';

class CakeClassComp extends Component {
    constructor(props) {
        super(props);
        console.log('CakeClassComp ==> constructor');
    }

    render() {
        return (
          <div>
                <h1>Cake Container </h1>
             
                <h2>Cake Left in Shop : {this.props.numOfCake}</h2>
                <button className="cake-btn-class" onClick = {this.props.purchaseCake}> Buy Cake</button>
                <button className="cake-btn-class" onClick = {this.props.returnBackCake}> Return Cake</button>

             
          </div>
        )
    }
}

const mapStateToProps = (complete_state) => {
  console.log('CakeClassComp ==> mapStateToProps ==> complete_state : ' , complete_state);
  return {
    numOfCake : complete_state.myCake.num_of_cakes
  }
}

const mapDispatchToProps = (dispatchCake) => {
  console.log('CakeClassComp ==> mapDispatchToProps');
  return {
    purchaseCake : () => dispatchCake(buyCake()),
    returnBackCake : () => dispatchCake(returnCake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeClassComp);


