import React from 'react'
import { Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import hcx from '../images/hcx.jpeg'
import iba from '../images/ibakami.jpeg'
import shore from '../images/shore.png'
import ing from '../images/ing.webp'

export const Experience = () => 
<Fragment>
      <section className="container">
      <div class="large hfont">Professional Experiece</div>
      <div className='experienceContainer1'>
      {/* 1 item */}
        <div className='experienceHolder1'>
          <Card.Img variant="top" src={hcx} className='profImg'/>
            <div className='experienceDetails'>
            <Card.Title><h3 className='expDesc'>Full Stack Engineer</h3></Card.Title>
            <Card.Text>
              <p>2020 - 2021</p>
              <ul>
                <li>Tasked with System Administration for our Itop instance. </li>
                <li>Create FullStack Applications with MERN Stack</li>
                <li>Migrate OnPremise servers/services to AWS</li>
              </ul>
            </Card.Text>
            </div>
        </div>
        {/* 1 item */}
        <div className='experienceHolder1'>
                  <Card.Img variant="top" src={iba} className='profImg'/>
                    <div className='experienceDetails'>
                    <Card.Title><h3 className='expDesc'>DevOps Engineer</h3></Card.Title>
                    <Card.Text>
                      <p>2019 - 2020</p>
                      <ul>
                        <li>Integrated Apache Kafka to their existing system </li>
                        <li>Create Pipelines to deliver our frontend to their servers</li>
                        <li>Dockerize Clients' Applications</li>
                      </ul>
                    </Card.Text>
                    </div>
                </div>
                <div className='experienceHolder1'>
                  <Card.Img variant="top" src={shore} className='profImg'/>
                    <div className='experienceDetails'>
                    <Card.Title><h3 className='expDesc'>Software Engineer</h3></Card.Title>
                    <Card.Text>
                      <p>2019 - 2020</p>
                      <ul>
                        <li>Fix frontend issues</li>
                        <li>Use terraform and ansible to automate deployments</li>
                        <li>Dockerize Applications</li>
                      </ul>
                    </Card.Text>
                    </div>
                </div>
        </div>  
        <div class="large hfont">Internships</div>
        <div className='internContainer'>
      {/* 1 item */}
        {/* 1 item */}
        <div className='experienceHolder1'>
                  <Card.Img variant="top" src={shore} className='profImg'/>
                    <div className='experienceDetails'>
                    <Card.Title><h3 className='expDesc'>Software Engineer</h3></Card.Title>
                    <Card.Text>
                      <p>2018 - 2019</p>
                      <ul>
                        <li>Mirror Senior Frontend Engineer</li>
                        <li>Handle Development Deployments</li>
                        <li>Dockerize Applications</li>
                      </ul>
                    </Card.Text>
                    </div>
                </div>
                <div className='experienceHolder1'>
          <Card.Img variant="top" src={ing} className='profImg'/>
            <div className='experienceDetails'>
            <Card.Title><h3 className='expDesc'>Quality Assurance</h3></Card.Title>
            <Card.Text>
              <p>2018</p>
              <ul>
                <li>Resolve Tickets with the help of Jira</li>
                <li>Test Functionality on Mobile app and Web Browser</li>
                <li>Provide feedback on how to improve the product</li>
              </ul>
            </Card.Text>
            </div>
        </div>
        </div>  
    </section>
</Fragment>
