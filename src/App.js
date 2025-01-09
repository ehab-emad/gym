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
import logo from './images/logo.jpg'

import { useDispatch, useSelector } from "react-redux";
import Footerss from "./components/uitily/footer1";
import Navbarlogin from "./components/uitily/navbarlogin1";
import { useEffect, useRef, useState } from "react";
// import { getData } from "./store/createslic1";
import { HashRouter, Navigate, Route, Routes,useLocation,useNavigate} from "react-router-dom";
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
import Homepage from "./pages/hompepage/index";
import './App.css'
// import Loginpage from "./pages/loginpage/index";
import Register from "./pages/registerpage/index";
import Reset from "./pages/resetpage/index";
import Oneproducts from "./pages/counterpage/index";
import Moree from "./pages/morepage/index";
import Cart from "./pages/cartpage/index";
import Posts from "./pages/postpage/index";
import Checkout from "./pages/checkoutpage/index";
import Order from "./components/admin/order1";
import Admin from "./pages/adminpage/index";
import { AnimatePresence, motion } from "framer-motion";

import Createproducts from "./pages/createproductpage/index";
import Editproduct from "./pages/editproductspage/index";
import Footer1 from "./pages/fooer2/index";
import Loginpage from "./pages/loginpage/index";
import Searching from './pages/search';
import OrderForm from './pages/payment';
import { ProtectLinked } from './components/protectComponents';
import { ToastContainer } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firbase/config1';
import Appp from './components/block';
import Advertisement from './components/Advertisement ';
import ScrollToTop from './components/uitily/scroll_top';

function App() {
  const [user, setUser] = useState()
  const location = useLocation();
  const appRef = useRef(); // مرجع للتحكم في عنصر الـ div الأساسي
 const pageTransition = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.5 },
};
const loading=useSelector((item)=>item.productss.loading)
const dispatch=useDispatch()
useEffect(() => {
  dispatch(getData());
}, [1]);

// useEffect(() => {
//   document.documentElement.scrollTo({
//     top: 0,
//     behavior: "smooth", // تمرير سلس
//   });
// }, [location.pathname]);
  return (
<>
<ScrollToTop/>
{/* {console.log(location.pathname)} */}
{loading?
 <div className="loading"><img className="animated-span" src={logo} alt='..pp..'/></div>:<div className='apps'  >

    
<div className='whatsapp'> <a href='https://wa.me/message/CBRFPF4OWOR3I1?src=qr'><i class="fa-brands fa-whatsapp"></i></a></div>
  <div className='app-styling'>     



     {/* <HashRouter>  */}
  
    <Footerss/> 

    <Navbarlogin/>
    {/* <Appp/> */}
    {/* <ScrollToTop/> */}
  <div className='w1' >
  <ToastContainer
   style={{
   
    zIndex: 100000, // التأكد من أن التوست فوق كل العناصر
  }}/>

    <AnimatePresence mode="wait">
   
<Routes location={location} key={location.pathname}>
<Route path='/login' element={ <Loginpage/>}/>
<Route path='/register' element={ <Register/>}/>
<Route path='/reset' element={ <Reset/>}/>

  {/* <Route  element={ */}
    {/* // <ProtectLinked/> */}
  {/* } */}
<Route path='/' element={ <Homepage/>}/>

<Route path='/counterproducts' element={ <motion.div {...pageTransition}> <Oneproducts /></motion.div>}/>
<Route path='/searching' element={ <Searching />}/>
<Route path='/more' element={ <motion.div {...pageTransition}><Moree title={"الاكثر مبيعا"}/></motion.div>}/>
<Route path='/cart' element={ <Cart />}/>
<Route path='/posts' element={  <motion.div {...pageTransition}><Posts/></motion.div>}/>
<Route path='/cart/checkout' element={ <Checkout/>}/>
<Route path='/admin/products/orders'  element={ <Order/>}/>
<Route path='*' element={<Navigate to='/' />} />
<Route path='/admin/cart/payment' element={ <OrderForm/>}/>
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
  <Route
          path="/admin/products/edit/:id"
          element={
           
              <Editproduct />
            
          }
        /> 
  {/* </Route> */}



        {/* <Route
          path="/cart/payment"
          element={
           
              <Payment />
            
          }
        /> */}
      

</Routes>
</AnimatePresence>

</div>

<Advertisement/>

<Footer1/>

{/* </HashRouter>  */}
       
     </div>
</div> }

   
  </>
  );
}

export default App; 
