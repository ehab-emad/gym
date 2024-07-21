// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import swal from "sweetalert";
// import { CLEAR_CART } from "../store/cartslic";

// export default function Payment(){const dispatch=useDispatch()
//     // const carts = useSelector((state) => state.carts.cartItems)
//     // console.log(carts)

//     const native=useNavigate()
//     // async function handlesubmits(event){
//     //     event.preventDefault()
    
      
       
    
//     //  try {
//     //     const res=await fetch('http://localhost:30001/informationorder',{
//     //         method:"Post",
//     //         body:carts
//     //     })
//     //     const data =await res.json()
//     //     if(res.ok){
    
//     //         native("/admin/products")
          
//     //     }
//     //     else if(res.status === 400){
//     //         alert("valdtion errors")
//     //     }
//     //     else{
//     //         alert("unable to create the personifo!")
//     //     }
//     //   }
//     //   catch(erorr){
//     //     alert("unable to connect to server!")
    
//     //   }}
//  async function handlesubmit(event){
//         event.preventDefault()
    
//         const formData=new FormData(event.target)
//         console.log(formData)
//         const product=Object.fromEntries(formData.entries())
//         console.log(product)
       
        
       
    
//      try {
//         const res=await fetch('http://localhost:30001/informationpreson',{
//             method:"Post",
//             body:formData
//         })
      
//         const data =await res.json()
//         if(res.ok){
    
//             native("/")
//             swal("info success")
          
//         }
//         else if(res.status === 400){
//             alert("valdtion errors")
//         }
//         else{
//             alert("unable to create the personifo!")
//         }
//       }
//       catch(erorr){
//         alert("unable to connect to server!")
    
//       }}
// return(

//     <div className="container my-4">
//     <div className="row ">
//     {/* {    console.log(carts)} */}
//     <div className="col md-8 mx-auto rounded border p-4 ">
//         <h2 className="text-center mb-5">اتمام الطلب</h2>
//         <form onSubmit={handlesubmit}>
// <div className="row mb-3">
// <label className="col-sm-4 col-form-label">الاسم</label>
// <div className="col-sm-8">
// <input className="form-control" name="name" required />
// <span className="text-danger"></span>

// </div>
// </div>
// <div className="row mb-3">
// <label className="col-sm-4 col-form-label">المنطقة</label>
// <div className="col-sm-8">
// <input className="form-control" name="location" required />
// <span className="text-danger"></span>

// </div>
// </div>
// <div className="row mb-3">
// <label className="col-sm-4 col-form-label">رقم الهاتف</label>
// <div className="col-sm-8">
// <input className="form-control" name="phonenumber" required/>
// <span className="text-danger"></span>

// </div>
// </div>


// <div className="row mb-3">
// <label className="col-sm-4 col-form-label">البريد الالكتروني</label>
// <div className="col-sm-8">
// <input className="form-control" name="email" type="email"  required />
// <span className="text-danger"></span>

// </div>
// </div>

// <div className="row ">
// <div className="offest-sm-4 col-sm-4 d-grid">
// <button type="submit" className="btn btn-primary" onClick={()=>dispatch(CLEAR_CART())}>submit</button>
// </div>
// <div className=" col-sm-4 d-grid">
// <Link to={"/admin/products"} className="btn btn-primary" role="button">cancel</Link>
// </div>
// </div>





//         </form>
//     </div>




//     </div>


// <div className="my-2">
//     <h2 style={{color:"gold",fontSize:"30px", fontWeight:"700",fontFamily:"serif"}}>يرجي العلم <span  style={{color:"#777"}}>ان الدفع عند الاستلام</span></h2>

// </div>













//     </div>
    
    
    
    
// )



// }