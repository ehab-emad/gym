
import "bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import  logo from '../../images/logo.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CLEAR_CART, DECREASE_CART, INCREASE_CART, REMOVE_FROM_CART, SAVE_URL } from "../../store/cartslic1";
import { selectIsLoggedIn } from "../../store/authslic1";
import { useEffect } from "react";


export default function Cart() {
    const carts = useSelector((state) => state.carts.cartItems)
    // const isLoggedIn = useSelector(selectIsLoggedIn);

//   const navigate = useNavigate();
console.log(carts)
    const dispatch = useDispatch()
   
const   totalPrice = carts.reduce((acc, cart) => {
        acc += ((cart.price) * cart.cartQuantity)

        return acc
    }, 0)
    useEffect(() => {
       
        dispatch(SAVE_URL(""));
      }, [carts, dispatch]);
    
    //   const url = window.location.href;
    //   async function handlesubmits(event){
    //     event.preventDefault()
    
      
       
    
    //  try {
    //     // const formData=new FormData(event.target)
    //     //   const product=Object.fromEntries(carts.entries())
    //     //   console.log(product)
    //   const dataa=carts
    // //   console.log(dataa)
    //     const res=await fetch('http://localhost:30001/informationpreson',{
    //         method:"Post",
    //      body:carts

    //     })
    //     const data =await res.json()
    //     if(res.ok){

    //         navigate("/admin/products")
          
    //     }
    //     else if(res.status === 400){
    //         alert("valdtion errors")
    //     }
    //     else{
    //         alert("unable to create the personifo!")
    //     }
    //   }
    //   catch(erorr){
    //     alert("unable to connect to server!")
    
    //   }}
    //   const checkout = () => {
    //     if (isLoggedIn) {
    //       navigate("/cart/payment");
    //     } else {
    //       dispatch(SAVE_URL(url));
    //       navigate("/login");
    //     }
    //   };





    return (
        <>


            {carts.length > 0 ?

                <div className='  '>

                    <table  class="table table-striped ">
                        <thead>
                            <tr>
                                {/* <th scope="col">#</th> */}
                                <th className="limit" scope="col">Product</th>
                                <th className="limit" scope="col">Title</th>
                                <th className="limit" scope="col">Unit Price</th>
                                <th className="limit" scope="col">quantity</th>
                                <th  className="limit" scope="col">Total Price</th>
                                <th className="limit" scope="col">Actions</th>
                            </tr>
                        </thead>
                        {carts.map((cart) => (

                            <tbody>
                                <tr key={cart.id}>
                                    {/* <th scope="row text-center">{ }</th> */}
                                    <td>
                                        <img alt="..." src={cart.images} style={{ width: "35px", height: "50px" }} name="image"/> </td>
                                    <td className="tot" style={{width:"190px",fontSize:"12px"}}>{cart.title}</td>
                                    <td style={{fontSize:"12px",width:"10px"}}>{cart.price} EG</td>
                                    <td className=" " style={{ height: "20px" }}>
                                        <button class="btn-class-name" onClick={() => {
                                            dispatch(DECREASE_CART(cart))
                                        }}>
                                            <span class="back"></span>
                                            <span class="front">-</span>
                                        </button>
                                        <div className="quantity" >{cart.cartQuantity}</div>
                                        <button class="btn-class-name" onClick={() => {
                                            dispatch(INCREASE_CART(cart))
                                        }}>
                                            <span class="back"></span>
                                            <span class="front">+</span>
                                        </button>
                                    </td>
                                    <td style={{fontSize:"12px"}}>{((cart.price) * cart.cartQuantity)} EG</td>
                                    <td>
                                        <button class="button" onClick={()=>{
                                            dispatch(REMOVE_FROM_CART(cart))
                                        }}>
                                        <FontAwesomeIcon icon={faTrash} className="svgIcon"/> 
                                        </button></td>
                                </tr>

                            </tbody>

                        ))}

                    </table>
<div>
<p style={{fontSize:"20px",fontWeight:"700"}}>
    الدفع عند الإستلام 
    يرجي اخد اسكرين للطلبات ثم الضغط علي زر <span style={{color:"red"}}>التواصل </span>
</p>

</div>
                    <div className='box mx'>
                        <div className='total-price' >
                            <h2>Total Price : {totalPrice} EG</h2>
                        </div>
                        <div className='clear-button d-flex gap-2'>
                            {/* <button type="button" class="btn btn-danger" onClick={() => {
                                dispatch(CLEAR_CART())
                            }}>Clear Cart</button> */}
                <a href='https://wa.me/message/CBRFPF4OWOR3I1?src=qr'> <button type="button" class="btn btn-success mx-2 d-flex"  > <span style={{marginLeft:"6px"}}></span>التواصل   <i class="fa-brands fa-whatsapp"></i></button></a>
                        </div>
                    </div>

                </div>
                : <div className="container empty-cart d-flex flex-culom">
                    <div className="img"><img src={logo} alt="..."/></div>

                    <div><Link to={'/'} type="button" class="btn btn-success">Go To Shopping</Link></div>
                </div>
            }
        </>

    )
}
