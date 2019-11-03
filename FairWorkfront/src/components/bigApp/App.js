import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from '../component/Home';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Login from '../component/Login';
import Landing from '../component/Landing';
import EmployCard from '../component/employCard'
import useApp from './useApp';

function App() {
  const {query,handlerFilter,employerFiltered} =  useApp();
  return (
    <BrowserRouter>
            <section className='hero is-primary is-bold'>
                <nav className="navbar">                        
                    <ul className="navbar-end">
                        <li>
                        <Link to="/" className="navbar-item is-active"><i className="fas fa-home"></i> &nbsp; Home</Link>
                        </li>
                        <li><Link to="/login" className="navbar-item"><i className="fa fa-lock"></i> &nbsp; Login</Link></li>
                        <li><Link to="/employer" className="navbar-item"><i className="fas fa-user-plus"></i>&nbsp; Registration</Link></li>
                        <li><input type="text" value={query} onChange={(e)=>handlerFilter(e)}/></li>
                    </ul>
                </nav>                   
                <Header/>                
            </section>
              <Switch>
                <Route exact path="/"> <Home/></Route>
                <Route path='/login'><Login/></Route>
                <Route path='/landing'><Landing employers={employerFiltered}/></Route>
                <Route path='/employer'><EmployCard/></Route>
              </Switch>
            <Footer/>
        </BrowserRouter>
  );
}

export default App;
