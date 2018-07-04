import React from "react";
import NavBar from "./NavBar";
import TimeAgo from "react-timeago";
import loadingImg from "../img/loading.gif";

var answeredQuestions = [];

// {question.optionOne.votes >= 1 ? question.optionOne.votes.map(vote => {

//            } ): question.optionOne.vote }

const HomePage = props =>
  props.loading ? (
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
      {
        (answeredQuestions = Object.keys(props.usersResponses[0].answers).sort(
          (a, b) => props.questions[b].timestamp - props.questions[a].timestamp
        ))
      }

      {console.log(answeredQuestions)}
      <NavBar />

      <div className="row" style={{ marginTop: "60px" }}>
        <div className="col-lg-8 offset-lg-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                <a>Answered</a>
              </li>
              <li className="breadcrumb-item ">
                <a>Unanswered</a>
              </li>
            </ol>
          </nav>

          {answeredQuestions.map(aq => props.questions[aq]).map(question => (
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
                    a => a === props.selectUser
                  ).map(q => <span>&#x2705;</span>)
                  }
                </div>
                <div title={question.optionTwo.votes}>
                  {question.optionTwo.text}{" "}
                  {question.optionTwo.votes.filter(
                    a => a === props.selectUser 
                  ).map(q => <span>&#x2705;</span>)
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

export default HomePage;
