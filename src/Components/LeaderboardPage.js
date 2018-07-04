import React, { Component } from 'react';
import NavBar from './NavBar'
import loadingImg from '../img/loading.gif'

class LeaderBoardPage extends Component {
    render() {
        return (
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
      <tr>
        <td>1</td>
        <td>Tyler</td>
        <td>4</td>
        <td>5</td>
      </tr>
     <tr>
        <td>1</td>
        <td>Tyler</td>
        <td>4</td>
        <td>5</td>
      </tr>
     <tr>
        <td>1</td>
        <td>Tyler</td>
        <td>4</td>
        <td>5</td>
      </tr>
    </tbody>
  </table>

        </div>
</div>





            </div> )
        );
    }
}

export default LeaderBoardPage;