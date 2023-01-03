import "./App.css";
import Navbar from "./components/Navbar";

import TextForms from "./components/TextForms";


function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" aboutText="About Us"/> 

      {/* <Navbar title="Textutils"/>  */}
      {/* <Navbar/>  */}
      <div className="container my-3">
          <TextForms heading="Enter the text to analyze"/>
      </div>
      
    </>
  );
}

export default App;
