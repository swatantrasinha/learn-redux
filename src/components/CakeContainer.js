import React, { Component ,PureComponent} from 'react'
import {buyCake} from '../redux/index';
import {connect} from 'react-redux';

 class Cakecontainer extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Cakecontainer => constructor !!!');
    }

    render() {
        return (
            <div>
                <hr/>
                    <h3>Using Connect with (mapStateToProps and mapDispatchToProps) </h3>
                        <h2>Number of Cakes :  {this.props.numOfCakez}</h2>
                    <button onClick={this.props.buyCake}> Buy Cake </button>
                <hr/>
         </div>
        )
    }
}

const mapStateToProps = state => {     //gets redux state as param and return an object - state is mapped to component props
    console.log('CakeContainer => mapStateToProps ==> state : ' , state);
    return {
        numOfCakez:state.myCake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => { //redux dispatch as param- map dispatch to action
    console.log('CakeContainer => mapDispatchToProps : ' );
    return{
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cakecontainer)
//export default Cakecontainer;

/*################################## */
// import React from 'react'
// import {buyCake} from '../redux/index';
// import {connect} from 'react-redux';

// function CakeContainer(props) {
//     console.log('CakeContainer => props ==> ' , props);
//     return (
//         <div>
//             <hr/>
//             <h3>Using Connect with (mapStateToProps and mapDispatchToProps) </h3>
//             <h2>Number of Cakes :  {props.numOfCakez}</h2>
//             <button onClick={props.buyCake}> Buy Cake </button>
//             <hr/>
//         </div>
//     )
// }


// const mapStateToProps = state => {     //gets redux state as param and return an object - state is mapped to component props
//     console.log('CakeContainer => mapStateToProps ==> state : ' , state);
//     return {
//         numOfCakez:state.myCake.numOfCakes
//     }
// }

// const mapDispatchToProps = dispatch => { //redux dispatch as param- map dispatch to action
//     console.log('CakeContainer => mapDispatchToProps : ' );
//     return{
//         buyCake: () => dispatch(buyCake())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)