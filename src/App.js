// import Navbarlogin from './components/uitily/Navbarlogin';
// import Footer from './components/uitily/footer';
// import Loginpage from './pages/auth/loginpage';
// import Register from './pages/auth/register';
// import Moree from './pages/More';
// import Cart from './pages/cart';
// import Postss from './pages/posts';
// import Reset from './pages/auth/resetpassword';
// import Admin from './pages/Admin';
// import Createproducts from './components/admin/createproducts';
// import Editproduct from './components/admin/editproduct';
// import Payment from './pages/payment';
// import Checkout from './pages/checkout';
// import Order from './components/admin/order';
// import { Container } from 'react-bootstrap';
// import Homepage from './pages/hompepage/homepage';
// import Oneproducts from './pages/counterproduct';

import { useDispatch, useSelector } from "react-redux";
import Footerss from "./components/uitily/footer1";
import Navbarlogin from "./components/uitily/navbarlogin1";
import { useEffect, useState } from "react";
// import { getData } from "./store/createslic1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
// import Homepage from "./pages/hompepage/homepage1";
// import Loginpage from "./pages/loginpage/loginpage1";
// import Register from "./pages/registerpage/register1";
// import Reset from "./pages/resetpage/resetpassword1";
// import Oneproducts from "./pages/counterproducts1";
// import Moree from "./pages/more1";
// import Cart from "./pages/cartpage/cart1";
// import Posts from "./pages/postpage/posts1";
// import Checkout from "./pages/checkoutpage/checkout1";
// import Order from "./components/admin/order1";
// import Admin from "./pages/adminpage/admin1";
// import Createproducts from "./components/admin/createproducts1";
// import Editproduct from "./components/admin/editproducts1";
import { getData } from "./store/createslic1";
import Homepage from "./pages/hompepage";
import Loginpage from "./pages/loginpage";
import Register from "./pages/registerpage";
import Reset from "./pages/resetpage";
import Oneproducts from "./pages/counterpage";
import Moree from "./pages/morepage";
import Cart from "./pages/cartpage";
import Posts from "./pages/postpage";
import Checkout from "./pages/checkoutpage";
import Order from "./components/admin/order1";
import Admin from "./pages/adminpage";
import Createproducts from "./pages/createproductpage";
import Editproduct from "./pages/editproductspage";
import Footer1 from "./pages/fooer2";
// import Createproducts from "./pages/createproductpage/createproducts1";
// import Editproduct from "./pages/editproductspage/editproducts1";

// import { Container } from "react-bootstrap";
// import Createproducts from "./components/admin/createproducts";
// import Editproduct from "./components/admin/editproduct";
// import Order from "./components/admin/order";
// import Navbarlogin from "./components/uitily/Navbarlogin";
// import Footer from "./components/uitily/footer";
// import Admin from "./pages/Admin";
// import Moree from "./pages/More";
// import Loginpage from "./pages/auth/loginpage";
// import Register from "./pages/auth/register";
// import Reset from "./pages/auth/resetpassword";
// import Cart from "./pages/cart";
// import Checkout from "./pages/checkout";
// import Oneproducts from "./pages/counterproduct";
// import Homepage from "./pages/hompepage/homepage";
// import Posts from "./pages/posts";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
//   const data=useSelector((item)=>item.pro.product)
//   const dispatch=useDispatch()
//  const [datas,setdatas]=useState([])
//  useEffect(()=>{
//   dispatch(getData())
//   setdatas(data)
//  })

  return (<div className='app'>
  <div className='whatsapp'> <a href='https://wa.me/message/CBRFPF4OWOR3I1?src=qr'><i class="fa-brands fa-whatsapp"></i></a></div>
    <div className='app-styling'>     
  


       <BrowserRouter> 
      <Footerss/> 
      <Navbarlogin/>
     
    
       
    <Container className='' >
       
<Routes>
 <Route path='/' element={ <Homepage/>}/>
 <Route path='/login' element={ <Register/>}/>
 <Route path='/register' element={ <Register/>}/>
 <Route path='/reset' element={ <Reset/>}/>
 <Route path='/counterproducts' element={ <Oneproducts />}/>
 <Route path='/more' element={ <Moree title={"الاكثر مبيعا"}/>}/>
 <Route path='/cart' element={ <Cart />}/>
 <Route path='/posts' element={ <Posts/>}/>
 <Route path='/cart/checkout' element={ <Checkout/>}/>
 <Route path='/admin/products/orders' element={ <Order/>}/>
 {/* <Route path='/admin/cart/payment' element={ <Payment/>}/> */}

 <Route
            path="/admin/products"
            element={
             
                <Admin/>
              
            }
          />

<Route
            path="/admin/products/createproduct"
            element={
             
                <Createproducts/>
              
            }
          />
          {/* <Route
            path="/cart/payment"
            element={
             
                <Payment />
              
            }
          /> */}
          <Route
            path="/admin/products/edit/:id"
            element={
             
                <Editproduct />
              
            }
          /> 

</Routes>


</Container>


<Footer1/>

 </BrowserRouter> 
         
       </div>
</div>
  );
}

export default App; 
