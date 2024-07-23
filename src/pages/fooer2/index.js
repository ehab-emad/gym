import { Col, Container, Row } from "react-bootstrap";
import logo from '../../images/logo.jpg'
export default function Footer1(){
    return(
<div>
<Container >
<Row className="m-5" >
    <img src={logo}  style={{width:"100%",height:"450px"}} alt="...."/>
    <h2 style={{fontSize:"14px" ,margin:"10px 3px"}}>مش بنقول اننا ارخص سعر ولكن الاكيد أننا بنوفر اضمن منتج  أصلي</h2>
  <Col sm="6"
  lg="3"
  md="6"
  xs="6"
  xl="3">
   
  <ul>
  <h3>الأقسام</h3>
<li>احماض امنية</li>
<li>اكسسورات</li>
<li>حوارق دهون</li>
<li>فيتامنات و معادن</li>
<li>مكملات طاقة</li>
<li>محفزات تستسترون</li>

  </ul>

  </Col>
  <Col sm="6"
 lg="3"
 md="6"
 xs="6"
 xl="3">
  
  <ul>
  <h3>الأقسام</h3>
<li> مكملات بروتين</li>
<li>مكملات كربوهيدرات</li>
<li>الماس جينر وزيادة الوزن</li>
<li>مكملات كرياتين</li>
<li>منتجات اخري</li>

  </ul>
</Col>
  <Col sm="6"
  lg="3"
  md="6"
  xs="6"
  xl="3">
 
  <ul>
  <h3>الصفحات</h3>
<li>الرئيسية</li>
<li>المتجر </li>
<li>   المقالات</li>
<li>اراء العملاء</li>
<li>حسابي </li>
<li>سلة المشتريات </li>
<li>سياسة الاسترجاع  </li>

  </ul> </Col>
  <Col sm="6"
  lg="3"
  md="6"
  xs="6"
  xl="3">
<h3>تواصل معنا</h3>
  <ul style={{listStyle:"none"}}>
<li>01010904750 </li>
<li > <a href="https://www.facebook.com/profile.php?id=61560683181898&mibextid=JRoKGi">  صفحة الفيسبوك</a></li>
<li>  <a href="https://www.instagram.com/mh.supplements1?igsh=MXF6dHM3aHM0cnpnYw%3D%3D&utm_source=qr">   الانستجرام</a></li>
<li>  <a href="https://www.tiktok.com/@mh.supplements?_t=8mqHsEmfl9Z&_r=1">   التيك توك</a></li>



  </ul> </Col>
</Row>
</Container>
</div>
    )
}