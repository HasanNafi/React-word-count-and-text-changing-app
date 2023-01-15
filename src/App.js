import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About";
import React,{ useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const[mode,setMode] = useState('light'); //wether dark mode is on or off
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success")
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success")
    }
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextUtils" home="Home" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> 

      {/* <Navbar title="Textutils"/>  */}
      {/* <Navbar/>  */}
      <div><Alert alert={alert}/></div>
      <div className="container my-3">
          <Routes>
            {/* using "exact" before path="" is necessary otherwise react matches partially and will load another page */}
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForms heading="TextUtils - Word counter, Character counter, Remove Extra Spaces"  mode={mode} showAlert={showAlert} />} />
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
