import { Row } from 'react-bootstrap'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/createslic1'
import { Subtitle } from '../uitily/subtitle1'
import Cardproduct from '../products/productcard1'
// import Cardproduct from '../products/producttcard'
export function Hompeproducts({btntitle,title}){
    const products=useSelector((item)=>item.productss.product)
    const dispatch=useDispatch()


    useEffect(()=>{
    dispatch(getData())
   console.log(products)
    },[dispatch])
    return(

<Row className='d-flex justify-content-between my-'>



<Subtitle
 title={title} btntitle={btntitle}/>

{products.map((item)=>{
  if(item.fame==="yes"){  
    if(item.num<=6)
        {
            return(<>
<Cardproduct key={item.id} img={item.images} title={item.title} price={item.price} scope={item.scope} item={item}/>
               
     
                </>)
        }
   
    }
})}



</Row>




    )
}