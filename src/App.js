import React, { Component, Fragment } from 'react'
// import {_getUsers, _getQuestions} from './_DATA'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import CreateQPage from './Components/CreateQPage'
import Page404 from './Components/Page404'
import LeaderboardPage from './Components/LeaderboardPage'
import NavBar from './Components/NavBar'
import {Route, Switch, withRouter} from "react-router-dom"
import './App.css';
import { connect } from 'react-redux'
import { LoginUser, LogOutUser } from './actions/authentication'
import { initialData } from './actions/common'
import { bindActionCreators } from 'redux'


// let userid = '';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      loading: false,
      selectUser: '',
      questions: [],
      userLogin: false
    }
    this.selectUser = this.selectUser.bind(this)
    this.createQuestion = this.createQuestion.bind(this)
    this.onUserLogin = this.onUserLogin.bind(this)
    this.onUserLogout = this.onUserLogout.bind(this)
  }

  onUserLogout(){
    this.props.LogOutUser()
  }

  onUserLogin(){
      this.props.LoginUser(this.state.selectUser)
  }

  createQuestion(res){
    this.setState({
      questions: {...this.state.questions, [res.id]: res },
    })
   
  }

  componentDidMount() {
      
       
       this.setState({
          selectUser: 'tylermcginnis',
          selectIcon: '/img/mcginnis.jpg'
        })

    this.props.initialData()


}
componentDidUpdate(prevProps, prevState) {
 
}

  selectUser(userid){
   if (userid !== '') {
      this.setState({
      selectUser: userid,
      selectIcon: Object.values(this.props.users).filter(user => user.id === userid).map(u => u.avatarURL)
    });
   
   }
   else {
     return 0;
   } 

  }

  render() {
    return (
      <div >
        <NavBar onUserLogout={this.onUserLogout}  loginUser={this.props.loginUser} selectIcon={this.state.selectIcon}   />
        <Switch>
          {this.props.loginUser !== null && this.props.loginUser !== undefined && this.props.loginUser !== ''  ? 
            ( 
              <Fragment>
            
             <Route path="/" exact render={() => (
                <HomePage  usersResponses={Object.values(this.props.users).filter( user => user.id === this.props.loginUser)}
             questions={this.props.questions}  loading={this.props.loading}
              /> ) } />

         <Route exact  path="/leaderboard" render={() => ( <LeaderboardPage  users={this.props.users}   loading={this.props.loading} /> ) } />
         <Route exact path="/addquestion" render={() => ( <CreateQPage   loading={this.props.loading} /> ) } />
           </Fragment> 
           )
           : (
              <Route exact={true} path="/" render={() => (<LoginPage 
              onUserLogin={this.onUserLogin} 
              onSelect={this.selectUser}
              selectUser={this.state.selectUser} 
              loading={this.props.loading}
              />
         )} /> )
          }
             <Route component={Page404}/>
       </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
     loginUser: state.loginUser,
     users: state.users,
     questions: state.questions,
     loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    LoginUser, LogOutUser, initialData
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App) );
