import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../component/Home';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Login from '../component/Login';
import Landing from '../component/Landing';
import Review from '../component/Review';
import Stories from '../component/Stories';

function App() {
  return (
    <BrowserRouter>
            <section className='hero is-primary is-bold'>
                <nav className="navbar">                        
                    <ul className="navbar-end">
                        <li>
                        <Link to="/" className="navbar-item is-active"><i className="fas fa-home"></i> &nbsp; Home</Link>
                        </li>
                        <li><Link to="/login" className="navbar-item"><i className="fa fa-lock"></i> &nbsp; Login</Link></li>
                        <li><Link to="/" className="navbar-item"><i className="fas fa-user-plus"></i>&nbsp; Registration</Link></li>
                    </ul>
                </nav>                   
                <Header/>                
            </section>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/landing' component={Landing}></Route>
                <Route path='/review' component={Review}></Route>
                <Route path='/stories' component={Stories}></Route>

               </Switch>
            <Footer/>
        </BrowserRouter>
  );
}

export default App;
