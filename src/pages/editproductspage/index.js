import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getData1 } from "../../store/gategoryslic1";
import axios from "axios";
import { toast } from "react-toastify";
// import { getData1 } from "../../store/gatogeryslic1";

export default function Editproduct(){
 
    const [title,settitle]=useState("")
    const [scope,setscope]=useState("")
    const [price,setprice]=useState(0)
    const [fame,setfame]=useState(false)
    const [image,setimage]=useState("")
    const [category,setcategory]=useState("")
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
    getproduct()
dispatch(getData1())},[])

//     }
const params=useParams()
async function handlesubmit(event){
    event.preventDefault()

    const formData=new FormData()
   formData.append("title",title)
   formData.append("scope",scope)
   formData.append("category",category)
   formData.append("image",image)
   formData.append("fame",fame)

 try {
    const res=await fetch('https://json-server-6-yt8p.onrender.com/products/'+ params.id,{
        method:"PATCH",
        body:formData
    })
    // const data =await res.json()
    if(res.ok){
toast.success("You updates Product successfully")
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
const  getproduct=async()=>{
    try {
        const res = await axios.get(`https://json-server-6-yt8p.onrender.com/products/${params.id}`);
        setintaildata(res.data); // تعيين البيانات للحالة
      } catch (error) {
        console.error('Error fetching product:', error);
      }
}
 

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
     <input className="form-control" name="title" defaultValue={initialdata.title}  onChange={(e)=>settitle(e.target.value)}/>
     {/* <span className="text-danger">{handlerorr.price}</span> */}
     
     </div>
     </div>
     <div className="row mb-3">
     <label className="col-sm-4 col-form-label">scope</label>
     <div className="col-sm-8">
     <input className="form-control" name="scope" defaultValue={initialdata.scope} onChange={(e)=>setscope(e.target.value)}/>
     <span className="text-danger"></span>
     
     </div>
     </div>
     <div className="row mb-3">
     <label className="col-sm-4 col-form-label">category</label>
     <div className="col-sm-8">
     <select className="form-select" name="category"   defaultValue={initialdata.category} onChange={(e)=>setcategory(e.target.value)}>
     
     {categories.map((item)=>{return(<>
         <option value={item.category}> {item.category}</option>
     
     {console.log(initialdata)}
     </>)})}
     
     </select>
     <span className="text-danger"></span>
     
     </div>
     </div>
     <div className="row mb-3">
     <label className="col-sm-4 col-form-label">price</label>
     <div className="col-sm-8">
     <input className="form-control" name="price" type="number" step='0.01' min='1' value={initialdata.price}  onChange={(e)=>setprice(e.target.value)}/>
     <span className="text-danger"></span>
     
     </div>
     </div>
     <div className="row mb-3">
     <label className="col-sm-4 col-form-label">fame</label>
     <div className="col-sm-8">
     <input className="form-control1" name="fame" type="checkbox" step='0.01' min='1' defaultChecked={initialdata.fame}  onChange={(e)=>setfame(e.target.checked)} />
     <span className="text-danger"></span>
     
     </div>
     </div>
     <div className="row mb-3">  
          <label className="col-sm-4 col-form-label">image</label>
     <div className=" col-sm-8"> 
     <img src={"https://json-server-6-yt8p.onrender.com/public/images/" + initialdata.images  } width='150' alt="...."/>
     <span className="text-danger"></span>
     
     </div>
     </div>
     <div className="row mb-3">
     <label className="col-sm-4 col-form-label">image</label>
     <div className="col-sm-8">
     <input className="form-control" name="image" type="file"   onChange={(e)=>setimage(e.target.files[0])}/>
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