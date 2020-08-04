import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/header'
import Footer from '../Footer/footer'

function CvPage(props) {
    return(
    <div>
        <Header />
        <div className="container">
            <div className="offset-2 col-8">
                <br />
                <h3>CV</h3>
                <Link to="/assets/AbhishekCV.pdf">1 Page CV</Link>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default CvPage;