import { Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Subtitle } from "../../components/uitily/subtitle1"
import { useEffect } from "react"
import { getData } from "../../store/createslic1"
import Cardproduct from "../../components/products/productcard1"
// import Cardproduct from "../components/products/producttcard1"

export default function Moree({title}){
    const data=useSelector((item)=>item.productss.product)
    const dispatch=useDispatch()
    
  
    useEffect(()=>{
    dispatch(getData())
    console.log(data)})

    return(<Container>
        <Row className='d-flex justify-content-between my-'>
         
    
   
   
    <Subtitle title={title} />
    
    {data.map((item)=>{
        if(item.fame==="yes"){
            return(
          <Cardproduct key={item.id} img={item.images} title={item.title} price={item.price} scope={item.scope} item={item}/>
          
          
            )}
    })}
    
    
    </Row></Container>
    )



}