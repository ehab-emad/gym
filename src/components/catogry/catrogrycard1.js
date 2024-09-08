import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter } from "../../store/createslic1";
import { Subtitle } from "../uitily/subtitle1";
// import { getData1 } from "../../store/gatogeryslic";
import { Row } from "react-bootstrap";
import { getData1 } from "../../store/gategoryslic1";

export function Catogreycard({img,cat,i}){
    const categories=useSelector((item)=>item.catogeryy.ll)
   
    const dispatch=useDispatch()
   

    useEffect(()=>{
    dispatch(getData1())
    // dispatch(fetchCatigories())

   
    },[])
    return( 
        <Row className='d-flex  my-2'>
        
        
        
        <Subtitle title="الاصناف"  pathtext='/allgatogray'/>
    {categories.map((item)=>{
        return(
            <Col key={item.id} xs="6" 
             sm="6"
             md="3"
             lg="2"
            className="my d-flex justify-content-around"
            
            >
                 <Link style={{textDecoration:"none"}} to={"/counterproducts"}  onClick={()=>dispatch(filter(item.category))
                    
                 }
                           >
           <div className="allcard d-flex justify-content-center align-items-center flex-column"> 
        {/* <div className="category-card"  >
        </div> */}
        {""}
        <div className="img-container">{console.log(item.images)}<img src={'https://json-server-6-yt8p.onrender.com/'+item.images} className="category-card-img"  style={{ height:"120px",width:"120px"}}/></div>
        <p className="category-card-text my-2 " >{item.category}</p>
         </div></Link>
            
            
            
            </Col>)
    })}
    
    
    
   
</Row>)
}