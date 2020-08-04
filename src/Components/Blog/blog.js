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
            <div className="row offset-2">
                <div className="card card-style" >
                    <Link to="blog/crypto-blog">
                        <img src={process.env.PUBLIC_URL + '/cryptocurrencyLogo.png'} className="card-img-top" alt="CryptoCurrency" />
                        <div className="card-body">
                            <h5 className="card-title">CryptoCurrency</h5>
                            <p className="card-text">This bucket contains blogs related to CryptoCurrency and finance part of the CryptoCurrency.</p>
                        </div>
                    </Link>
                </div>
                <div className="card card-style offset-1" >
                    <Link to="blog/blockchain-blog">
                        <img src={process.env.PUBLIC_URL + '/blockchainLogo.png'} className="card-img-top" alt="CryptoCurrency" />
                        <div className="card-body">
                            <h5 className="card-title">Blockchain</h5>
                            <p className="card-text">This bucket contains blogs on Use Cases of Blockchain and how this technology is making transformation.</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div> 
                <br />
            </div>
            <div className="row offset-2">
                <div className="card card-style" >
                    <Link to="blog/cognitive-science-blog">
                        <img src={process.env.PUBLIC_URL + '/cognitiveScienceLogo.png'} className="card-img-top" alt="CryptoCurrency" />
                        <div className="card-body">
                            <h5 className="card-title">Cognitive Science</h5>
                            <p className="card-text">This bucket contains blogs related to Cognitive Science.</p>
                        </div>
                    </Link>
                </div>
                <div className="card card-style offset-1" >
                    <Link to="blog/finance-blog">
                        <img src={process.env.PUBLIC_URL + '/financeLogo.png'} className="card-img-top" alt="CryptoCurrency" />
                        <div className="card-body">
                            <h5 className="card-title">Finance</h5>
                            <p className="card-text">This bucket covers some of the finance concepts and analysis on some of the financial news.</p>
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