import React from 'react'
import { Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import { Carousel } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import shore from '../images/shore.png'
import js from '../images/skills/js.png'
import docker from '../images/skills/docker.png'
import node from '../images/skills/nodejs.webp'
import rboot from '../images/skills/reactboot.png'
import react from '../images/skills/react.png'
import kotlin from '../images/skills/kotlin.png'
import swift from '../images/skills/swift.png'
import aws from '../images/skills/aws.jpeg'
import tform from '../images/skills/terraform.png'
import ansible from '../images/skills/ansible.png'
import snips1 from '../images/snips/snips1.png'
import snips2 from '../images/snips/snips2.png'
import snips3 from '../images/snips/snips3.png'
import snips4 from '../images/snips/snips4.png'
import snips5 from '../images/snips/snips5.png'

import fit1 from '../images/fitness/fit1.png'
import fit2 from '../images/fitness/fit2.png'
import fit3 from '../images/fitness/fit3.png'
import fit4 from '../images/fitness/fit4.png'
import fit5 from '../images/fitness/fit5.png'

import hc1 from '../images/hcx/hc1.png'
import hc2 from '../images/hcx/hc2.png'
import hc3 from '../images/hcx/hc3.png'
import hc4 from '../images/hcx/hc4.png'
import hc5 from '../images/hcx/hc5.png'
import hc6 from '../images/hcx/hc6.png'


const snipsClick = () => {
  window.location.href= `https://github.com/jacobBelizario/ProjectSnips`
}
const fitnessClick1 = () => {
  window.location.href= `https://github.com/jacobBelizario/Fitness-G05`
}
const fitnessClick2 = () => {
  window.location.href= `http://3.135.196.154/`
}
const hcxClick1 = () => {
  window.location.href= `https://tito.hcx.com.ph/pages/UI.php`
}
const hcxClick2 = () => {
  window.location.href= `https://tita.hcx.com.ph/pages/UI.php`
}
const hcxClick3 = () => {
  window.location.href= `https://titodev.hcx.com.ph/pages/UI.php`
}





export const Skills = () => 
<Fragment>
      <section class="container">
      <div class="large hfont">Projects</div>
      <div className='experienceContainer'>
      {/* 1 item */}
        <div className='experienceHolder'>
        <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={snips1}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={snips2}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={snips3}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={snips4}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={snips5}
              />
              </Carousel.Item>
        </Carousel>
            <div className='experienceDetails'>
            <Card.Title><h3 className='expDesc'>Snips</h3></Card.Title>
              <Card.Text>
              Built with Android-Kotlin. Has camera and authentication functionality. Uses Firebase as its data store
            </Card.Text>
            <div className='btnGroup1 text-center'>
              <Button onClick={snipsClick} className='btnColor'><i class="fa-brands fa-github"></i> Github</Button>
              </div>
            </div> 
        </div>
        {/* 1 item */}

        
        <div className='experienceHolderAlt'>
        <div className='experienceDetails'>
        <Card.Title><h3 className='expDesc'>Fitness Website</h3></Card.Title>
        <Card.Text>
          Built with HandleBars and NodeJS. Has cart and authentication functionality. Uses MongoDB as its data store
        </Card.Text>
        <div className='btnGroup2 text-center'>
            <Button onClick={fitnessClick1} className='btnColor'><i class="fa-brands fa-github"></i> Github</Button>
            <Button onClick={fitnessClick2} className='btnColor'><i class="fa-brands fa-html5"></i> Website</Button>
            </div>
        </div>
        <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={fit1}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={fit2}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={fit3}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={fit4}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={fit5}
              />
              </Carousel.Item>
        </Carousel>
                  
                </div>


                <div className='experienceHolder'>
                <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={hc1}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={hc2}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={hc3}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={hc4}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={hc5}
              />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
              <img
                className="projImg"
                src={hc6}
              />
              </Carousel.Item>
        </Carousel>
                    <div className='experienceDetails'>
                    <Card.Title><h3 className='expDesc'>Multi-Tenant Architecture</h3></Card.Title>
                    <Card.Text>
                      Helped HCX Technology Partners Inc. save money. Uses Nginx reverse Proxy and docker-compose. Migrated on-premise Itop environments on the cloud
                    </Card.Text>
                    <div className='btnGroup3 text-center'>
                    <Button onClick={hcxClick1} className='btnColor'><i class="fa-brands fa-html5"></i> tito</Button>
                    <Button onClick={hcxClick2} className='btnColor'><i class="fa-brands fa-html5"></i> tita</Button>
                    <Button onClick={hcxClick3} className='btnColor'><i class="fa-brands fa-html5"></i> dev</Button>
                    </div>
                    </div>
                </div>
              </div>



      <h1 class="large hfont">Skills</h1>
      <div className='skillsContainer'>
      <img src={js} className='skillsItem'/>
      <img src={docker} className='skillsItem'/>
      <img src={node} className='skillsItem'/>
      <img src={rboot} className='skillsItem'/>
      <img src={react} className='skillsItem'/>
      <img src={kotlin} className='skillsItem'/>
      <img src={swift} className='skillsItem'/>
      <img src={aws} className='skillsItem'/>
      <img src={tform} className='skillsItem'/>
      <img src={ansible} className='skillsItem'/>
      </div> 
    </section>
</Fragment>
