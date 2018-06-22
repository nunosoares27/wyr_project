import React from 'react'
import { Link } from "react-router-dom"


const Page404 = (props) => (
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
    <li className="breadcrumb-item">404 - Page not found</li>
  </ol>
</nav>

 <div className="card" style={{ marginBottom: "20px"}} >
      <div className="card-body">
      <h1 className="card-title text-center" >404</h1>
     <h2 className="text-center">Oops, the page you're
looking for does not exist.</h2>
      </div>
    </div>

</div>
</div>





</div>
)

export default Page404