import React from 'react'
import Image from 'next/image';
import profile from '../public/rimage.jpg'
import git from '../public/github.png'
import linkedin from '../public/linkedin.png'

const page = () => {
  return (
    <div className='hero-section'>
      <div className='profile-pic'>
        <Image
        src={profile}
        alt='profile.pic'
        height={300}
        width={300}
        className='pic'
        />
      </div>
      <div className='intro'>
        <p>I'm</p>
        <h1>RITIK BHARDWAJ</h1>
        <p>Frontend Developer</p>
        <div className='btn'>
            <button><a href="https://drive.google.com/file/d/14ckwzDXGaaECNrsWXfwLLqxa40CRKqxe/view?usp=sharing" className='download-resume'>Download Resume</a></button>
            <button>Certificates</button>
        </div>
        <div className='icons'>
          <div className='git'>
              <a href='https://github.com/MrBhardwaj888' target='_blank'>
              <Image
              src={git}
              alt='git image'
              />
              </a>
          </div>
          <div className='linked'>
              <a href='https://www.linkedin.com/in/mrbhardwaj888/' target='_blank'>
              <Image
              src={linkedin}
              alt='link image'
              />
              </a>
          </div>
      </div>
    </div>
  </div>
  )
}

export default page
