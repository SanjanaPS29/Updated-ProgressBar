import React, {useState,useEffect} from 'react'
import Architecture from '../Architecture/Architecture';
import ProgressBar from '../ProgressBar/ProgressBar';
import './BoxIcon.css'

 function BoxIcon() {

    const [offset, setOffset] = useState(0);

    const [details, setDetails] = useState({
      band: "P1A",
      career_stream: "TECDEL",
      career_stream_name: "Technology Delivery",
      designation: "Engineer - Cloud & Data Centre(P1A)",
      icon: "http://ml.dev2.com/assets/images/ch_icons/cs/technology_delivery.svg",
      job_family: "CLOUDT",
      job_family_name: "Cloud & Data Center",
      jobcode: "TEST01",
      ml_roleid: "1",
      mw_roleid: "R001",
      profile_pic: "http://ml.dev2.com/assets/images/user.svg",
      skill_percentage: 9,
    });
  
    const state = {
      size: 20,
      progress: details.skill_percentage,
      strokeWidth: 4,
      circleOneStroke: "#d9edfe",
      circleTwoStroke: "#5ed38e",
    };
  
    const { size, progress, strokeWidth, circleOneStroke, circleTwoStroke } =
      state;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
  
    useEffect(() => {
      const progressOffset = ((100 - progress) / 100) * circumference;
      setOffset(progressOffset);
    }, []);
  
  

  return (
      <div className="mainContent">
                <div className="boxIcon">
                    {/* <div>icon</div> */}
                    <img src={"http://ml.dev2.com/assets/images/ch_icons/cs/technology_delivery.svg"} />
                </div>
        <div>Business Development and research</div>
    </div>
  )
}



export default BoxIcon;