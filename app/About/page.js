import React from 'react'
import Image from 'next/image'
import aboutpic from '../../public/ritik.jpg';

const page = () => {
  return (
    <div>
      <div className='Header-about'>
        <p>Get to Know more</p>
        <h1>About Me</h1>
      </div>
      <div className='main-about'>
        <div className='image-about'>
          <Image
          src={aboutpic}
          alt='about-pic'
          height={200}
          width={200}/>

        </div>
        <div className='right-about'>
          <div className='education-experience'>
            <p className='educate edu-head'>EDUCATION</p>
            <p className='educate'>Bachelor of Technology</p>
            <p className='educate'>Electronics and Communication</p>
            <p className='educate'>Agreggate - 7.95 CGPA</p>

            
          </div>
          <div className='summary'>
            <p className='sum'>
            Recent college graduate with a passion for web development and a strong knowledge of HTML5, CSS,
            JavaScript, and React JS. Highly motivated and eager to learn new technologies to become a successful
            Front End Developer. Applying for a position as a Front End Developer in your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
