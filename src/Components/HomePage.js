import React, {Component} from "react";
import TimeAgo from "react-timeago";
import loadingImg from "../img/loading.gif";

// var unAnsweredQuestions = []
// var unAnswer=[]
// var answer = []

export default class HomePage extends Component {
constructor(props){
  super(props)
  this.state={
      tabAnswered: true
  }
  this.toogleTab = this.toogleTab.bind(this)
}

toogleTab(){
  this.setState({
    tabAnswered: !this.state.tabAnswered
  })

}

render(){
  return (
     this.props.loading ? (
    <img
      style={{
        marginLeft: "45vw",
        marginTop: "35vh",
        width: "150px",
        height: "150px"
      }}
      alt="Loading..."
      src={loadingImg}
    />
  ) : (
    <div>
        {/*
        console.log (unAnsweredQuestions = Object.keys(props.usersResponses[0].answers).sort(
          (a, b) => props.questions[b].timestamp - props.questions[a].timestamp
        ).map(aq => props.questions !== props.questions[aq])     ) 
       */}

  
      <div className="row" style={{ marginTop: "60px" }}>
        <div className="col-lg-8 offset-lg-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className={"breadcrumb-item "+ (this.state.tabAnswered === true ?  'active' : ''  )  } 
              onClick={this.toogleTab}>
                <a>Unanswered</a>
              </li>
              <li className={"breadcrumb-item "+ (this.state.tabAnswered === false ?  'active' : ''  )  }
              onClick={this.toogleTab}>
                <a>Answered</a>
              </li>
            </ol>
          </nav>

          {/*{
            answer = console.log('fixe: ',Object.keys(props.usersResponses[0].answers)
  .sort((a, b) => props.questions[b].timestamp - props.questions[a].timestamp)
  .map(aq => props.questions[aq]).map(question => question)
            )
          }*/}

  { this.state.tabAnswered === false ? Object.keys(this.props.usersResponses[0].answers)
  .sort((a, b) => this.props.questions[b].timestamp - this.props.questions[a].timestamp)
  .map(aq => this.props.questions[aq]).map(question => (
            <div
              className="card"
              style={{ marginBottom: "20px" }}
              key={question.id}
            >
              <div className="card-body">
                <h5 className="card-title">
                  Author: {question.author}{" "}
                  <TimeAgo date={new Date(question.timestamp)} />{" "}
                </h5>
                <div style={{ marginRight: "15px" }}>
                  {question.optionOne.text}{" "}
                  {question.optionOne.votes.filter(
                    a => a === this.props.selectUser
                  ).map(q => <span>&#x2705;</span>)
                  }
                </div>
                <div title={question.optionTwo.votes}>
                  {question.optionTwo.text}{" "}
                  {question.optionTwo.votes.filter(
                    a => a === this.props.selectUser 
                  ).map(q => <span>&#x2705;</span>)
                  }
                </div>
              </div>
            </div>
          ))
          : ''
          }

 {/*
 obtem-se as perguntas que o utilizador respondeu
 { 
   answer = Object.keys(props.usersResponses[0].answers)
  .sort((a, b) => props.questions[b].timestamp - props.questions[a].timestamp)
  .map(aq => props.questions[aq]).map(ak => ak.id)
            
 }
 */}
          {/*
          obtem-se as perguntas que o utilizador não respondeu
          { unAnswer = Object.keys(props.questions).sort(
          (a, b) => props.questions[b].timestamp - props.questions[a].timestamp
        ).filter(ak => ak = !answer.includes(ak)  )  }
        */}
    

 {/*{ unAnswer = Object.keys(props.questions).sort(
          (a, b) => props.questions[b].timestamp - props.questions[a].timestamp
        ).filter(ak => ak = !Object.keys(props.usersResponses[0].answers)
  .sort((a, b) => props.questions[b].timestamp - props.questions[a].timestamp)
  .map(aq => props.questions[aq]).map(ak => ak.id).includes(ak)
  
    )  }*/}

    { this.state.tabAnswered === true ?
     Object.keys(this.props.questions).sort(
          (a, b) => this.props.questions[b].timestamp - this.props.questions[a].timestamp
        ).filter(ak => ak = !Object.keys(this.props.usersResponses[0].answers)
  .sort((a, b) => this.props.questions[b].timestamp - this.props.questions[a].timestamp)
  .map(aq => this.props.questions[aq]).map(ak => ak.id).includes(ak)
  
    ).map(ua => this.props.questions[ua]).map(ua =>
     
     (
        <div
              className="card"
              style={{ marginBottom: "20px" }}
              key={ua.id}
            >
            
              <div className="card-body">
                <h5 className="card-title">
                  Author: {ua.author}{" "}
                  <TimeAgo date={new Date(ua.timestamp)} />{" "}
                </h5>
                <div style={{ marginRight: "15px" }}>
                  {ua.optionOne.text}
                </div>
                <div title={ua.optionTwo.votes}>
                  {ua.optionTwo.text}
                </div>
              </div>
            </div>


      
     ) 
     
     )
     : ''
    }
    

        </div>
      </div>
    </div>

  ) 
  
  );
}

}

