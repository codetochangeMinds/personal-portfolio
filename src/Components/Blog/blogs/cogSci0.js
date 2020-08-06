import React from 'react';
import {Link} from 'react-router-dom';

import './blogs.css'
import Header from '../../Header/header'

function CogSci0() {
    return(
    <div> 
        <Header />
        <div className="container">
            <div className="offset-md-1 col-md-10 word-spacing">
                <br />
                <div className="col-md-3">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/blog/cognitive-science-blog">Cognitive Science</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">0</li>
                    </ol>
                    </nav>
                </div>
                <div>
                    <h4 className="offset-md-3">Analysis of User Behaviour On Social Network</h4>
                    <br />
                    <p className="serif p light">
                    Social media usage contributes to most of the internet usage, as Humans being a 
                    social animal like to connect with their school friends, to the people who are 
                    like them, to mentors and many more. According to stastica, internet users spend 
                    an average of 142 minutes on social networking sites. Thus it is need of an hour 
                    to study the impact of social media on subjective well being and cognitive faculties.
                    </p>
                    <p className="serif p light ">
                        A passive usage of Social Media is a type of interaction when the user is just 
                        scrolling through the post or news feed while active use involves posting and 
                        communicating on platform for example updating the profile photo, status, sharing
                        latest accomplishment or about awesome vacation, sharing the best meal and 
                        commenting on friend’s post or private message involves an active usage.
                    </p>
                    <p className="serif p light">
                        University of Michigan students randomly assigned to read Facebook for 10 minutes 
                        were in a worse mood at the end of the day in comparison to the students assigned 
                        to post or talk to friends on Facebook. Some researchers hypothesized that passive 
                        consumption may lead to negative social comparison even worse than the offline as 
                        the people post on social media in a flattering way. In one of the studies by 
                        Cornell University it was found that scrolling the self profile boosts self 
                        affirmation. One of the research also suggests that passive usage lessens the 
                        effectiveness of subjective well being. All these studies confirm that there is a
                        huge difference between these two types of usage patterns. Thus the active and 
                        passive are set of two distinctive behaviours which need to be analyzed differently.
                    </p>
                    <p className="serif p light">
                        After a lot of research, facebook posts that the passive usage or mindless consumption 
                        can depress the user and they have committed to take action so the user can have an 
                        active participation on its platform. So there is risk with the passive usage and a 
                        good part of the story is that the Facebook administration is accepting the risk 
                        associated with passive usage and thus coming up with innovative ways and looking for 
                        methods to boost time well spent. Facebook after review from social psychologists, 
                        sociologists and social scientists have tried to understand user well being and working 
                        towards making Facebook a place where users can contribute in a positive way. Facebook 
                        had worked on improving the feed quality and tried to ensure one never misses the post 
                        posted by the friends whom one likes. They also have redesigned the comment feature for
                        better conversations and their ranking algorithm promotes posts that are personally 
                        informative. Thus identifying passive usage and showing flags is one feature that 
                        facebook has added but there is a larger space which needs to be explored and some 
                        research needs to be done as how this passive usage is affecting the adolescents.
                    </p>
                    <p className="serif p light">
                        The empirical evidence shows that people use Facebook passively most of the time. 
                        Late night scrolling at endless news feeds can give a momentary pleasure of 
                        dopamine, no matter how irrelevant the information may be that one finds. 
                        One may be preparing for the bed but it's not easy to give up craving for 
                        another digital content. These extended consumption sessions may not be good 
                        or satisfying and may develop a feeling of regret. It was found in a research
                        that people who used Facebook actively felt better or the same while users 
                        who used it passively felt worse [2015 study by Kross and Verduyn]. The cause 
                        of worse feelings mainly attribute to envy and social comparisons and further 
                        it was found that 20% of envy inducing situations that experiment participants
                        experienced were due to Facebook. In one of the studies it was found that 
                        liking and link clicking led to decline in mental health [longitudinal study
                        by Shakya and Christakis in 2017]. In contrast some studies show positive 
                        effects due to active usage of social media [NPR]. In support of the active
                        usage one of the studies shows that directly communicating with friends 
                        led participants to have a pleasant feeling but not at the time of passive
                        usage. 
                    </p>
                    <p className="serif p light">
                        Our brains just didn’t evolve to resist a glowing, moving screen full of 
                        random facts and bottomless entertainment[1]. The Facebook model revolves 
                        around attention and there is a famous proverb in America that “There are 
                        No Free Lunches” and that means there is little chance of facebook working 
                        towards reducing average time spent by the users as it will be against their 
                        business model. In simple terms, the more time spent on Facebook more the views 
                        will soar up and more will be revenue. Thus the negative impact of facebook usage
                        be explored and we need more studies on the passive usage of other social networking 
                        sites.
                    </p>
                    <br />
                    <hr />
                </div>
            </div>
        </div>
    </div>
    )
}

export default CogSci0;