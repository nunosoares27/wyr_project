import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = (props) => (
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">WouldYouRather</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item" >
        <NavLink className="nav-link"  to="/home">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/leaderboard">Leader board</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/addquestion">Add a question</NavLink>
      </li>
    </ul>
  </div>
</nav>

)
export default NavBar