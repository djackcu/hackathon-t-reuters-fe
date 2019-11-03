import React,{Component} from 'react';
import EmployerCard from './employerCard'
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
        < EmployerCard key={emp.title} employer={emp} handleClick= {this.handleClick}/>
        )            
            ) }

            </div>
        </div>
            )
        }
    }
export default Landing;