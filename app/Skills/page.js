import React from 'react'
import Image from 'next/image'
import htmlimage from '../../public/h.jpg';
import css from '../../public/c.jpg';
import js from '../../public/j.jpg';
import rj from '../../public/r.jpg';
import next from '../../public/nj.jpg';
import mongo from '../../public/md.jpg';
import clan from '../../public/clogoimage.jpg'
import pylogo from '../../public/pylogo.jpg'
import gitim from '../../public/gitimage.jpg'
import vsimage from '../../public/vslogo.jpg'

const page = () => {
  return (
    <div className='Skill'>
      <p className='heading-skill'>
        Explore My Skills
      </p>
      <div className='Frontend'>
        <div className='front-content'>
          <p className='heading-2'>Frontend Development : </p>
        </div>
        <div className='front-content'>
          <Image
          src={htmlimage}
          alt='html-image'
          height={100}
          width={100}
          />

        </div>
        <div className='front-content'>
          <Image
          src={css}
          alt='css-image'
          height={100}
          width={100}
          />

        </div>
        <div className='front-content'>
          <Image
          src={js}
          alt='js-image'
          height={100}
          width={100}
          />

        </div>
        <div className='front-content'>
          <Image
          src={rj}
          alt='react-image'
          height={100}
          width={100}
          />

        </div>
        <div className='front-content'>
          <Image
          src={next}
          alt='next-image'
          height={100}
          width={100}
          />

        </div>
        <div className='front-content'>
          <Image
          src={mongo}
          alt='mongodb'
          height={100}
          width={100}
          />

        </div>
      </div>
      <div className='Languages'>
        <div className='lang'>
          <p className='heading-2'>Languages : </p>
        </div>
        <div className='lang'>
          <Image
          src={clan}
          alt='c =image'
          height={100}
          width={100}
          />

        </div>
        <div className='lang'>
          <Image
          src={pylogo}
          alt='python-image'
          height={100}
          width={150}
          />

        </div>

      </div>
      <div className='Tool'>
        <div className='tool-name'>
          <p className='heading-2'>Tools : </p>
        </div>
        <div className='tool-name'>
          <Image
          src={gitim}
          alt='git-image'
          height={100}
          width={150}
          />

        </div>
        <div className='tool-name'>
          <Image
          src={vsimage}
          alt='vscode-logo'
          height={100}
          width={150}
          />

        </div>
      </div>
    </div>
  )
}

export default page
