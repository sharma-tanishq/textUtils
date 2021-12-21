import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUpperClick = () => {
        setText(text.toUpperCase());
        props.showAlert("success","Text changed to Upper case")
    }
    const handleLowerClick = () => {
        setText(text.toLowerCase());
        props.showAlert("success","Text changed to Lower case")
    }
    const handleToggleClick = () => {
        let textClone = text;
        var newText = "";
        for (let i = 0; i < textClone.length; i++) {
            if (textClone[i] >= 'A' && textClone[i] <= 'Z')
                newText += textClone[i].toLowerCase();
            else if (textClone[i] >= 'a' && textClone[i] <= 'z')
                newText += textClone[i].toUpperCase();
            else
                newText += textClone[i];
        }
        setText(newText);
        props.showAlert("success","Text case toggled")
    }
    const handleExtraSpace = () => {
        setText(text.split(" ").filter((element)=>element.length===0?false:true).join(" "));
        props.showAlert("success","Extra spaces removed");
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("success","Text cleared");
    }
    const handleOnChange = (events) => {
        setText(events.target.value);
    }

    return (
        <div>
            <div className='mb-3'>
                <label htmlFor="myBox" className={`form-label`} style={{color: props.mode==="light"?"black":"white"}}> <h4>Enter your text here</h4></label>
                <textarea className={`form-control textarea-${props.mode}`} placeholder='Enter Text Here' id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button type="button" disabled={text.length===0?true:false}  className={`btn btn-${props.mode} mx-1`} onClick={handleUpperClick}>Convert To Uppercase</button>
            <button type="button" disabled={text.length===0?true:false}  className={`btn btn-${props.mode} mx-1`} onClick={handleLowerClick}>Convert To Lowercase</button>
            <button type="button" disabled={text.length===0?true:false}  className={`btn btn-${props.mode} mx-1`} onClick={handleToggleClick}>Toggle case</button>
            <button type="button" disabled={text.length===0?true:false}  className={`btn btn-${props.mode} mx-1`} onClick={handleExtraSpace}>Remove extra spaces</button>
            <button type="button" disabled={text.length===0?true:false}  className={`btn btn-${props.mode} mx-1`} onClick={handleClearClick}>Clear Text</button>
            <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
                <h5 className='my-3'>Text Summary</h5>
                <p>{text.replace(/ /g, "").replace(/\n/g, "").length} characters {text.split(" ").join(",").split("\n").join(",").split(",").filter((element)=>element.length===0?false:true).length} words and {text.split("\n").filter((element)=>element.length===0?false:true).length} line </p>
            </div>
        </div>
    )
}
