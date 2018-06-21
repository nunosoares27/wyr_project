import React, { Component } from 'react'
import {_getUsers} from './_DATA'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import './App.css';

// tenho de tirar o export do users e questions no _DATA.js e usar o fetch para o metodo getusers e getquestions
let userid = '';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: '',
      loading: true,
      selectUser: '',
    }
    this.selectUser = this.selectUser.bind(this);
  }

  componentDidMount() {
    _getUsers().then(
      (response) => {
        console.log(response);
        this.setState({
          users: response,
          loading: false,
          selectUser: 'tylermcginnis'
        });
  }
    ).catch((error) => {
    console.log(error);
  });;
}

  selectUser(userid){
   if (userid !== '') {
      this.setState({
      selectUser: userid,
    });
   }
   else {
     return 0;
   }
    
   
  }

  render() {
    return (
      <div >
         <LoginPage onSelect={this.selectUser} users={this.state.users} selectUser={this.state.selectUser} loading={this.state.loading} /> 
          {/*<HomePage />*/}
      </div>
    );
  }
}

export default App;
