import React, { Component, Fragment } from 'react'
import {_getUsers, _getQuestions} from './_DATA'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import CreateQPage from './Components/CreateQPage'
import Page404 from './Components/Page404'
import LeaderboardPage from './Components/LeaderboardPage'
import { Route, Switch} from "react-router-dom"
import './App.css';


// let userid = '';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      loading: true,
      selectUser: '',
      questions: [],
      userLogin: false
    }
    this.selectUser = this.selectUser.bind(this)
    this.createQuestion = this.createQuestion.bind(this)
  }

  createQuestion(res){
    this.setState({
      questions: {...this.state.questions, [res.id]: res }
    })
  }

  componentDidMount() {
   
 
    _getUsers().then(
      (response) => {
        this.setState({
          users: response,
          loading: true,
          selectUser: 'tylermcginnis',
          selectIcon: '/img/mcginnis.jpg'
        })});
    

_getQuestions().then(
      (response) => {
        this.setState({
          questions: response,
          loading: false,
        });
  });

}
componentDidUpdate(prevProps, prevState) {
  localStorage.setItem('loginUserId', this.state.selectUser)
  localStorage.setItem('loginUserIcon', this.state.selectIcon)
  console.log( localStorage.getItem('loginUserIcon') )   
}

  selectUser(userid){
   if (userid !== '') {
      this.setState({
      selectUser: userid,
      selectIcon: Object.values(this.state.users).filter(user => user.id === userid).map(u => u.avatarURL)
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
          {localStorage.getItem('loginUserId') !== '' ? (<Fragment>
         <Route exact path="/" render={() => (<LoginPage onSelect={this.selectUser} users={this.state.users} selectUser={this.state.selectUser} loading={this.state.loading} />
         )} />
         <Route exact path="/leaderboard" render={() => ( <LeaderboardPage  selectUser={this.state.selectUser}  loading={this.state.loading} /> ) } />
         <Route exact path="/home" render={() => ( <HomePage usersResponses={Object.values(this.state.users).filter( user => user.id === this.state.selectUser)}
             selectUser={this.state.selectUser} questions={this.state.questions} 
             loading={this.state.loading} /> ) } />
         <Route exact path="/addquestion" render={() => ( <CreateQPage createQuestion={this.createQuestion}  selectUser={this.state.selectUser} loading={this.state.loading} /> ) } />
           </Fragment> )  : 
         <Route component={Page404}/>
          }
       </Switch>
      </div>
    );
  }
}

export default App;
