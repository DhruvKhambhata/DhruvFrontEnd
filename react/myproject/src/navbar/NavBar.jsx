import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div  >
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 float-end">
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">About Us</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Contact Us</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Gallery</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Know Me</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
      </div>
    )
  }
}

export default NavBar