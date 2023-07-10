import React,{useState} from 'react'


export default function TextForm(props) {
    const [text , setText]= useState('');

   const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Text is UpperCase","success");
    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text is LowerCase","success");
    }

    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text is Clear","success");
    }

   const handleCopyText=()=>{
    let newtext=document.getElementById("mybox");
    newtext.select();
    navigator.clipboard.writeText(text.value);
    //document.execCommand("copy");
    props.showAlert("Text is Coppied","success");
   }

    const handleOnchange=(event)=>{
        setText(event.target.value);
    }
    return (
        <div>
            <div className='mb-3'>
            <h1>Enter The Text</h1>
                <textarea className='form-control'value={text} onChange={handleOnchange} id="mybox" rows="8">
                </textarea><br></br>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert To Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopyText}>Copy All Text</button>

            </div>
            <div className='container'>
                <h2>Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div> 
        </div>
    )
}
