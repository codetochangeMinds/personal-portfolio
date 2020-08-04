import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

// import Header from './Components/Header/header'
// import Footer from './Components/Footer/footer'
import Home from './Components/Home/home'
import CvPage from './Components/CV/cv'
import CvDoc from './Components/CV/cvDoc'
import Blog from './Components/Blog/blog'
import CryptoBlog from './Components/Blog/cryptoBlog';
import CogSciBlog from './Components/Blog/cognitiveSciBlog';
import FinanceBlog from './Components/Blog/financeBlog';
import BlockchainBlog from './Components/Blog/blockchainBlog';
import CogSci0 from './Components/Blog/blogs/cogSci0';

function App() {
  return (
    // <BrowserRouter>
      <div>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cv' component={CvPage} />
          <Route exact path='/assets/AbhishekCV.pdf' component={CvDoc} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/blog/crypto-blog' component={CryptoBlog} />
          <Route exact path='/blog/finance-blog' component={FinanceBlog} />
          <Route exact path='/blog/blockchain-blog' component={BlockchainBlog} />
          <Route exact path='/blog/cognitive-science-blog' component={CogSciBlog} />
          <Route exact path='/blog/cognitive-science-blog/0' component={CogSci0} />
        </Switch>
        {/* <Footer /> */}
      </div>
    // </BrowserRouter>
  );
}

export default App;
