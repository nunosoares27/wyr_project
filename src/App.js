import React, { Component, Fragment } from 'react'
import {_getUsers, _getQuestions} from './_DATA'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import CreateQPage from './Components/CreateQPage'
import Page404 from './Components/Page404'
import LeaderboardPage from './Components/LeaderboardPage'
import NavBar from './Components/NavBar'
import {Route, Switch} from "react-router-dom"
import './App.css';


// let userid = '';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      loading: true,
      selectUser: '',
      loginUser:'',
      questions: [],
      userLogin: false
    }
    this.selectUser = this.selectUser.bind(this)
    this.createQuestion = this.createQuestion.bind(this)
    this.onUserLogin = this.onUserLogin.bind(this)
    this.onUserLogout = this.onUserLogout.bind(this)
  }

  onUserLogout(){
     this.setState({
        loginUser: '',
        selectIcon: ''
      })
  }

  onUserLogin(){
      this.setState({
        loginUser: this.state.selectUser,
        selectIcon: this.state.selectIcon
      })
  }

  createQuestion(res){
    this.setState({
      questions: {...this.state.questions, [res.id]: res },
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
  // localStorage.setItem('loginUserId', this.state.selectUser)
  // localStorage.setItem('loginUserIcon', this.state.selectIcon)  
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
        <NavBar onUserLogout={this.onUserLogout}  loginUser={this.state.loginUser} selectIcon={this.state.selectIcon}   />
        <Switch>
          {this.state.loginUser !== '' ? (<Fragment>
             <Route exact path="/home" render={() => ( <HomePage loginUser={this.state.loginUser} usersResponses={Object.values(this.state.users).filter( user => user.id === this.state.selectUser)}
             selectUser={this.state.selectUser} questions={this.state.questions} 
             loading={this.state.loading} /> ) } />
             <Route exact path="/login" render={() => ( <HomePage usersResponses={Object.values(this.state.users).filter( user => user.id === this.state.selectUser)}
             selectUser={this.state.selectUser} onUserLogin={this.onUserLogin} questions={this.state.questions} 
             loading={this.state.loading} /> ) } />
         <Route exact path="/leaderboard" render={() => ( <LeaderboardPage  users={this.state.users}  selectUser={this.state.selectUser}  loading={this.state.loading} /> ) } />
         <Route exact path="/addquestion" render={() => ( <CreateQPage createQuestion={this.createQuestion}  selectUser={this.state.selectUser} loading={this.state.loading} /> ) } />
           </Fragment> )  : 
           <Fragment>
             <Route exact path="/login" render={() => (<LoginPage onUserLogin={this.onUserLogin} onSelect={this.selectUser} users={this.state.users} selectUser={this.state.selectUser} loading={this.state.loading} />
         )} />
         <Route exact path="/leaderboard"  component={Page404}/>
          <Route exact path="/addquestion"  component={Page404}/>
          <Route exact path="/home"  component={Page404}/>
           <Route exact path="/"  component={Page404}/>
         </Fragment>
          }
       </Switch>
      </div>
    );
  }
}

export default App;
