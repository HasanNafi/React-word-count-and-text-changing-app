
import React, {useState} from "react";
import copy from "copy-to-clipboard";  
//{useState} is a hook


//props is something we pass to the components like argument passing
//state is somthing which contain all values in it
export default function TextForms(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase is clicked" + text)
        let newText =text.toUpperCase();
        setText(newText)
    }

    const handleLowClick =()=>{
      let newText =text.toLowerCase();
      setText(newText)
    }
    const handleCapitalizeClick =()=>{
      let newText =text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      // let newText =text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      setText(newText)
    }
    
    const handleEmailExtract =()=>{
      let matchedEmails= text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
      document.getElementById("email").innerHTML = matchedEmails
      
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
    }

    const handleCopy = ()=>{
      copy(text);
      alert('Copied');
      // var text = document.getElementById("mybox");
      // text.Select();
      // navigator.clipboard.writeText(text.value);

    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const handleClear =()=>{
      let newText ="";
      setText(newText)
    }
    const handleOnChange =(event)=>{
        // console.log("Handle Onchange")
        
        setText(event.target.value)
    }
    
    const [text, setText] = useState(""); //text is initial variable which initially contains "Enter Text Here" this text
// and will be replaced by setText variable's values from the textarea property

    //text = "new text"; //wrong way to change the state
   // setText = ("new text"); //correct way to change the state
  return (
    
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">      
        <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} value={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase  </button>
      <button className="btn btn-info mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-success mx-1" onClick={handleCapitalizeClick}>Capitalize text</button>
      <button className="btn btn-secondary mx-1" onClick={handleEmailExtract}>Extract Email</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      <button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-info mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-danger mx-1" onClick={handleClear}>Clear</button>
    </div>
    
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>It will take {0.008 * text.split(" ").length} minutes to read</p>
    </div>

    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
      <h3>Extracted emails from text</h3>
      <p>Emails: <span id="email"></span></p>
    </div>
    </>
  );
}
