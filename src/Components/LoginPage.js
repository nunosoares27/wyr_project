import React from "react"
import {Link} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import loadingImg from '../img/loading.gif'

//  Object.values(props.users).map((user) => ({ key: user.id,value: user.name,text: user.name, image: { avatar: true, src: user.avatarURL } })) 

const LoginPage = (props) => (
  props.loading ? <img style={{ marginLeft: "45vw", marginTop: "35vh", width: "150px", height: "150px"}} src={loadingImg} />  : (
 <div className="container" >
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12" style={{ marginTop: "5vh", marginBottom: "5vh"}}>
           <h1 className="text-center">
          Login
        </h1>
        <p className="text-center">Select one user</p>
        </div>
      {  
        Object.values(props.users).map((user) => 
          (
             <div className="col-lg-4 col-md-4 col-xs-6 col-sm-6" key={user.id} onClick={ () => props.onSelect(user.id)}>
          <div className={props.selectUser === user.id ? 'card activeUser' : 'card' } style={{width: "18rem"}}>
  <img className="card-img-top" style={{height: "250px"}} src={user.avatarURL ? user.avatarURL : '/img/default-user.png'} alt="Card image cap"/>
  <div className="card-body">
    <h5 className='card-title'>{user.name}</h5>
  </div>
   </div>
         </div>
           ) )
      
      }
      <div className="col-lg-12 col-md-12 col-sm-12 text-center" style={{ marginTop: "5vh", marginBottom: "5vh"}}>
        
          <Link to="/home">  <button className="btn btn-outline-success btn-lg">Login</button> </Link>
           
        </div>

       </div>
  </div>

  )



);

export default LoginPage;
