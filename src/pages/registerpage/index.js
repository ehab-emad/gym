import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firbase/config1';
import Loader from '../../components/loader/loader1';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() { const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match.");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration Successful...");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };
  return (
    <><ToastContainer />
     {isLoading && <Loader />}
    <Container>
      <Row  style={{height:"600px"}}>
        <Col lg="12"  className='d-flex justify-content-center my-2'>  <Form onSubmit={registerUser} style={{width:"455px", padding:"20px", textAlign:"center"}}>  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>تسجيل حساب جديد</Form.Label>
      
      </Form.Group> <Form.Group className="mb-3" controlId="formBasicPassword">
      
      <Form.Control  className='text-center'  type="Email" placeholder="الايميل " required value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      
        <Form.Control  className='text-center'  type="password" placeholder="كلمة السر" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      
        <Form.Control  className='text-center'  type="password" placeholder=" تاكيد كلمة السر " required value={cPassword} onChange={(e)=>setCPassword(e.target.value)}/>
      </Form.Group>
      
      <Button style={{width:"100%",marginBottom:"10px"}} variant="primary" type="submit">
        تسجيل الدخول
      </Button>
      <p >لدي حساب  بالفعل ؟<Link style={{textDecoration:"none"}} to={'/login'}><span style={{color:"red",cursor:"pointer"}}>اضغط هنا</span></Link></p>
    </Form></Col>
      </Row>
    </Container>
  ;</>)
}

export default Register;