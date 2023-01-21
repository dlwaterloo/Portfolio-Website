import React from 'react'
import './nav.css'
import {AiOutlineHome} from  'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {Gi3DGlasses} from 'react-icons/gi'
import {BiMessageSquareCheck} from 'react-icons/bi'

const Nav = () => {
  return (
     <nav>
      <a href="#" className='active'><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experiences"><AiOutlineBook/></a>
      <a href="#services"><Gi3DGlasses/></a>
      <a href="#contact"><BiMessageSquareCheck/></a>
     </nav>
  )
}

export default Nav