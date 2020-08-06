import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

// import Header from './Components/Header/header'
// import Footer from './Components/Footer/footer'
import Home from './Components/Home/home'
import CvPage from './Components/CV/cv'
import CvDoc from './Components/CV/cvDoc'
import Blog from './Components/Blog/blog'
import ExperiencesBlog from './Components/Blog/experiencesBlog';
import CogSciBlog from './Components/Blog/cognitiveSciBlog';
import FinancePoliciesBlog from './Components/Blog/finance-policiesBlog';
import BlockchainCryptoBlog from './Components/Blog/blockchainCryptoBlog';
import CogSci0 from './Components/Blog/blogs/cogSci0';

function App() {
  return (
    // <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cv' component={CvPage} />
          <Route exact path='/assets/AbhishekCV.pdf' component={CvDoc} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/blog/experiences-blog' component={ExperiencesBlog} />
          <Route exact path='/blog/financePolicies-blog' component={FinancePoliciesBlog} />
          <Route exact path='/blog/blockchainCrypto-blog' component={BlockchainCryptoBlog} />
          <Route exact path='/blog/cognitive-science-blog' component={CogSciBlog} />
          <Route exact path='/blog/cognitive-science-blog/0' component={CogSci0} />
        </Switch>
      </div>
    // </BrowserRouter>
  );
}

export default App;
