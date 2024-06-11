import React from 'react'
import "./nav.css"
const Nav = ({aboutscroll, teachersScroll}) => {
  return (
    <div className='navdiv'>
        <img className='smartpic' src="https://smartcode.am/public/image/logo.png?v=1" alt="" />
        <button className='btn' onClick={teachersScroll}>Թրեյներներ</button>
        <button className='btn' onClick={aboutscroll}>Մեր մասին</button>
    </div>
  )
}

export default Nav