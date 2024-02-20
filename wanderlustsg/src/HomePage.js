import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { FaMagnifyingGlass } from "react-icons/fa6";
import Login from './Login';

const HomePage = () => {
  const [boxSize, setBoxSize] = useState({ width: '90vm', height: 'auto' });
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleResize = () => {
    setBoxSize({
      width: '90vm', 
      height: 'auto', 
    });
  };

  // Attach the event listener on component mount
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const openLogin = () => {
    setLoginOpen(true);
  };

  const closeLogin = () => {
    setLoginOpen(false);
  };
  return (
    <div>
      <header style={headerStyle}>
        <div style={leftStyle}>
          <h1>WanderlustSG</h1>
        </div>
        <div style={rightStyle}>
          <h2 onClick={openLogin} style={{ fontSize: '20px', fontFamily: "'Aclonica', sans-serif"}}>Log in</h2>
          <button className="signup-button">Sign Up</button>
        </div>
      </header>
      <div className="img-container" style={boxSize}>
        <img src="/HomePageMain.jpg" alt="SGTour" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
      </div>
      <nav className="navigation-bar">
        <div className="search-container">
          <button className="search-icon" aria-label="Search"><FaMagnifyingGlass/></button>
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
      <div className="post-container">
        <div className="post-column">
          {/* Image 1 */}
          <img src="/1.jpg" alt="Post 1" />
          <p className="image-name">MBS</p>
        </div>
        <div className="post-column">
          {/* Image 2 */}
          <img src="/1.jpg" alt="Post 2" />
          <p className="image-name">MBS</p>
        </div>
        <div className="post-column">
          {/* Image 3 */}
          <img src="/1.jpg" alt="Post 3" />
          <p className="image-name">MBS</p>
        </div>
      </div>
      {isLoginOpen && <Login onClose={closeLogin} />}
    </div>
  );
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  };
  
  const leftStyle = {
    flexGrow: 1,
  };
  
  const rightStyle = {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
    textAlign: 'center', 
  };

export default HomePage;