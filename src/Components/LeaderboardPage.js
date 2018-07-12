import React, { Component } from 'react';
import loadingImg from '../img/loading.gif'

class LeaderBoardPage extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render() {
        return (
            this.props.loading === true ? <img style={{ marginLeft: "45vw", marginTop: "35vh", width: "150px", height: "150px"}} src={loadingImg} />  : (
        <div>

          

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
        <td> <img style={{height: "60px", width: "60px", borderRadius: "50%", marginLeft: "15px", marginRight: "15px" }} 
    src={user.avatarURL ? user.avatarURL : '/img/default-user.png' } alt='Card image cap'/>
{user.name}</td>
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