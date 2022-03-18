import logo from './logo.svg';
import './App.css';
import React,{useContext} from 'react';

// import Cloud from './Cloud/Cloud';
// import StraightLine from './StraightLine/StraightLine';
// import CircleDot from './CircleDot/CircleDot';
// import CircleMulti from './CircleMulti/CircleMulti';
// import BoxIcon from './BoxIcon/BoxIcon';
// import BoxIcon from './AAA/BoxIcon';
import Architecture from './Architecture/Architecture';
import DropDown from './DropDown/DropDown';
// import Profile from './Profile/Profile';
// import Architecture from './Architecture/Architecture';
// import ProgressBar from './ProgressBar/ProgressBar';

import Hooks from './Hooks/Hooks';
import Reducer from './Hooks/Reducer';

const mood="happy";

export const MoodContext = React.createContext({});

function App() {
  return (

    <div className="App" >
  
      {/* <Hooks/> */}
    
<Reducer/>

{/* <DropDown/> */}

{/* <Cloud/> */}
{/* <Architecture/> */}

{/* <BoxIcon/> */}
{/* <Profile/> */}
    </div>
  
  );
}



// function Hooks(){
//   const mood=useContext(MoodContext);
//   return <p>{mood}</p>
// }




export default App;
