import React from 'react'
import './Contact.css'
import { FaPhone, FaCommentDots, FaVideo, FaEnvelope } from 'react-icons/fa';
import cont from '../../assests/contact.jpg'
const Contact = () => {
  return (
    <div className='cont-info'>
      <div className='cont-lef'>
         <div className="tex-info">
         <h2 style={{color:'rgb(255, 165, 0)',fontSize:'1.8rem'}}>Our Contact Us</h2>
          <h1 style={{color:'rgb(31, 62, 114)',fontSize:'2.6rem'}}>Easy to contact us</h1>
          <p style={{color:'rgb(140, 139, 169)',fontSize:'1.1rem'}}>We always ready to help by providijng the best services for you.We beleive a good blace to live can make your life better</p>
         </div>
         <div className="bt-info">
         <div className="contact-card">
            <div className='ca'>
      <div className="icon-container">
        <FaPhone className="icon" />
      </div>
      <div>
      <h3>Call now</h3>
      <p>021 123 145 14</p>
      </div>
      </div>
      <button className="contact-button">Call now</button>
    </div>
    <div className="contact-card">
            <div className='ca'>
      <div className="icon-container">
      <FaCommentDots className="icon" />
      </div>
      <div>
      <h3>Chat now</h3>
      <p>021 123 145 14</p>
      </div>
      </div>
      <button className="contact-button">Chat now</button>
    </div>
    <div className="contact-card">
            <div className='ca'>
      <div className="icon-container">
      <FaVideo className="icon" />
      </div>
      <div>
      <h3>Video Call</h3>
      <p>021 123 145 14</p>
      </div>
      </div>
      <button className="contact-button">Video Call now</button>
    </div>
    <div className="contact-card">
            <div className='ca'>
      <div className="icon-container">
      <FaEnvelope className="icon"/>
      </div>
      <div>
      <h3>Message</h3>
      <p>021 123 145 14</p>
      </div>
      </div>
      <button className="contact-button">Message now</button>
    </div>
         </div>
      </div>
      <div className='cont-rig'>
      <div className='backim'>
            <img className='ff' src={cont} alt=''/>
          </div>
      </div>
    </div>
  )
}

export default Contact
