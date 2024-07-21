import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getData1 } from "../../store/gategoryslic1";
// import { getData1 } from "../../store/gatogeryslic1";

export default function Editproduct(){
 
    // const [title,settitle]=useState("")
    // const [scope,setscope]=useState(0)
    // const [price,setprice]=useState(0)
    // const [image,setimage]=useState("")
    // const [category,setcategory]=useState("")
    const native=useNavigate()
    // const dispatch=useDispatch()
//     const handlesubmit=(e)=>{
// e.preventDefault()
// // dispatch(addproduct({id:product.length+1,category:category,title:title,scope:scope,image:image,price:price}))
// native("/admin/products")
// // console.log(image)
// // console.log(product.length+1)
const categories=useSelector((item)=>item.catogeryy.ll)

   
const dispatch=useDispatch()

const [initialdata,setintaildata]=useState([])

useEffect(()=>{
dispatch(getData1())},[dispatch])

//     }
const params=useParams()
async function handlesubmit(event){
    event.preventDefault()

    const formData=new FormData(event.target)
    console.log(formData)
    const product=Object.fromEntries(formData.entries())
    console.log(product)

    
    if(!product.title || !product.category || !product.price || 
        !product.scope){


        alert("please fill all the fields")
        return
    }

 try {
    const res=await fetch('https://json-server-6-yt8p.onrender.com/products/'+ params.id,{
        method:"PATCH",
        body:formData
    })
    // const data =await res.json()
    if(res.ok){

        native("/admin/products")
      
    }
    else if(res.status === 400){
        alert("valdtion errors")
    }
    else{
        alert("unable to edit the product!")
    }
  }
  catch(erorr){
    alert("unable to connect to server!")

  }
}
function getproduct(){
    fetch('https://json-server-6-yt8p.onrender.com/products/'+ params.id).then(Response=>{
        if(Response.ok){
            return Response.json()
        }
        throw new Error()
    }).then(data=>{
        setintaildata(data)
    })
    .catch(erorr=>{
        alert("unable to read the product details")
    })
}
  useEffect(()=>getproduct(),[getproduct])

    return (<>
    <div className="container my-4">
    <div className="row ">
    <div className="col md-8 mx-auto rounded border p-4 ">
        <h2 className="text-center mb-5">Edit product</h2>
        <div className="row mb-3">
<label className="col-sm-4 col-form-label">id</label>
<div className="col-sm-8">
<input readOnly className="form-control" name="title" defaultValue={params.id}/>
{/* <span className="text-danger">{handlerorr.price}</span> */}

</div>
</div>
   { initialdata &&      <form onSubmit={handlesubmit}>
     
     <div className="row mb-3">
     <label className="col-sm-4 col-form-label">title</label>
     <div className="col-sm-8">
     <input className="form-control" name="title" defaultValue={initialdata.title} />
     {/* <span className="text-danger">{handlerorr.price}</span> */}
     
     </div>
     </div>
     <div className="row mb-3">
     <label className="col-sm-4 col-form-label">scope</label>
     <div className="col-sm-8">
     <input className="form-control" name="scope" defaultValue={initialdata.scope} />
     <span className="text-danger"></span>
     
     </div>
     </div>
     <div className="row mb-3">
     <label className="col-sm-4 col-form-label">category</label>
     <div className="col-sm-8">
     <select className="form-select" name="category" >
     
     {categories.map((item)=>{return(<>
         <option value={item.category}> {item.category}</option>
     
     
     </>)})}
     
     </select>
     <span className="text-danger"></span>
     
     </div>
     </div>
     <div className="row mb-3">
     <label className="col-sm-4 col-form-label">price</label>
     <div className="col-sm-8">
     <input className="form-control" name="price" type="number" step='0.01' min='1' defaultValue={initialdata.price}  />
     <span className="text-danger"></span>
     
     </div>
     </div>
     <div className="row mb-3">  
          <label className="col-sm-4 col-form-label">image</label>
     <div className=" col-sm-8"> 
     <img src={"https://json-server-6-yt8p.onrender.com/" + initialdata.images  } width='150' alt="...."/>
     <span className="text-danger"></span>
     
     </div>
     </div>
     <div className="row mb-3">
     <label className="col-sm-4 col-form-label">image</label>
     <div className="col-sm-8">
     <input className="form-control" name="image" type="file"  />
     <span className="text-danger"></span>
     
     </div>
     </div>
     <div className="row ">
     <div className="offest-sm-4 col-sm-4 d-grid">
     <button type="submit" className="btn btn-primary" >submit</button>
     </div>
     <div className=" col-sm-4 d-grid">
     <Link to={"/admin/products"} className="btn btn-primary" role="button">cancel</Link>
     </div>
     </div>
     
     
     
     
     
             </form>}
    </div>



    </div>
















    </div>
    
    
    
    
    
    
    
    </>)




}