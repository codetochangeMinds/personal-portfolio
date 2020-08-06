import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../Header/header'
import Footer from '../Footer/footer'
import './blog.css'

function Blog() {
    return(
    <div>
        <Header />
        <br />
        <div className="container container-padding">
            <div className="row offset-md-2">
                <div className="card card-style" >
                    <Link to="blog/experiences-blog">
                        <img src={process.env.PUBLIC_URL + '/Images/experiencesLogo.jpeg'} className="card-img-top" alt="CryptoCurrency" />
                        <div className="card-body">
                            <h5 className="card-title">Experiences</h5>
                            <p className="card-text">This bucket contains blogs related to Personal Experiences.</p>
                        </div>
                    </Link>
                </div>
                <div className="card card-style offset-md-1" >
                    <Link to="blog/blockchainCrypto-blog">
                        <img src={process.env.PUBLIC_URL + '/Images/blockchainCryptoLogo.png'} className="card-img-top" alt="CryptoCurrency" />
                        <div className="card-body">
                            <h5 className="card-title">Blockchain & CryptoCurrency</h5>
                            <p className="card-text">This bucket contains blogs on Use Cases of Blockchain and CryptoCurrency.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div> 
                <br />
            </div>
            <div className="row offset-md-2">
                <div className="card card-style" >
                    <Link to="blog/cognitive-science-blog">
                        <img src={process.env.PUBLIC_URL + '/Images/cognitiveScienceLogo.png'} className="card-img-top" alt="CryptoCurrency" />
                        <div className="card-body">
                            <h5 className="card-title">Cognitive Science</h5>
                            <p className="card-text">This bucket contains blogs related to Cognitive Science.</p>
                        </div>
                    </Link>
                </div>
                <div className="card card-style offset-md-1" >
                    <Link to="blog/financePolicies-blog">
                        <img src={process.env.PUBLIC_URL + '/Images/financePoliciesLogo.png'} className="card-img-top" alt="CryptoCurrency" />
                        <div className="card-body">
                            <h5 className="card-title">Finance & Policies</h5>
                            <p className="card-text">This bucket contains discussion of the news related to Finance and Policies.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Blog;