import React from 'react'
import { Link } from "react-router-dom"
import loadingImg from '../img/loading.gif'

const CreateQPage = (props) => (
     props.loading ? <img style={{ marginLeft: "45vw", marginTop: "35vh", width: "150px", height: "150px"}} src={loadingImg} />  :
     <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">WouldYouRather</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/leaderboard">Leader board</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/addquestion">Add a question</Link>
      </li>
    </ul>
  </div>
</nav>

<div className="row" style={{ marginTop: "60px"}}>
  <div className="col-lg-8 offset-lg-2">
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item">Add a Question</li>
  </ol>
</nav>

 <div className="card" style={{ marginBottom: "20px"}} >
      <div className="card-body">
        <form>
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="First Answer"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Second Answer"/>
    </div>
  </div>
  <button style={{ marginTop: "35px"}} className="btn btn-outline-default btn-md">Cancel</button>
  <button style={{ marginTop: "35px"}} className="btn btn-outline-success btn-md">Create</button>
</form>
      </div>
    </div>

</div>
</div>





</div>
);

export default CreateQPage;