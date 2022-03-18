import React from "react";
import "./DropDown.css";

function DropDown() {
  return (
    <div>
 
  {/* <input list="browsers" name="myBrowser" style={{height:"30px"}}/>
  <datalist id="browsers">
    <option value="Internet Explorer"/>
    <option value="Firefox"/>
    <option value="Chrome"/>
    <option value="Opera"/>
    <option value="Safari"/>
  </datalist>  */}

      <select className="dropDown a">

        <option value="">DataB</option> 
     
        <option value="Cloud" style={{padding:"12px"}} selected>
          Cloud
        </option>
    
        <option value="Backup"  selected>
         Backup
        </option>
    
        <option value="Data Center"  selected>
         Data Center
        </option>
        
        <option value="CIS"  selected>
        CIS
        </option>
      </select> 
      {/* <input list="select" name="select"/>
<datalist class="form-control" id="select">    
  <option value="Trans"/>
  <option value="Fund"/>
  <option value="Insta"/>
  </datalist> */}
    </div>
  );
}

export default DropDown;
