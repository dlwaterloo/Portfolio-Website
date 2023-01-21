import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/"  target="_blank"><BsLinkedin/></a>
        <a href="https://www.github.com/"  target="_blank"><BsGithub/></a>
        <a href="https://www.instgram.com/"  target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default headerSocials