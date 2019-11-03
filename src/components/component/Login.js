import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom';

class  Login extends Component{

    handleClick = (e)=>{
        this.props.history.push("/landing");
    }

    render()
    {   return(
        <div className='columns is-vertical is-centered' style={{height:'480px'}}>
            <form>
            <div className='column is-vertical' style={{padding:'100px'}}>
            <div className='field'>
                <label className="label">Username: </label>
                <div className="control">
                    <input className="input" type="text" placeholder="User name" />
                </div>
            </div>  
            <div className='field'>
                <label className="label">Password : </label>
                <div className="control">
                    <input className="input" type="text" placeholder="Password" />
                </div>
            </div> 
            <div className='field'>
            <div className="control">
                <button className="button is-link" onClick={ this.handleClick } >Login</button>
            </div>  
            </div>
            </div>  
            </form>      
        </div>
    )
    }
}

export default withRouter(Login);