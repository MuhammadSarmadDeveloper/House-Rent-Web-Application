import React from 'react'
import "./Items.css"
import pro from'../../assests/prologis.png'
import equ from'../../assests/equinix.png'
import rea from'../../assests/realty.png'
import tow from'../../assests/tower.png'
const Items = () => {
  return (
    <div className='items'>
       <div className='item'><img src={pro}/></div>  
       <div className='item'><img src={tow}/></div>  
       <div className='item'><img src={equ}/></div>  
       <div className='item'><img src={rea}/></div>
    </div>
  )
}

export default Items
