import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <p className='main-contact-heading'>Contact ME</p>
      <div className='contact-info'>
        <div className='email'>
          <div className='heading-contact'>My Email</div>
          <div className='email-add'>ritikbhardwaj310@gmail.com</div>
        </div>
        <div className='phone-number'>
          <div className='heading-contact'>Contact Number</div>
          <div className='phone-no'>+91 9837689233</div>
        </div>
      </div>
    </div>
  )
}

export default page
