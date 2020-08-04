import React from 'react';
import Header from '../Header/header'
import Footer from '../Footer/footer'

import './home.css'

function Home() {
    return(
    <div> 
        <Header />
        <div className="container">
            <br />
            <br />
            <div className="row offset-md-2">
                <div className="col-md-6 col-4 padding-paragraph">
                    <p>My name is Abhishek Yadav. I graduated with a Bachelors in Computer Science and 
                    Engineering at IIT Jammu In 2020. I am currently employed at Eagle View as Software
                    Developement Engineer. I Love to broaden my passion and want to remove my blinker 
                    and want to see the world from larger perspective. Apart from Software Engineering 
                    I am interested in Cryptocurrency, 
                    Blockchain, Investement in Stock Market, Cognitive Science and Indian Philosophy. 
                    I write blog on above mentioned topics and you can find under the blog tab. In my free
                    time I love to write blog, read books on leadership and philosophy and MOOCing! 
                    </p>
                </div>
                <div className="col-md-4 col-8 padding-image">
                    <p><img src={process.env.PUBLIC_URL + '/personalPhoto.jpg'} className="img-fluid" alt="personal image" width="250" height="250" /></p>
                </div>
            </div> 
            <div className="offset-md-2 col-md-8 padding-paragraph"> 
                <p>
                    In Summer 2018 I interned at RC Bose Center for Cryptology and Security and worked on 
                    Blockchain and Cryptocurrency under <a href="https://www.uel.ac.uk/staff/b/sanjay-bhattacherjee">
                    Dr. Sanjay Bhattacherjee</a>. In Summer 2019 I got a scholarship from Mathematics department of University
                    of Padua and during the time I worked on developing a Blockchain based solution for Digital Forensics under 
                    <a href="https://www.math.unipd.it/~conti/"> Dr. Mauro Conti</a>.
                </p>
            </div>
            <br />
            <br />
        </div>
        <Footer />
    </div>
    )
}

export default Home