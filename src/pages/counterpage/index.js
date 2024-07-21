import { Container, Row } from "react-bootstrap";

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Subtitle } from "../../components/uitily/subtitle1";
import {  getData } from "../../store/createslic1";
import Cardproduct from "../../components/products/productcard1";
// import Cardproduct from "../components/products/producttcard";

export default function Oneproducts(){
  const data=useSelector((item)=>item.productss.pro)
  const dispatch=useDispatch()
  

  useEffect(()=>{
  dispatch(getData())

console.log(data)
  
  },[dispatch])
  const cat= new Set(data.map((item)=>item.category));
  const des= new Set(data.map((item)=>item.desc))
return(

  <Container>
    <Row className='d-flex justify-content-between my-'>
     

<div className="text-center fs-">{cat} </div>
<p className="p-text">{des}</p>

<Subtitle title />

{data.map((item)=>{
  return(
    
    
<Cardproduct key={item.id} img={item.images} title={item.title} price={item.price} scope={item.scope} item={item}/>

  )
})}


</Row></Container>
)


}