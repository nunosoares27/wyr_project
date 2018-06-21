import React from "react"

const HomePage = props => (
  <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">WouldYouRather</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Dashboard</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Leader board</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Add a question</a>
      </li>
    </ul>
  </div>
</nav>

<div className="row" style={{ marginTop: "60px"}}>
  <div className="col-lg-6 offset-lg-3">
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Awnsered</a></li>
    <li className="breadcrumb-item active" aria-current="page">Unawnsered</li>
  </ol>
</nav>
    <div className="card" style={{ marginBottom: "20px"}}>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

     <div className="card" style={{ marginBottom: "20px"}}>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

      <div className="card" style={{ marginBottom: "20px"}}>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  </div>
  </div>

  </div>
);

export default HomePage;
