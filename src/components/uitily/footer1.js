import { Col, Container, Row } from "react-bootstrap";

export default function Footerss(){
    return(
<div  className="ss justify-content-between align-items-center" style={{height:"40px"}}>
<Container >
<Row >
  <Col className="d-flex justify-content-between align-items-center vv">
 
  <div>
  <a target="_blank"  rel="noopener" href="https://www.tiktok.com/@mh.supplements?_t=8mqHsEmfl9Z&_r=1"><i class="fa-brands fa-tiktok"></i></a>
  <a target="_blank" rel="noopener"  href="https://www.instagram.com/mh.supplements1?igsh=MXF6dHM3aHM0cnpnYw%3D%3D&utm_source=qr"><i class="fa-brands fa-instagram"></i></a>
  <a target="_blank"   rel="noopener" href="https://www.facebook.com/mostafa.hany.378199?mibextid=LQQJ4d"><i class="fa-brands fa-facebook" ></i></a>

  </div>
  <div>

<span>01094173390</span>
<i class="fa-solid fa-phone"></i>
  </div>
  
  
  </Col>
</Row>
</Container>
</div>
    )
}