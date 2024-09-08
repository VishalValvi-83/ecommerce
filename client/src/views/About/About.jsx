import React from 'react'
import "./About.css"
import img1 from "./images/img1.png"
import joinus from "./images/deal.png"
import work from "./images/work.png"
import mission from "./images/mission.png"
import value from "./images/reanem.png"

function About() {
  return (
    <div>
      <h1 className='main-heading'>About Us</h1>
      <div className='container'>
      <div className='card'>
        <img className='cardimg' src={img1} />
        <div className='text'>
          <h2>Who are we ?</h2>
          <p>Welcome to NeighbourNet,
            the heart of community connection in Manish Nagar.
            We are a group of local residents dedicated to enhancing our neighborhood through meaningful engagement, mutual support,
            and collective action. Our goal is to strengthen the bonds between neighbors and foster a vibrant, thriving community.</p>
        </div>
      </div>
      <div className='card'>
        <img className='cardimg' src={mission} />
        <div className='text'>
        <h2>Our Mission</h2>
        <p>Our mission is to unite the residents of Manish nagar to create a more connected,
          engaged, and supportive neighborhood. We are committed to promoting local initiatives,
          organizing events, and providing resources that enrich our community and make a better place to live.</p>
          </div>
      </div>
      <div className='card'>
      <img className='cardimg' src={work} />
        <div className='text'>
        <h2>What we do ?</h2>
        <p><ul><li>
          Community Engagement: We organize and promote events, activities, and forums
          that bring residents together and encourage participation. From neighborhood clean-ups to social gatherings,
          we aim to strengthen the bonds between neighbors.
        </li>
          <li>Local Support: We work with
            local businesses, schools, and
            organizations to support and promote initiatives that benefit our community.
          </li>
      </ul>
        </p>
        </div>
      </div>


      <div className='card'>
             <img className='cardimg' src={value} />
        <div className='text'>
        <h2>Our Values</h2>
   
        <p>
          <ul>
            <li>Community Spirit: We believe in the power of neighbors coming together to support each other and improve our
              shared environment.</li>
            <li>Inclusivity: We are dedicated
              to creating a space where every resident feels welcomed and valued, regardless of background.</li>
            <li>Collaboration: We work hand-in-hand with residents and local organizations to achieve common goals and tackle challenges.
            </li>
          </ul>
        </p>
        </div>
      </div>
      <div className='card'>
      <img className='cardimg' src={joinus} />
        <div className='text'>
        <h2>Join Us !!!</h2>
       
        <p>Join Us

We invite you to be a part of our growing community. Whether you're new to the area or a long-time resident,
 your involvement makes a difference. Explore our website, attend our events, and connect with us on social media to stay updated and engaged.
Thank you for being a vital part of NeighbourNet Connect. Together, we can create a stronger, more connected community for everyone.
Warm regards,
The NeighbourNet Connect Team

</p>
</div>
      </div>
      </div>
    </div>
  )
}

export default About
