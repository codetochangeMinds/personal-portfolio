import React, { Component } from 'react'
import { Link, Router } from 'react-router-dom';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="horizontal-line">
                <nav className="navbar navbar-expand-md navbar-light col-10 mx-auto">
                    <div className="offset-md-2">
                        <Link className="navbar-brand nav-brand-element" to="/">
                            <h4 className="font-weight-normal">
                                Abhishek Yadav
                            </h4>
                        </Link>
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse offset-md-2 justify-content-center" id="navbarSupportedContent">
                        <h5 className="font-weight-normal">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="/"><h5>Home</h5></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="/cv"><h5>CV</h5></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link px-3" to="/blog"><h5>Blog</h5></Link>
                                </li>
                            </ul>
                        </h5>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
