import { Container, Row } from "react-bootstrap";

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Subtitle } from "../../components/uitily/subtitle1";
import {  getData } from "../../store/createslic1";
import Cardproduct from "../../components/products/productcard1";
// import Cardproduct from "../components/products/producttcard";

export default function Searching(){
  const data=useSelector((item)=>item.productss.countersearch)
  const dispatch=useDispatch()
  

//   useEffect(()=>{
//   dispatch(getData())

// console.log(data)
  
//   },[])
 
return(

  <Container>
    <Row className='d-flex justify-content-between my-'>
     


<Subtitle title />

{data.map((item)=>{
  return(
    
    
<Cardproduct key={item.id} img={item.images} title={item.title} price={item.price} scope={item.scope} item={item}/>

  )
})}


</Row></Container>
)


}