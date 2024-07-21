import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firbase/config1";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import Loader from '../../components/loader/loader1';
function Loginpage() {const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const previousURL = useSelector((state)=>state.carts.previousURL);
  const navigate = useNavigate();

  const redirectUser = () => {
    if (previousURL.includes("cart")) {
      return navigate("/cart");
    }
    navigate("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {


        // const user = userCredential.user
        setIsLoading(false);
        toast.success("Login Successful...");
        navigate("/");
        redirectUser();
        
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  // Login with Goooglr
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user
        toast.success("Login Successfully");
        redirectUser();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (<><ToastContainer />
     {isLoading && <Loader />}

    <Container>
     
      <Row  style={{height:"600px"}}>
        <Col lg="12"  className='d-flex justify-content-center my-2'>  <Form onSubmit={loginUser} style={{width:"455px", padding:"20px", textAlign:"center"}}>  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>تسجيل الدخول</Form.Label>
        <Form.Control  className='text-center' type="email" placeholder="الايميل " 
            onChange={(e) => setEmail(e.target.value)}/>
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      
        <Form.Control  className='text-center'  type="password" placeholder="كلمة السر" 
          onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      
      <Button style={{width:"100%",marginBottom:"10px"}} variant="primary" type="submit">
        تسجيل الدخول
    </Button>
    <div className='d-flex justify-content-between'>
    <Link style={{textDecoration:"none"}} to={'/register'}>  <p>انشئ حساب</p></Link>
    <Link style={{textDecoration:"none"}} to={'/reset'}>  <p> تغيير كلمة السر</p></Link></div>
    <button
              className="--btn --btn-danger --btn-block"
              onClick={signInWithGoogle}
            >
              <FaGoogle color="#fff" /> Login With Google
            </button>
     
    </Form></Col>
      </Row>
    </Container>
    </>);
}

export default Loginpage;