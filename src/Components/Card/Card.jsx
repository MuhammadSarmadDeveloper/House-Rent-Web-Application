import React from 'react'
import './Card.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import r1 from '../../assests/r1.png'
import r2 from '../../assests/r2.png'
import r3 from '../../assests/r3.png'
const Card = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,

        // dots: false,
        // infinite: true,
        // slidesToShow: 4,
        // slidesToScroll: 1,
        // autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 2000,
        // cssEase: "linear",

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 946,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 930,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 602,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    
    <div className="slider-container">
      <Slider className='car'  {...settings}>
        <div className='one'>
          <div className='data'>
             <img src={r1}/>
             <div>
                <h2 style={{color:'rgb(140, 139, 139)'}}><span style={{color:'rgb(255, 165, 0)'}}>$</span> 47,043</h2>
                <h1 style={{ color:'rgb(31, 62, 114)'}}>Aliva Priva Jardin</h1>
                <p style={{color:'rgb(166, 167, 172)', fontSize:'1rem'}}>Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat</p>
             </div>
          </div>
        </div>
        <div className='one'>
        <div className='data'>   
            <img src={r2}/>
             <div>
                <h2 style={{color:'rgb(140, 139, 139)'}}><span style={{color:'rgb(255, 165, 0)'}}>$</span> 66,353</h2>
                <h1 style={{ color:'rgb(31, 62, 114)'}}>Asatti Garden City</h1>
                <p style={{color:'rgb(166, 167, 172)', fontSize:'1rem'}}>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
             </div></div>
        </div>
        <div className='one'>
        <div className='data'>   
             <img src={r3}/>
             <div>
                <h2 style={{color:'rgb(140, 139, 139)'}}><span style={{color:'rgb(255, 165, 0)'}}>$</span> 35,853</h2>
                <h1 style={{ color:'rgb(31, 62, 114)'}}>Citralan Serang</h1>
                <p style={{color:'rgb(166, 167, 172)', fontSize:'1rem'}}>Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</p>
             </div></div>
        </div>
        <div className='one'>
        <div className='data'>    
            <img src={r1}/>
             <div>
                <h2 style={{color:'rgb(140, 139, 139)'}}><span style={{color:'rgb(255, 165, 0)'}}>$</span> 47,043</h2>
                <h1 style={{ color:'rgb(31, 62, 114)'}}>Aliva Priva Jardin</h1>
                <p style={{color:'rgb(166, 167, 172)', fontSize:'1rem'}}>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
             </div></div>
        </div>
        <div className='one'>
        <div className='data'>    
        <img src={r2}/>
             <div>
                <h2 style={{color:'rgb(140, 139, 139)'}}><span style={{color:'rgb(255, 165, 0)'}}>$</span> 66,353</h2>
                <h1 style={{ color:'rgb(31, 62, 114)'}}>Asatti Garden City</h1>
                <p style={{color:'rgb(166, 167, 172)', fontSize:'1rem'}}>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
             </div></div>
        </div>
        <div className='one'>
        <div className='data'>    
        <img src={r3}/>
             <div>
                <h2 style={{color:'rgb(140, 139, 139)'}}><span style={{color:'rgb(255, 165, 0)'}}>$</span> 35,853</h2>
                <h1 style={{ color:'rgb(31, 62, 114)'}}>Citralan Serang</h1>
                <p style={{color:'rgb(166, 167, 172)', fontSize:'1rem'}}>Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</p>
             </div></div>
        </div >

      </Slider>
    </div>
    
  )
}

export default Card
