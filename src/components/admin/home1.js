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
            dispatch(getData())
           
        })
        .catch(erorr=>{
            alert("unable to delete the product details")
        })
    }

 
const data=useSelector((state)=>state.productss.product)
const dispatch=useDispatch()
useEffect(()=>{dispatch(getData())},[dispatch])
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
<table className="table">

    <thead>
        <tr>

            <th>
ID
            </th> <th>
Name
            </th> <th>
Category
            </th> <th>
Price
            </th> <th>
Image
            </th> <th>
scope
            </th><th>
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
<td>{item.id}</td>
<td>{item.title}</td>
<td>{item.category}</td>
<td>{item.price}$</td>
<td><img src={"https://json-server-6-yt8p.onrender.com/" + item.images } width={"100"} alt="..."></img></td>
{/* {console.log("http://localhost:30001/" + item.images)} */}
<td>{item.scope}</td>
<td style={{width:"10px",whiteSpace:"nowrap"}}>
    <Link to={'/admin/products/edit/' + item.id } className="btn btn-danger btn-sm ">تعديل</Link> 
     <button onClick={()=>deleteproduct(item.id)} className="btn btn-primary btn-sm me-1">حذف</button>
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