import React, { Component } from 'react'
import {_getUsers, _getQuestions} from './_DATA'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import CreateQPage from './Components/CreateQPage'
import Page404 from './Components/Page404'
import { Route, Switch} from "react-router-dom"
import './App.css';


// let userid = '';
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
         <Route exact path="/home" render={() => ( <HomePage questions={this.state.questions} loading={this.state.loading} /> ) } />
         <Route exact path="/addquestion" render={() => ( <CreateQPage loading={this.state.loading} /> ) } />
         <Route component={Page404}/>
       </Switch>
      </div>
    );
  }
}

export default App;
