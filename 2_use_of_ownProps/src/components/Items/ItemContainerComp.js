import React, { Component } from 'react';
import {buyCake,returnCake,buyIceCream,returnIceCream} from '../../redux/index';
import {connect} from 'react-redux';
import './ItemContainerComp.style.css';

class ItemContainerComp extends Component {
    constructor(props) {
        super(props);
        console.log('Itemcontainercomp !!! ==> constructor and props is ==>>>>>>>>>>>>>>>>>> ' , props);
    }



    render() {
        return (
           <div>
              <h1> Item is : 
               {
                    this.props.cake ? (<span>Cake</span>) : (<span>IceCream</span>)
                }
            </h1>

             
             <h2>  Items Left : {this.props.item_state}  </h2>
         
            <button className="item-btn-class" onClick={this.props.purchaseItem}> Buy Item</button>
             <button className="item-btn-class" onClick={this.props.returnBackItem}> Return Item</button>
               
           </div>
        )
    }
}
const mapStateToProps = (complete_state,ownProps) => {
    console.log('Itemcontainercomp ==> mapStateToProps ==> complete_state : ' , complete_state);
    console.log('Itemcontainercomp ==> mapStateToProps ==> ownProps.cake : ' , ownProps.cake);

    const itemState = ownProps.cake ? complete_state.myCake.num_of_cakes : complete_state.myIceCream.num_of_iceCream;
    console.log('itemState : ' , itemState);

    return {
        item_state : itemState
    }
}

const mapDispatchToProps = (dispatchItem,ownProps) => {
    console.log('ItemContainerComp ==> mapDispatchToProps');
    const itemType = ownProps.cake ;
    console.log('mapDispatchToProps ==> itemType is : ' , itemType);
    
    return {
      purchaseItem : () => ownProps.cake ? dispatchItem(buyCake()) : dispatchItem(buyIceCream()),
      returnBackItem : () => ownProps.cake ?  dispatchItem(returnCake()) : dispatchItem(returnIceCream())
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (ItemContainerComp);