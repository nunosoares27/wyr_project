import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

class DetailQuestionPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectOption: ''
        }
    }
    render(){
        const { question, questionAuthor, isAnswered, isOptionOneAnswered} = this.props
        const { selectOption } = this.state

         if(!question){
            return <Redirect to='/404' />
        }

        const optionOneVotes = question.optionOne.votes.length;
        const optionTwoVotes = question.optionTwo.votes.length;
        const percentageOptionOne = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2)
        const percentageOptionTwo = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(2)
   
        return (
            <div>
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col-lg-8 offset-lg-2">

              {
                isAnswered ?
 <div
                    className="card"
                    style={{ marginBottom: "20px" }}
                    
                  >
                    <div>
                      <h5 className="card-header">
                      Question Details {" "}
                       
                      </h5>
                      <div
                        style={{
                          paddingRight: "25px",
                          paddingTop: "25px",
                          paddingLeft: "25px"
                        }}
                      >

                       <div style={{ marginBottom: "50px"}}>
        <img src={questionAuthor.avatarURL} className="card-img-top" style={{height: "250px", width: "250px"}} alt={`Avatar of ${questionAuthor.name}`}/>
        <span style={{ fontSize: "25px", marginLeft: "25px"}}><b>Author: {questionAuthor.name}</b></span>
      </div>

                       {question.optionOne.text}  {isOptionOneAnswered ?<span style={{ marginLeft: "25px" }}>&#x2705; (your answer)</span> : null}
                       <div className="progress">
  <div class="progress-bar" role="progressbar" 
  style={{width: `${percentageOptionOne}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax={percentageOptionOne}></div>
  ({optionOneVotes} vote(s)| {percentageOptionOne}%)
</div>
                       
                      </div>
                      <div
                        style={{
                          paddingRight: "25px",
                          paddingTop: "25px",
                          paddingLeft: "25px",
                          paddingBottom: "25px"
                        }}
                      >
                       {question.optionTwo.text}   {!isOptionOneAnswered ? <span style={{ marginLeft: "25px" }}>&#x2705; (your answer)</span> : null} 
                       <div className="progress">
  <div class="progress-bar" role="progressbar" style={{width: `${percentageOptionTwo}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax={percentageOptionTwo}></div>
  ({optionTwoVotes} vote(s) | {percentageOptionTwo}%)
</div>
                     
                      </div>
                      <button
                        style={{ marginBottom: "25px", marginLeft: "25px" }}
                        onClick={() => {  this.props.history.push('/') }}
                        className="btn btn-outline-success btn-lg"
                      >
                        Back
                      </button>
                    </div>
                  </div>
: 
 <div
                    className="card"
                    style={{ marginBottom: "20px" }}
                    
                  >
                    <div>
                      <h5 className="card-header">
                       Select your option and submit {" "}
                       
                      </h5>
                      <div
                        style={{
                          paddingRight: "25px",
                          paddingTop: "25px",
                          paddingLeft: "25px"
                        }}
                      >
                      
                      </div>
                      <div
                        style={{
                          paddingRight: "25px",
                          paddingTop: "25px",
                          paddingLeft: "25px",
                          paddingBottom: "25px"
                        }}
                      >
                       
                      </div>
                      <button
                        style={{ marginBottom: "25px", marginLeft: "25px" }}
                        onClick={() => { }}
                        className="btn btn-outline-success btn-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
              }
              
                  </div>
                  </div>
                  </div>
        )
    }
}

const mapStateToProps = ({questions, users, loginUser }, props) => {
    const {id} = props.match.params
    const question = questions[id]
    const questionAuthor = users[question.author]
    const isOptionOneAnswered = question.optionOne.votes.includes(loginUser)
    const isOptionTwoAnswered = question.optionTwo.votes.includes(loginUser)
    const isAnswered = isOptionOneAnswered || isOptionTwoAnswered
    return {
        question,
        questionAuthor,
        isAnswered,
        isOptionOneAnswered
    }
}

export default withRouter(connect(mapStateToProps)(DetailQuestionPage))