import { Link } from 'react-router-dom';

export default function Navbar(props)
{
    
    return (
        <nav className='mx-3'>
            <Link to="/textArea" className='btn btn-primary '  >Text Area</Link> &nbsp;&nbsp;
            <Link to="/about" className='btn btn-primary'   >About</Link> &nbsp;&nbsp;
            <Link to="/contact" className='btn btn-primary' >Contact</Link> &nbsp;&nbsp;
            <button className='btn' onClick={()=>{props.mode==="light"?props.setMode("dark"):props.setMode("light");}} >{props.mode.toUpperCase()} MODE</button>
        </nav>
    )
}
