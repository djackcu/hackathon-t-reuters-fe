import React from 'react';
import profileimg from '../images/farmer.jpeg'

function EmployCard({employer, handleClick}) {
return (
    <div className="column card">
        <div className="employCardM">
        <div className="card-image employCardS">
                <figure className="image" >
                    <img src={ profileimg } alt="Profile" style={{height:'250px',width:'400px'}} />
                </figure>
                <div class="media-content">
                    <p class="title is-4">Tom Jhonson</p>
                    <p class="subtitle is-6">@tomjhonson</p>
                </div>
            </div>  
            <div className="content employCardS">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.                   
                <br />
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.</div>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>                    
            </div>
        </div>            
            <footer class="card-footer is-centered employCardC">
                <button className="button card-footer-item is-primary"  onClick={ handleClick } >View</button>
                <button className="button card-footer-item is-primary" onClick={ handleClick } >Add</button>
            </footer>  
        </div>

);
}

export default EmployCard;
