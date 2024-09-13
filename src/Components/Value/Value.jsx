import React,{useState} from 'react'
import './Value.css'
import back from '../../assests/value.png'
const Value = () => {
  

  const [activeIndex, setActiveIndex] = useState(0); // Start with the first item open

  const handleToggle = (index) => {
    setActiveIndex(index);
  };
  const accordionData = [
    {
      title: "Best interest rates on the market",
      content:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      icon: "https://img.icons8.com/ios/50/000000/security-checked--v1.png" // Example icon, replace with your icon
    },
    {
      title: "Prevent unstable prices",
      content: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      icon: "https://img.icons8.com/ios/50/000000/cancel--v1.png" // Example icon, replace with your icon
    },
    {
      title: "Best price on the market",
      content: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      icon: "https://img.icons8.com/ios/50/000000/combo-chart.png" // Example icon, replace with your icon
    }
  ];
  return (
    <div className='rent-info'>
      <div className="lef"> <div className='backim'>
            <img src={back} alt=''/>
          </div></div>
      <div className='rig'>
        <div className="value-info">
          <h2 style={{color:'rgb(255, 186, 24)',fontSize:'1.8rem'}}>Our Values</h2>
          <h1 style={{color:'rgb(31, 62, 114)',fontSize:'2.6rem'}}>Value We Give to You</h1>
          <p style={{color:'rgb(140, 139, 169)',fontSize:'1.1rem'}}>We always ready to help by providijng the best services for you.<br/>
          We beleive a good blace to live can make your life better</p>
        </div>
        <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <div className="icon-container">
              <img src={item.icon} alt="icon" className="icon" />
            </div>
            <h3 style={{color:'rgb(31, 62, 137)',fontSize:'1.2rem'}} className="accordion-title">{item.title}</h3>
            <span className="toggle-icon">{activeIndex === index ? '▼' : '▼'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p style={{color:'rgb(140, 139, 169)',fontSize:'1.2rem'}} >{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
      </div>
    </div>
  )
}

export default Value
