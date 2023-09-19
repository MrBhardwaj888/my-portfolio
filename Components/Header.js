import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            Ritik Bhardwaj
        </div>
        <div className='nav-links'>
            <Link href="/About" className='link'>About</Link>
            <Link href="/Skills" className='link'>Skills</Link>
            <Link href="/Projects"className='link'>Project</Link>
            <Link href="/Contacts"className='link'>Contacts</Link>

        </div>

    </div>
  )
}

export default Header
