import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ onClose }) => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');

  const handleSignup = () => {
    // Add signup logic here
    console.log(`Signup details`)
    console.log(`Email: ${Email}`);
    console.log(`password: ${password}`);
    console.log(`gender: ${gender}`);
    console.log(`nationality: ${nationality}`);
    onClose();
  };

//   document.addEventListener('click', function(e) {
//     const genderDropdown = document.querySelector('.gender-dropdown');
//     const genderOptions = document.querySelector('.gender-options');
//     const genderInput = document.getElementById('genderInput');
  
//     if (e.target === genderInput) {
//       genderOptions.style.display = 'block';
//     } else if (!genderDropdown.contains(e.target)) {
//       genderOptions.style.display = 'none';
//     }
//   });
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Sign up to explore more information</h2>
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          id="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="gender">Gender:</label>
       
        <div class="gender-dropdown">
            <input type="text" id="genderInput" 
                onChange={(e) => setGender(e.target.value)} 
                value={gender} 
                placeholder="Select" readonly  />
        
            <ul class="gender-options">
                <li>Male</li>
                <li>Female</li>
            </ul>
        </div>
        {/* <br /> */}
        <label htmlFor="nationality">Nationality:</label>
        <input
          type="nationality"
          id="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
        <button onClick={handleSignup}>Signup</button>
        <button onClick={onClose}>Close</button>
        </div>
      </div>
    
  );
};

export default Signup;
