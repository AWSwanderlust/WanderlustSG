import React, { useState, useEffect } from 'react';
import './information.css';
import { FaRegUser } from "react-icons/fa";
import HomePage from './HomePage';
import { GrLocation } from "react-icons/gr";
import { Link } from 'react-router-dom'; // Import Link

const InformationPage = () => {
  return (
    <div>
      <header style={headerStyle} className="header">
        <div style={leftStyle}>
            <h1>WanderlustSG</h1>
        </div>
        <div className="nav-links">
        <Link to="/" style={{textDecoration:"None"}}>
            <h2 >Home</h2>
            </Link>
            <h2 style={{color:"#FF4F00"}}>Plan</h2>
        </div>
        <div style={rightStyle}>
            <h1><FaRegUser /></h1>
        </div>
      </header>
      <div style={{height:"100vh"}}>
            <img src="/merlion.jpg" style={{ width: '80%', height: '80%', padding:"0", marginLeft:"10vw"}} />
            <div>
        
      </div>
      <h2>
      <div style={{fontFamily:'Aclonica',display:"flex", alignContent:"center", alignItems:"center", marginLeft:"13.5VW", marginTop:"2VH", color:"black"}}>
            <div style={leftStyle}>Merlion</div>
            <div style={{display:"flex", marginRight:"13vw"}}>
                <GrLocation />
                One Fullerton
                <div style={{marginLeft:"5vw"}}>Ticket price: 0</div>
            </div>
        </div>
        </h2>
        
        <div style={{fontFamily:'Roboto',display:"flex", alignContent:"center", marginTop:"1vh", textAlign:"justify", marginLeft:"13.5VW",
        marginRight: "12vw",color:"black", justifyContent:"center", fontSize:"1.1em", marginTop:"3vh"}}>
            <div>
            
                The Merlion, a symbol synonymous with Singapore, stands as a majestic embodiment of the city-state's rich cultural heritage and modern aspirations.
                This mythical creature, with the head of a lion and the body of a fish, symbolizes Singapore's ancient origins as a fishing village
                (represented by the fish tail) and its transformation into a roaring lion of economic prosperity and progress.
                Designed by the late Singaporean sculptor Lim Nang Seng, the original Merlion statue was unveiled in 1972 at the mouth of the Singapore River. 
                Over the years, it has become an iconic landmark, attracting millions of visitors from around the world.
            </div>
        </div>

       </div>
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

export default InformationPage;