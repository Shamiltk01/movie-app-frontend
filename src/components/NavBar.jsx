import React from 'react'
import { Collapse, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Collapse, Ripple });
const NavBar = () => {
  return (
    <div>
 
<nav class="navbar navbar-expand-lg navbar-light bg-black">

  <div class="container">
  
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
    <img
  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
  height="16"
  alt="MDB Logo"
  loading="lazy"
  style={{ marginTop: '-1px' }}
/>
    </a>

  
    <button
      data-mdb-collapse-init
      class="navbar-toggler"
      type="button"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

 
    <div class="collapse navbar-collapse" id="navbarButtonsExample">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
      </ul>


      <div class="d-flex align-items-center">
        <button data-mdb-ripple-init type="button" class="btn btn-link px-3 me-2">
          Login
        </button>
        <button data-mdb-ripple-init type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
        <a
          data-mdb-ripple-init
          class="btn btn-dark px-3"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>

  </div>

</nav>
<br></br>
    </div>
  )
}

export default NavBar
