import React from 'react'
import NavBar from './NavBar'
import loadingImg from '../img/loading.gif'

const CreateQPage = (props) => (
     props.loading ? <img style={{ marginLeft: "45vw", marginTop: "35vh", width: "150px", height: "150px"}} src={loadingImg} />  :
     <div>

     <NavBar />

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