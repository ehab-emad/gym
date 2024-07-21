import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export function Subtitle({title,btntitle,pathtext}){
    return(<div className="d-flex justify-content-between pt-4 fs-5" style={{marginBottom:"3px"}}>
    <div>
{title} 

    </div>
    
{btntitle ?(<Link to={'/More'} ><Button className="btn-btn-info"> {btntitle} </Button></Link>):null}

  
    
    
    
    </div>)
}