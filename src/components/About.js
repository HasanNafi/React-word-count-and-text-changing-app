import React from 'react'

export default function About(props) {
    // const[mystyle,setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // 
    // }

    let myStyle = {
        backgroundColor:props.mode==='light'?'white':'#042743',
        color:props.mode==='light'?'black':'white',
       
    }
    let buttonStyle = {
        backgroundColor:props.mode==='light'?'white':'rgb(36 74 104)',
        color:props.mode==='light'?'black':'white',
    }

  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item"  style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button style={buttonStyle} className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button style={buttonStyle} className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. This, it is suitable for writing text with word/character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button style={buttonStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser compatibility</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>  
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
  )
}