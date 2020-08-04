import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import Header from '../Header/header';

function Footer() {
    return(
    <div className="footer">
        <hr className="horizontal-line"/>
        <div className="container">
            <div className="offset-2 footer-padding">
                <div className="row">  
                    <div className="col-6">
                        <p className="paragraph-margin">
                            <h5>Abhishek Yadav &ensp;<a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/abhishek-yadav-3239b0152/"><i className="fa fa-linkedin"></i></a>
                                &nbsp;<a className="btn btn-social-icon btn-github" href="https://github.com/codetochangeMinds"><i className="fa fa-github"></i></a>
                            </h5>
                        </p>
                        <ul className="list-unstyled">
                            <li>
                                <a href="mailto:raoabhi31031997@gmail.com">raoabhi31031997@gmail.com</a>
                            </li>
                            <li>
                                <a href="mailto:2016ucs0017@iitjammu.ac.in">2016ucs0017@iitjammu.ac.in</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <p>
                            Template Credits: <a href="https://martiansideofthemoon.github.io/">Martian</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;