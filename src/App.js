import React, { Component } from 'react'
import {_getUsers, _getQuestions} from './_DATA'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import { Route, Switch, Redirect } from "react-router-dom"
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
      questions: '',
    }
    this.selectUser = this.selectUser.bind(this);
  }

  componentDidMount() {
    _getUsers().then(
      (response) => {
        this.setState({
          users: response,
          loading: true,
          selectUser: 'tylermcginnis'
        });
  }
    ).catch((error) => {
    console.log(error);
  });

_getQuestions().then(
      (response) => {
        console.log(response);
        this.setState({
          questions: response,
          loading: false,
        });
  }
    ).catch((error) => {
    console.log(error);
  });

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
        <Switch>
         <Route exact path="/" render={() => (<LoginPage onSelect={this.selectUser} users={this.state.users} selectUser={this.state.selectUser} loading={this.state.loading} />
         )} />
         <Route path="/home" render={() => ( <HomePage questions={this.state.questions} /> ) } />
       </Switch>
      </div>
    );
  }
}

export default App;
