import React from 'react';
import './Profile.css';
import Prof from './settings.svg';

function Profile() {
  return (
    <svg className="profileStyle">
    <image href={Prof} height="20" width="20" style={{filter:"invert(1)"}}/>
  </svg>
    
  )
}

export default Profile;