import "./App.css";
import Navbar from "./components/Navbar";

import TextForms from "./components/TextForms";
import About from "./components/About";
import React,{ useState } from 'react';


function App() {
  const[mode,setMode] = useState('light'); //wether dark mode is on or off
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" home="Home" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> 

      {/* <Navbar title="Textutils"/>  */}
      {/* <Navbar/>  */}
      <div className="container my-3">
          <TextForms heading="Enter the text to analyze" mode={mode}/>
      </div>
      <div className="container my-3">
        <About mode={mode}/>
      </div>
      
    </>
  );
}

export default App;
