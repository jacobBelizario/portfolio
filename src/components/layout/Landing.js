import React, { Fragment } from 'react'
import profilepic from '../images/profilepic.jpeg'
export const Landing = () => {

return(
<Fragment>
      <section className="container">

      
      <div className='profileContainer'>
      <div>
      <h2 className="x-large landtitle">Hi, I'm Jacob</h2>
      <h2 className='posDesc'>FullStack Engineer | DevOps Engineer</h2>
      <p className='profileTxt'>I am a Mobile Development Strategy student at George Brown college.
        With 3 years of real-world experience I've decided to further my studies in Canada.
        This portfolio is a showcase of my qualifications please feel free to explore and look around</p>
        </div>  
        <img src={profilepic} className='profilepic'/>
      </div>

    </section>
</Fragment>
)
}