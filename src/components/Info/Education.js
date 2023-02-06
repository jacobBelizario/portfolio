import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gbc from '../images/gbc.png'
import iac from '../images/iacademy.jpeg'
export const Education = () => 
<Fragment>
<section class="container">
<div class="large hfont">Education</div>
      <div className='internContainer'>
        <div className='eduHolder'>
          <Card.Img variant="top" src={gbc} className='cardImg'/>
            <div className='cardDetails'>
            <Card.Title><h3 className='hfont'>Mobile Development & Strategy </h3></Card.Title>
            <Card.Text>
              <p>GPA 4.0</p>
            </Card.Text>
            </div>
        </div>


        <div className='eduHolder'>
          <Card.Img variant="top" src={iac} className='cardImg'/>
          <div className='cardDetails'>
            <Card.Title><h3 className='hfont'>Bachelor of Science Major in Computer Science</h3></Card.Title>
            <Card.Text>
              <p>GPA 3.0</p>
            </Card.Text>
            </div>
        </div>
        </div>
        

        
    </section>
</Fragment>
