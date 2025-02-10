import React from 'react'
import './Body.css'
import Banner from '../assets/images/apple.png'
import Demo1 from './Demo1'

function Body() {
  return (
    <div className='container-body'>
        <h1>Sobre Nós</h1>
        <img className='Banner' src={Banner} alt="" />
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo, ipsa magnam natus tempore distinctio error, quibusdam saepe neque nulla ducimus sunt? Repellendus officia soluta ipsum, cumque sed aliquam? Suscipit.</h3>
        <Demo1 />
    </div>
  )
}

export default Body