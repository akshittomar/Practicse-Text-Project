import About from "./components/About";
import Contact from "./components/Contact";
import TextArea from "./components/TextArea";
import Navbar from "./components/Navbar";
import {useState} from "react";


import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
function App() {
  var dark = {backgroundColor:"#3b3b3bff"};
var light = {backgroundColor:"#ffffffff"};
var  lColor = {color:"#3b3b3bff"};
var  dColor = {color:"#ffffffff"};
var textArea = {backgroundColor:"#fffefeff",color:"black"} ;
var darkTextArea = {backgroundColor:"#474747ff",color:"#fff"} ;

const [mode , setMode] = useState("light");

  return (
    <div style={mode==="light"?light:dark}>
    <Router>
<div className=" mt-5">
<Navbar mode={mode} setMode={setMode} light={light} dark={dark}  ></Navbar>
</div>
      <Routes>
         <Route exact path='/' element={<TextArea mode={mode} lColor={lColor} dColor={dColor} light={light} dark={dark} textArea={textArea} darkTextArea={darkTextArea}></TextArea>}  />
        <Route exact path='/textArea' element={<TextArea mode={mode} lColor={lColor} dColor={dColor}  light={light} dark={dark} textArea={textArea} darkTextArea={darkTextArea}  ></TextArea>}  />
        <Route exact path='/about' element={<About></About>}  />
        <Route exact path='/contact' element={<Contact></Contact>}  />
      </Routes>
      </Router>
    </div>
  );
}

export default App
