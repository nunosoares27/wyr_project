import React, { Component } from 'react';
import NavBar from './NavBar'
import loadingImg from '../img/loading.gif'

class LeaderBoardPage extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render() {
        return (

            console.log(this.props.users),
            this.props.loading ? <img style={{ marginLeft: "45vw", marginTop: "35vh", width: "150px", height: "150px"}} src={loadingImg} />  : (
        <div>

            <NavBar/>


            <div className="row" style={{ marginTop: "60px"}}>
            <div className="col-lg-8 offset-lg-2">
                <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">Leaderboard</li>
            </ol>
            </nav>

            <table className="table table-dark table-striped">
    <thead>
      <tr>
        <th>Rank</th>
        <th>User</th>
        <th>Questions Created</th>
        <th>Questions Answered</th>
      </tr>
    </thead>
    <tbody>
        {
            Object.values(this.props.users).map(user => (
            <tr key={user.id}>
        <td>1</td>
        <td>{user.name}</td>
        <td>{user.questions.length}</td>
        <td>{Object.values(user.answers).length}</td>
      </tr>
        )) 
        
        } 
        
      
  
    </tbody>
  </table>

        </div>
</div>





            </div> )
        );
    }
}

export default LeaderBoardPage;