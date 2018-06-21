import React from "react"
import { Link } from "react-router-dom"
import TimeAgo from 'react-timeago'

const HomePage = props => (
  <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">WouldYouRather</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/leaderboard">Leader board</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/addquestion">Add a question</Link>
      </li>
    </ul>
  </div>
</nav>

<div className="row" style={{ marginTop: "60px"}}>
  <div className="col-lg-6 offset-lg-3">
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Awnsered</a></li>
    <li className="breadcrumb-item active" aria-current="page">Unawnsered</li>
  </ol>
</nav>

{  
        Object.values(props.questions).map((question) => 
          (
                <div className="card" style={{ marginBottom: "20px"}} key={question.id}>
      <div className="card-body">
        <h5 className="card-title">Author: {question.author} <TimeAgo date= {new Date(question.timestamp) } /> </h5>
        <a href="#" className="btn btn-primary">{question.optionOne.text} <span className="badge badge-secondary">Votes: {question.optionOne.votes.length}</span></a>
         <a href="#" className="btn btn-primary">{question.optionTwo.text} <span className="badge badge-secondary">Votes: {question.optionTwo.votes.length}</span></a>
      </div>
    </div>
           ) )
      
      }


  </div>
  </div>

  </div>
);

export default HomePage;
