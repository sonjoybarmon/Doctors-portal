import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ml-4 text-light active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                    
                            <li className="nav-item ml-4 text-ligth">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item ml-4 text-light">
                                <a className="nav-link" href="#">Dental Services</a>
                            </li>
                            <li className="nav-item ml-4 text-light">
                                <a className="nav-link" href="#">Reviwes </a>
                            </li>
                            <li className="nav-item ml-4 text-light">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item ml-4 text-light">
                                <a className="nav-link" href="#">Contacts Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default NavBar;