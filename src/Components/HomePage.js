import React from "react"
import { Link } from "react-router-dom"
import TimeAgo from 'react-timeago'
import loadingImg from '../img/loading.gif'

// {question.optionOne.votes >= 1 ? question.optionOne.votes.map(vote => {
            
//            } ): question.optionOne.vote }

const HomePage = props => (
   props.loading ? <img style={{ marginLeft: "45vw", marginTop: "35vh", width: "150px", height: "150px"}} src={loadingImg} />  :
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
  <div className="col-lg-8 offset-lg-2">
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item active"><a href="#">All</a></li>
    <li className="breadcrumb-item"><a href="#">Awnsered</a></li>
    <li className="breadcrumb-item " ><a href="#">Unawnsered</a></li>
  </ol>
</nav>

{  
        Object.values(props.questions).map((question) => 
          (
                <div className="card" style={{ marginBottom: "20px"}} key={question.id}>
      <div className="card-body">
        <h5 className="card-title">Author: {question.author} <TimeAgo date= {new Date(question.timestamp) } /> </h5>
        <button type="button" style={{marginRight: "15px"}} href="#" className="btn btn-primary">{question.optionOne.text} 
          <span style={{marginLeft: "15px"}} className="badge badge-secondary" data-toggle="tooltip" title={question.optionOne.votes } data-placement="bottom">Votes: {question.optionOne.votes.length}
            </span></button>
         <button href="#"  title={question.optionTwo.votes } className="btn btn-primary">{question.optionTwo.text} <span style={{marginLeft: "15px"}} className="badge badge-secondary">Votes: {question.optionTwo.votes.length}</span></button>
      </div>
    </div>
           ) )
      
      }


  </div>
  </div>

  </div>
);

export default HomePage;
