import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import Loader from '../../components/loader/loader1';
import { auth } from "../../firbase/config1";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from 'firebase/auth';

function Reset() { const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for a reset link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };
  return (<>
  {isLoading && <Loader/>}
    <Container>
      <Row  style={{height:"600px"}}>
        <Col lg="12"  className='d-flex justify-content-center my-2'>  <Form onSubmit={resetPassword} style={{width:"455px", padding:"20px", textAlign:"center"}}>  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>تغيير كلمة المرور</Form.Label>
      
      
        <Form.Control  className='text-center' type="email" placeholder="الايميل "    onChange={(e) => setEmail(e.target.value)} />
      
      </Form.Group>

     
      
      <Button style={{width:"100%",marginBottom:"10px"}} variant="primary" type="submit">
        تسجيل الدخول
      </Button>
    </Form></Col>
      </Row>
    </Container>
    </>);
}

export default Reset;