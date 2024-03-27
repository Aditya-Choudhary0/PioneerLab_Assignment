import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png' 

const SideNavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(window.innerWidth > 900);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(window.innerWidth > 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (!isNavOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="Navbar">
      <div className={`sidenav ${isNavOpen ? 'open' : ''}`}>
        <div className='logoDiv' style={{display:'flex', color:"#cbd941"}}>
          <img src={logo} alt="Logo" />
          <div>
            <h2 style={{padding:0, margin:0}}>Carbon</h2>
            <h3 style={{padding:0, margin:'0px 0px 10px 0px' }}>Cell</h3>
          </div>
        </div>
        <div>
          <input type="text" className='search' placeholder='  &#128269;  Search..' />
        </div>
        <div>
          <a href="#" className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>Home</a>
          <a href="#" className={activeItem === 'About' ? 'active' : ''} onClick={() => handleItemClick('About')}>About</a>
          <a href="#" className={activeItem === 'Services' ? 'active' : ''} onClick={() => handleItemClick('Services')}>Services</a>
          <a href="#" className={activeItem === 'Contact' ? 'active' : ''} onClick={() => handleItemClick('Contact')}>Contact</a>
        </div>
        <div className='notification'>
          <a href="#" className={activeItem === 'Notification' ? 'active' : ''} onClick={() => handleItemClick('Notification')}>Notification</a>
          <a href="#" className={activeItem === 'Support' ? 'active' : ''} onClick={() => handleItemClick('Support')}>Support</a>
          <a href="#" className={activeItem === 'Setting' ? 'active' : ''} onClick={() => handleItemClick('Setting')}>Setting</a>
        </div>
      </div>
      <div className={`icon ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
        &#9776;
      </div>
    </div>
  );
};

export default SideNavBar;
