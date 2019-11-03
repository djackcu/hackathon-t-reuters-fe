import React from 'react';
import profileimg from '../images/profile.jpg'

function EmployerCard({employer, handleClick}) {
return (
    <div className="column card">
            <div className="card-image">
                <figure className="image" >
                    <img src={ profileimg } alt="Profile" style={{height:'150px',width:'100px'}} />
                </figure>
                <div class="media-content">
                    <p class="title is-4">{employer.title}</p>
                    <p class="subtitle is-6">{employer.subtitle}</p>
                </div>
            </div>  
            <div className="content">
                {employer.reviews}                   
                <br />
            <time datetime="2016-1-1">{employer.time}</time>                    
            </div>
            <footer class="card-footer is-centered">
                <button className="button card-footer-item is-primary"  onClick={ handleClick } >View</button>
                <button className="button card-footer-item is-primary" onClick={ handleClick } >Add</button>
            </footer>  
        </div>

);
}

export default EmployerCard;
