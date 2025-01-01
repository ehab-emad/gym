import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData1 } from "../../store/fetchslic1";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function myOrder(){

    const dispatch=useDispatch()
    const order =useSelector((i)=>i.ord.orders)

    ? order.additional_data 
    : typeof additional_data === 'string' 
    ? JSON.parse(order.additional_data) 
    : [];

    const loading =useSelector((i)=>i.ord.loading)
    useEffect(()=>{dispatch(getData1())},[dispatch])

    return (<>

    {console.log(order)}
    <div className="container my-4">
    <div className="row ">
    <div className="col md-8 mx-auto rounded ">
        <h2 className="text-center mb-5">view orders</h2>

        {
            loading ? <h2>loading</h2>:    
                <> 
            
            {order.map((item)=>{
         const parsedData = Array.isArray(item.additional_data) 
         ? item.additional_data 
         : typeof additional_data === 'string' 
         ? JSON.parse(item.additional_data) 
         : [];
                return(<form className="Orderform border p-4 my-5" key={item.id}>
               
                <div className="row mb-3">
            <label className="col-sm-4 col-form-label">title</label>
            <div className="col-sm-8">
            <input className="form-control"  value={item.name} readOnly/>
            
            </div>
            </div>
            
            <div className="row mb-3">
            <label className="col-sm-4 col-form-label">location</label>
            <div className="col-sm-8">
            <input className="form-control" name="scope" value={item.location} readOnly/>
            <span className="text-danger"></span>
            
            </div>
            </div>
            <div className="row mb-3">
            <label className="col-sm-4 col-form-label">phonenumber</label>
            <div className="col-sm-8">
            <input className="form-control"  value={item.phonenumber} readOnly/>
            <span className="text-danger"></span>
            
            </div>
            </div>
            <div className="row mb-3">
            <label className="col-sm-4 col-form-label">email</label>
            <div className="col-sm-8">
            <input className="form-control" name="cartQuantity" value={item.email} readOnly/>
            <span className="text-danger"></span>
            
            </div>
            </div>
            <div className='d-flex  '>
          
            <table  class="table table-striped ">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th className="limit" scope="col">Product</th>
                        <th className="limit" scope="col">Title</th>
                        <th className="limit" scope="col">Unit Price</th>
                        <th className="limit" scope="col">quantity</th>
                        <th  className="limit" scope="col">Total Price</th>
                    </tr>
                </thead>
             
               {parsedData.map((cart) => {
                    return (
            <>  <tbody>
                        <tr key={cart.id}>
                            {/* <th scope="row text-center">{ }</th> */}
                            <td>
                                <img alt="..." src={"https://json-server-6-yt8p.onrender.com/public/images/" + cart.images} style={{ width: "35px", height: "50px" }} name="image"/> </td>
                            <td className="tot" style={{width:"190px",fontSize:"12px"}}>{cart.title}</td>
                            <td style={{fontSize:"12px",width:"10px"}}>{cart.price} EG</td>
                            <td className=" " style={{ height: "20px" }}>
                              
                                <div className="quantity" >{cart.cartQuantity}</div>
                              
                            </td>
                            <td style={{fontSize:"12px"}}>{((cart.price) * cart.cartQuantity)} EG</td>
                            
                              
                        </tr>
            
                    </tbody>
            </>
                    )
            
                
            
                  
            })}
            
            </table>
     
            
            </div>
          <button className="btn btn-danger" onClick={()=>{
            deleteorder(item.id)
          }}>delete order</button>
            
            </form>)
            })
            
            }
            
{/*             
            <div className="row ">
            <div className="offest-sm-4 col-sm-4 d-grid">
                
            <button type="submit" className="btn btn-primary" >submit</button>
            </div>
            <div className=" col-sm-4 d-grid">
            <Link to={"/admin/products"} className="btn btn-primary" role="button">cancel</Link>
            </div>
            </div> */}
            </>
            
                 
        }
  
    </div>



    </div>
















    </div>
    
    
    
    
    
    
    
    </>)




}