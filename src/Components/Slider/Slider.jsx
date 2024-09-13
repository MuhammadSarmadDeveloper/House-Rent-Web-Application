import React from 'react'
import './Slider.css'
import butt from '../../assests/butt.png'

const Slider = () => {
   
  return (
    <div className='slider'>
      <div className='tit'>
        <div className="txt-1">
            <p>Best Choices</p>
            <p>Popular Residencies</p>

        </div>
        <div className="txt-2"><img src={butt}/></div>
      </div>
     
     
    </div>
  )
}

export default Slider
