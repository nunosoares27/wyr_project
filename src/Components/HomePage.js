import React from "react"
import NavBar from './NavBar'
import TimeAgo from 'react-timeago'
import loadingImg from '../img/loading.gif'

// {question.optionOne.votes >= 1 ? question.optionOne.votes.map(vote => {
            
//            } ): question.optionOne.vote }

const HomePage = props => (
   props.loading ? <img style={{ marginLeft: "45vw", marginTop: "35vh", width: "150px", height: "150px"}} src={loadingImg} />  :
  <div>

  <NavBar />

<div className="row" style={{ marginTop: "60px"}}>
  <div className="col-lg-8 offset-lg-2">
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item active"><a href="#">Answered</a></li>
    <li className="breadcrumb-item " ><a href="#">Unanswered</a></li>
  </ol>
</nav>

{  
        Object.values(props.questions).map((question) => 
          (
                <div className="card" style={{ marginBottom: "20px"}} key={question.id}>
      <div className="card-body">
        <h5 className="card-title">Author: {question.author} <TimeAgo date= {new Date(question.timestamp) } /> </h5>
        <div style={{marginRight: "15px"}} href="#" >{question.optionOne.text} 
          </div>
         <div   title={question.optionTwo.votes } >{question.optionTwo.text} </div>
      </div>
    </div>
           ) )
      
      }


  </div>
  </div>

  </div>
);

export default HomePage;
