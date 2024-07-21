import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../../store/fetchslic1";

export default function Order(){
    const dispatch=useDispatch()
    const order =useSelector((i)=>i.products.product)
    useEffect(()=>{dispatch(getData())},[dispatch])

    return (<>

    {console.log(order)}
    <div className="container my-4">
    <div className="row ">
    <div className="col md-8 mx-auto rounded border p-4 ">
        <h2 className="text-center mb-5">view orders</h2>
          <form className="my-4"> 
            
{order.map((item)=>{
    return(<>
   
    <div className="row mb-3">
<label className="col-sm-4 col-form-label">title</label>
<div className="col-sm-8">
<input className="form-control"  value={item.title} readOnly/>
{/* <span className="text-danger">{handlerorr.price}</span> */}

</div>
</div>

<div className="row mb-3">
<label className="col-sm-4 col-form-label">scope</label>
<div className="col-sm-8">
<input className="form-control" name="scope" value={item.scope} readOnly/>
<span className="text-danger"></span>

</div>
</div>
<div className="row mb-3">
<label className="col-sm-4 col-form-label">price</label>
<div className="col-sm-8">
<input className="form-control"  value={item.price} readOnly/>
<span className="text-danger"></span>

</div>
</div>
<div className="row mb-3">
<label className="col-sm-4 col-form-label">Quantity</label>
<div className="col-sm-8">
<input className="form-control" name="cartQuantity" value={item.cartQuantity} readOnly/>
<span className="text-danger"></span>

</div>
</div>
<div className="row mb-3">
<label className="col-sm-4 col-form-label">category</label>
<div className="col-sm-8">
<input className="form-control" name="category" value={item.category} readOnly />
<span className="text-danger"></span>

</div>
</div>
<div className="row mb-3">
<label className="col-sm-4 col-form-label">image</label>
<div className="col-sm-8">
    
<img className="form-control" name="image"  src={item.image}  style={{width:"100px"}} alt="..."/>
{console.log(item.image)}

{/* <img src={"http://localhost:30001/" + item.images } width={"100"}></img> */}
<span className="text-danger"></span>

</div>
</div>


</>)
})

}


<div className="row ">
<div className="offest-sm-4 col-sm-4 d-grid">
    
<button type="submit" className="btn btn-primary" >submit</button>
</div>
<div className=" col-sm-4 d-grid">
<Link to={"/admin/products"} className="btn btn-primary" role="button">cancel</Link>
</div>
</div>
</form>

     
    </div>



    </div>
















    </div>
    
    
    
    
    
    
    
    </>)




}