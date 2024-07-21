import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CALCULATE_SUBTOTAL, CLEAR_CART } from "../../store/cartslic1";
import swal from "sweetalert";

export default function Checkout(){
 
  
    const native=useNavigate()
    // const dispatch=useDispatch()
//     const handlesubmit=(e)=>{
// e.preventDefault()
// // dispatch(addproduct({id:product.length+1,category:category,title:title,scope:scope,image:image,price:price}))
// native("/admin/products")
// // console.log(image)
// // console.log(product.length+1)
// const categories=useSelector((item)=>item.catogeryy.ll)
const carts = useSelector((state) => state.carts.cartItems)
// const [isreal,setisreal]=useState(false)


   
const dispatch=useDispatch()


// useEffect(()=>{
// dispatch(getData1())},[])

//     }
// const [handlerorr,sethandlerorr]=useState({})
async function handlesubmit(event){
    event.preventDefault()

    const formData=new FormData(event.target)
    console.log(formData)
    // const product=Object.fromEntries(formData.entries())
    // console.log(product)

    dispatch(CALCULATE_SUBTOTAL())
    // if(!product.title || !product.category || !product.price || 
    //     !product.scope){


    //     alert("please fill all the fields")
    //     return
    // }

 try {
    const res=await fetch('http://localhost:30001/informationorder',{
        method:"Post",
        body:formData
    })
    // const data =await res.json()
    if(res.ok){
        swal("sucess processing")

        native("/")
      
    }
    else if(res.status === 400){
        alert("valdtion errors")
    }
    else{
        alert("unable to create the product!")
    }
  }
  catch(erorr){
    alert("unable to connect to server!")

  }
}

    return (<>
  
    <div className="container my-4">
    <div className="row ">
    <div className="col md-8 mx-auto rounded border p-4 ">
        <h2 className="text-center mb-5">view product</h2>
       
       
{carts.map((item)=>{
     
    return(<>
     <form onSubmit={handlesubmit}>  
        
    <div className="row mb-3">
<label className="col-sm-4 col-form-label">title</label>
<div className="col-sm-8">
<input className="form-control" name="title" value={item.title} readOnly/>
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
<label className="col-sm-4 col-form-label">scope</label>
<div className="col-sm-8">
<input className="form-control" name="price" value={item.price*item.cartQuantity} readOnly/>
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
<img className="form-control" name="image"  alt="..."  src={"http://localhost:30001/" + item.images }  style={{width:"100px"}}/>
{/* <img src={"http://localhost:30001/" + item.images } width={"100"}></img> */}
<span className="text-danger"></span>

</div>
</div>
<div className="row mb-3 " hidden>
<label className="col-sm-4 col-form-label"  hidden>image</label>
<div className="col-sm-8">
<input className="form-control" name="image"   value={ "http://localhost:30001/"+ item.images }  style={{width:"100px"}} hidden/>
{/* <img src={"http://localhost:30001/" + item.images } width={"100"}></img> */}
<span className="text-danger"></span>

</div>
</div>

<div className="row mb-3">
<label className="col-sm-4 col-form-label">name</label>
<div className="col-sm-8">
<input className="form-control" name="name" required />
{/* <span className="text-danger">{handlerorr.price}</span> */}

</div>
</div>
<div className="row mb-3">
<label className="col-sm-4 col-form-label">location</label>
<div className="col-sm-8">
<input className="form-control" name="location" required />
{/* <span className="text-danger">{handlerorr.price}</span> */}

</div>
</div>
<div className="row mb-3">
<label className="col-sm-4 col-form-label">phonenumber</label>
<div className="col-sm-8">
<input className="form-control" name="phonenumber" required/>
{/* <span className="text-danger">{handlerorr.price}</span> */}

</div>
</div>
<div className="row mb-3">
<label className="col-sm-4 col-form-label">email</label>
<div className="col-sm-8">
<input className="form-control" name="email" type="email" required/>
{/* <span className="text-danger">{handlerorr.price}</span> */}

</div>
</div>


<div className="row ">
<div className="offest-sm-4 col-sm-4 d-grid">
<button  type="submit" className="btn btn-primary" onClick={()=>dispatch(CLEAR_CART())} >submit</button>
</div>
<div className=" col-sm-4 d-grid">
<Link to={"/admin/products"} className="btn btn-primary" role="button">cancel</Link>
</div>
</div>
</form>
</>)
})}

     
    </div>



    </div>
















    </div>
    
    
    
    
    
    
    
    </>)




}