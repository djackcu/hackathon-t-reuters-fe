import React,{Component} from 'react';
import profileimg from '../images/profile.jpg'

class Landing extends Component {

    employeeArr=[
        {
            title:'John Smith',
            subtitle:'@johnsmith',
            reviews:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.`,
            time:'11:09 PM - 1 Jan 2016'
        },
        {
            title:'Peter Greek',
            subtitle:'@peterGreek',
            reviews:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.`,
            time:'11:09 PM - 1 Jan 2016'
        },
        {
            title:'Tom Jhonson',
            subtitle:'@tomjhonson',
            reviews:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.`,
            time:'11:09 PM - 1 Jan 2016'
        },
        {
            title:'Joseph Tim',
            subtitle:'@josephTim',
            reviews:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.`,
            time:'11:09 PM - 1 Jan 2016'
        }
    ];

            render(){
    return (
        <div className="hero-body" style={{ height: '480px' }}>
            <h1 className="subtitle">Welcome User!</h1>
            <div className="columns">

           { this.employeeArr.map( (emp) => ( 
               <div className="column card">
               <div className="card-image">
                   <figure className="image" >
                       <img src={ profileimg } alt="Profile" style={{height:'150px',width:'100px'}} />
                   </figure>
                   <div class="media-content">
                       <p class="title is-4">{emp.title}</p>
                       <p class="subtitle is-6">{emp.subtitle}</p>
                   </div>
               </div>  
               <div className="content">
                   {emp.reviews}                   
                    <br />
               <time datetime="2016-1-1">{emp.time}</time>                    
               </div>
               <footer class="card-footer is-centered">
                   <button className="button card-footer-item is-primary"  onClick={ this.handleClick } >View</button>
                   <button className="button card-footer-item is-primary" onClick={ this.handleClick } >Add</button>
               </footer>  
           </div>

           )            
            ) }

            </div>
        </div>
            )
        }
    }
export default Landing;