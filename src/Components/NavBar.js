import React from 'react'
import { NavLink, withRouter } from "react-router-dom"

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
        <NavLink className="nav-link" to="/leaderboard">Leader board</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/addquestion">Add a question</NavLink>
      </li>
    </ul>
    <span className="navbar-text ml-auto" style={{color: "white", marginRight: "20px"}}>Welcome 
     
      <img style={{height: "60px", width: "60px", borderRadius: "50%", marginLeft: "15px", marginRight: "15px" }} 
    src={localStorage.getItem('loginUserIcon') ? localStorage.getItem('loginUserIcon') : '/img/default-user.png' } alt='Card image cap'/>

        {localStorage.getItem('loginUserId').toUpperCase()}</span>
     <button onClick={ () => { 
        localStorage.setItem('loginUserId', '')
        localStorage.setItem('loginUserIcon', '')
        props.history.push('/login');
       }  } className="btn-outline-danger navbar-text" style={{color: "white"}}>
         
     Log Out

    </button>
  
  </div>
</nav>

)
export default withRouter(NavBar)