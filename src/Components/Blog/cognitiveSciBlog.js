import React from 'react';
import {Link} from 'react-router-dom'

import Header from '../Header/header'
import Footer from '../Footer/footer'

function CogSciBlog() {
    return(
    <div>
        <Header />
            <div className="container">
                <div className="offset-md-2">
                    <br/>
                    <div className="col-md-4">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">CognitiveScience-Blog</li>
                        </ol>
                        </nav>
                    </div>
                    <div className="col-md-4">
                        <h3>Cognitve Science</h3>
                    </div>
                    <div className="col-md-8">
                        <img src={process.env.PUBLIC_URL + '/Images/cognitiveScienceLogo.png'} width="100%" height="200px" alt="Cognitive Science" />
                    </div>
                    <br />
                    <br />
                    <div>
                        <ul>
                            <li><Link to="cognitive-science-blog/0">Analysis of User Behaviour On Social Media</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
    )
}

export default CogSciBlog;