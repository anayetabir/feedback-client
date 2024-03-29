import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="#">FeedBack</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item " href="#">Bugs</a></li>
                                <li><a class="dropdown-item " href="#">Feature Requests</a></li>
                                <li class="dropdown-item " >Data Requests</li>
                                <li><a class="dropdown-item " href="#">Mobile Bugs</a></li>
                                <li><a class="dropdown-item " href="#">Mobile Features</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled text-white" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div class="d-flex" role="search">
                        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button type="button" class="btn btn-outline-success">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
