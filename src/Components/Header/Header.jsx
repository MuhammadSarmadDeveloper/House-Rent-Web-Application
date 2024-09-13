import React, { useState, useEffect } from 'react';
import './Header.css';
import bars from '../../assests/bar.png'; // Adjust the path to your image assets
import Logo from '../../assests/logo.png'; // Adjust the path to your image assets
import Hero from '../../assests/hero-image.png'
import { Link } from 'react-scroll';
import NumberCounter from 'number-counter'
import { FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
  const [color, setColor] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 950);
  const [menuOpened, setMenuOpened] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 15) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 950);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header">
      <div className={color ? 'Navbar Navbar-bg' : 'Navbar'}>
        <img src={Logo} alt="Logo" className="logo" />
        {menuOpened === false && mobile === true ? (
          <div onClick={() => setMenuOpened(true)} style={{ padding: '0.5rem', borderRadius: '10px' }}>
            <img className="bars" src={bars} style={{ width: '1.6rem', height: '1.7rem', position: 'relative', top: '0.3rem', right: '-1.2rem' }} alt="Bars" />
          </div>
        ) : (
          <ul className="header-menu">
            <li>
              <Link onClick={() => setMenuOpened(false)} to="Residencies" spy={true} smooth={true}>
                Residencies
              </Link>
            </li>
            <li onClick={() => setMenuOpened(false)}>Our Value</li>
            <li onClick={() => setMenuOpened(false)}>Contact Us</li>
            <li onClick={() => setMenuOpened(false)}>Plans</li>
            <li>
              <Link onClick={() => setMenuOpened(false)} to="Get Started" spy={true} smooth={true}>
                Get Started
              </Link>
            </li>
            <li>
              <button className="btn">
                <Link onClick={() => setMenuOpened(false)} to="Testimonials" spy={true} smooth={true}>
                  Contact
                </Link>
              </button>
            </li>
          </ul>
        )}
      </div>
      <div className="header-part2">
        <div className="shape"></div>
        <div className="N-left">
          <div className='circ'></div>
          <div className='text-t'>
            <h1 className='H'>Discover</h1>
            <h1 className='H'>Most Suitable</h1>
            <h1 className='H'>Property</h1>
            <div className='P'>
              <p>Find a variety of properties that suit you very easilty
                Forget all difficulties in finding a residence for you</p>
            </div>
          </div>
          <div className="search-bar">
            <FaMapMarkerAlt className="search-icon" />
            <input type="text" />
            <button className="search-button">Search</button>
          </div>
          <div className='figuries'>
            <div>
              <span><NumberCounter end={9000} start={7000} delay='4' /><span style={{ color: 'rgb(240, 165, 0)' }}>+</span></span>
              <span>Premium Product</span>
            </div>
            <div>
              <span><NumberCounter end={2000} start={1500} delay="4" /><span style={{ color: 'rgb(240, 165, 0)' }}>+</span></span>
              <span>Happy Customer</span>
            </div>
            <div>
              <span><NumberCounter end={28} start={10} delay='4' /><span style={{ color: 'rgb(240, 165, 0)' }}>+</span></span>
              <span>Awards Winning</span>
            </div>
          </div>
        </div>
        <div className="N-right">
          <div className='backimg'>
            <img src={Hero} alt='' />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Header;