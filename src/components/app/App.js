import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from '../component/Home';
import Header from '../component/Header';
import Footer from '../component/Footer';

function App() {
  return (
    <BrowserRouter>
            <section className='hero is-primary is-bold'>
                <nav className="navbar">                        
                    <ul className="navbar-end">
                        <li>
                        <Link to="/" className="navbar-item is-active"><i className="fas fa-home"></i> &nbsp; Home</Link>
                        </li>
                        <li><Link to="/" className="navbar-item"><i className="fa fa-lock"></i> &nbsp; Login</Link></li>
                        <li><Link to="/" className="navbar-item"><i className="fas fa-user-plus"></i>&nbsp; Registration</Link></li>
                    </ul>
                </nav>                   
                <Header/>                
            </section>
            <div>
                <Route path='/' component={Home}></Route>
            </div> 
            <Footer/>
        </BrowserRouter>
  );
}

export default App;
