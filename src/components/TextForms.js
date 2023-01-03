
import React, {useState} from "react";
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
      // console.log("Uppercase is clicked" + text)
      let newText =text.toLowerCase();
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
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">      
        <textarea className="form-control" id="myBox"  onChange={handleOnChange} value={text} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase  </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
    </div>
    
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>It will take {0.008 * text.split(" ").length} minutes to read</p>
    </div>
    </>
  );
}
