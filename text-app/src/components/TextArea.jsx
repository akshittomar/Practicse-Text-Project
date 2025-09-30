import { useState } from "react";
import Alert from "./Alert";
export default function TextArea(props) {
  const [text, setText] = useState("Welcome to text util");
  const[alert,setAlert] = useState(false);

  function handleChange(event) {
    setText(event.target.value);

    
  }
  function handelLower() {
    setText(text.toLowerCase());
    
 setAlert(true);
      setTimeout(()=>{
        setAlert(false);
      },1000)
     
  }
  function handelUpper() {
    setText(text.toUpperCase());
  }
  function handelClear() {
    setText("");
  }


  function showCount()
  {
    var num  = text.split(" ").length-1;
    
    return num.toString();
  }
  return (
    <>
    { alert &&  <Alert></Alert> }
      <div>
        <h2  style={props.mode==="light"?props.lColor:props.dColor} >Enter Your Text Below</h2>
        <textarea
          style={{
            ...(props.mode === "light" ? props.textArea : props.darkTextArea),
            width: "80%",
            height: "450px"
          }}
          placeholder="Let's begin....."
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>

      <div style={{ display: "flex" }}>
        <div>
          {" "}
          <button onClick={handelUpper} style={props.mode==="light"?props.textArea:props.darkTextArea} >Upper Case</button>{" "}
        </div>{" "}
        &nbsp;&nbsp;
        <div>
          {" "}
          <button onClick={handelLower}  style={props.mode==="light"?props.textArea:props.darkTextArea} >Lower Case</button>{" "}
        </div>{" "}
        &nbsp;&nbsp;
        <div>
          {" "}
          <button onClick={handelClear} style={props.mode==="light"?props.textArea:props.darkTextArea}  >Clear Text</button>{" "}
        </div>{" "}
        &nbsp;&nbsp;
      </div>
      <div>
        <h5 style={props.mode==="light"?props.lColor:props.dColor}>Please Preview Your Text Here : {text}</h5>
        <p  style={props.mode==="light"?props.lColor:props.dColor} >Word Count : {showCount()}</p>
        

      </div>
    </>
  );
}
