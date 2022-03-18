import React from 'react'
import CircleDot from '../CircleDot/CircleDot';
import CircleMulti from '../CircleMulti/CircleMulti';
import './Architecture.css';

 function Architecture() {
  return (
    <div className="content">
        <CircleDot/>
        <div className="dottedLine" style={{width:"90%"}} ></div>
        <CircleMulti/>
        <div className="dottedLine" style={{width:"10%"}}></div>
    </div>
  )
}


export default Architecture;