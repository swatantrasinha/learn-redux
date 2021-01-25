import React, { Component } from 'react'
import './UserComp.style.css';
import {connect} from 'react-redux';
import {fetchUsersAsync} from '../redux/user/user.action';

class Usercomp extends Component {
    constructor(props) {
        super(props);
        console.log('Usercomp ==> constructor !!! ');
    }

    componentDidMount() {
        console.log('Usercomp ==> componentDidMount !!! ');
        this.props.fetchUserz();
    }


displayUserList = (myList) => {
    console.log('displayUserList ==> user-list is : ' , myList);
    return myList.map((user,index) => {
        return (<h2 className="user-class" key={index}> {user.name}</h2>)
    })
}

    render() {
        return (
          <div>
             
              {
              this.props.userState.loading ? 
                            <h1>Loading ...</h1> 
                            :
                            //working
                            /* 
                              this.props.userState.user_list.map((user,index) => {
                                  return (
                                      <h2 key={index}> {user.name}</h2>
                                  )
                              })*/
                              this.displayUserList(this.props.userState.user_list)
              }
          </div>
        )
    }
}

const mapStateToProps = (complete_state) => {
    console.log('Usercomp ==> mapStateToProps ==> complete_state : ' , complete_state);
    return {
      userState : complete_state.myUser
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    console.log('Usercomp ==> mapDispatchToProps');
    return {
        fetchUserz : () => dispatch(fetchUsersAsync())
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Usercomp);