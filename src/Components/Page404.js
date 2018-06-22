import React from 'react'
import NavBar from './NavBar'

const Page404 = (props) => (
 <div>

<NavBar/>


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