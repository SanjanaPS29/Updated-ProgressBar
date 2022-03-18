import React,{useState,useEffect} from 'react';
import './CloudIcon.css';
import profile from './profile.jfif';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function () {

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
    size: 55,
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
    <div className="Main-Container">
           <div className="Container">
                   <div className="Content">
                         <div className="profileOuterStyle">
                             <ProgressBar  size={size} progress= {details.skill_percentage} strokeWidth={strokeWidth}
                                    circleOneStroke= {"#d9edfe"}  circleTwoStroke={"#5ed38e"} /> 
                             
                            <img className="profileStyle" src={profile} />
                        </div>
                        <div className="iconText">Cloud DGJfffJDJKfdffffJFG JF</div>
                 </div>
                <div className="skillHover" style={{marginLeft:"1px"}}>
                          <ProgressBar  size={30} progress= {details.skill_percentage} strokeWidth={5}
                    circleOneStroke= {"#d9edfe"}  circleTwoStroke={"#5ed38e"} />
                      <div className="skillStyle">
                        <div className="percentageStyle"> {details.skill_percentage}<span>%</span></div>
                        <div className="skillMatch">Skills Match</div>
                      </div>
                </div>
           </div>
    </div>
  )
}
