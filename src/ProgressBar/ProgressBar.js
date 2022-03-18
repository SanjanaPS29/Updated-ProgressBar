import React,{useState,useEffect} from 'react';
import './ProgressBar.css';

 
export default function ({size,strokeWidth,circleOneStroke,circleTwoStroke,progress}) {

  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, []);


  return (

                <svg className="progress-bar" width={size} height={size}>
                  <circle
                    className="circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                  ></circle>
                  <circle
                    className="circle"
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                  ></circle>
                </svg>                 
  )
}
