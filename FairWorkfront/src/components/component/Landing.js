import React,{Component} from 'react';
import EmployerCard from './employerCard'
import profileimg from '../images/profile.jpg'

class Landing extends Component {

    employeeArr=[
        {
            name:'John Smith',
            description:'@johnsmith',
            reviews:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.`,
            time:'11:09 PM - 1 Jan 2016'
        },
        {
            name:'Peter Greek',
            description:'@peterGreek',
            reviews:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.`,
            time:'11:09 PM - 1 Jan 2016'
        },
        {
            name:'Tom Jhonson',
            description:'@tomjhonson',
            reviews:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.`,
            time:'11:09 PM - 1 Jan 2016'
        },
        {
            name:'Joseph Tim',
            description:'@josephTim',
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
        < EmployerCard key={emp.title} employer={emp} handleClick= {this.handleClick}/>
        )            
            ) }

            </div>
        </div>
            )
        }
    }
export default Landing;