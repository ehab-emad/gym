import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/createslic1";
import { Link } from "react-router-dom";

export default function Home(){
    function deleteproduct(id){
        fetch('https://json-server-6-yt8p.onrender.com/products/'+ id,{
            method:"DELETE"
        }).then(Response=>{
            if(!Response.ok){
                throw new Error()
              
            }
           
           
        })
        .catch(erorr=>{
            alert("unable to delete the product details")
        })
    }

 
const data=useSelector((state)=>state.productss.product)
const dispatch=useDispatch()
// useEffect(()=>{dispatch(getData())},[dispatch])
return(
<Container>
<h2 className="title-st">products</h2>
<Row className="">
   
    <Col>
    </Col>
    <Col >
   
    <button className="btn btn-outline-primary" onClick={()=>dispatch(getData())}>Refresh </button>
    <Link to={"/admin/products/createproduct"}> <button className="btn btn-primary  me-1">createproduct</button></Link>
    <Link to={"/admin/products/orders"}> <button className="btn btn-primary  me-1">orderview</button></Link>
    </Col>
</Row>
<table style={{width:"340px"}} className="table">

    <thead style={{width:"10px"}}>
        <tr >

            <th className="ko">
ID
            </th> <th className="ko">
Name
            </th> <th className="ko">
Category
            </th> <th className="ko">
Price
            </th> <th className="ko">
Image
            </th> <th className="ko">
scope
            </th><th className="ko">
actions
            </th>
        </tr>
    </thead>
    <tbody>
    {
data.length>0 ? 
(data.map((item)=>{
return(
    <>
    <tr>
<td className="ko">{item.id}</td>
<td className="ko">{item.title}</td>
<td className="ko">{item.category}</td>
<td className="ko">{item.price}$</td>
<td><img src={"https://json-server-6-yt8p.onrender.com/" + item.images } width={"40"} alt="..."></img></td>
{/* {console.log("http://localhost:30001/" + item.images)} */}
<td className="ko">{item.scope}</td>
<td style={{width:"9px",whiteSpace:"nowrap",} } className="d">
    <Link to={'/admin/products/edit/' + item.id } className="btn btn-danger btn-sm " style={{fontSize:"10px"}}>تعديل</Link> 
     <button onClick={()=>deleteproduct(item.id)} className="btn btn-primary btn-sm mt-1 d-block ko" >حذف</button>
</td>






</tr>
    
    </>
)

})):<h3>no data found</h3>
    }
    </tbody>
   
</table>


</Container>





)



}