import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import logo from '../../images/logo.jpg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/postslic1';
// import { addPost } from '../../store/postsslic';


function Cardproduct({img,title,price,scope,item}) {
    const dispatch=useDispatch()
  return (
    <Col 
    sm="6"
    lg="2"
    xl="2"
    md="4"
    xs="6"
    className='py-3'>
       <Link onClick={()=>dispatch(addPost(item))} style={{textDecoration:"none"}} to={'/posts'}> <Card className='card-styling  d-flex flex-column' style={{height:"330px"}}>
      <Card.Img style={{height:"40%",width:"100%"}}src={"https://json-server-6-yt8p.onrender.com/" + img } alt='...'/>
      <Card.Body>
       <div className='d-flex justify-content-between '> <Card.Title className='tit' style={{fontSize:"12px",height:"72px"}}>{title}</Card.Title>
       <img  style={{width:"30px",height:"30px",borderRadius:"50%"}} alt='...' src={logo}/>
      </div>
        <Card.Text className='my-1'>
       
<div className='d-flex justify-content-end'>{scope}</div>
<div>{price}EG</div>

        </Card.Text>
        <button className='btn-styl'>Details</button>
      </Card.Body>
    </Card></Link>
    </Col>
  );
}

export default Cardproduct;