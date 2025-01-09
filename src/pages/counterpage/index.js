import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Subtitle } from "../../components/uitily/subtitle1";
import { getData } from "../../store/createslic1";
import Cardproduct from "../../components/products/productcard1";
import { useLocation } from "react-router-dom";

export default function Oneproducts() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const data = useSelector((item) => item.productss.counterItems);

  // إعادة الإسكرول للأعلى عند تغيير المسار
  // useEffect(() => {
  //   console.log("Current pathname:", pathname); // طباعة المسار الحالي
  //   document.body.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
    
  //   console.log("Scrolled to top"); // التأكد من استدعاء الإسكروول
  // }, [pathname]);
  

  // جلب البيانات عند تحميل الصفحة

  return (
    <Container>
      <Row className="d-flex justify-content-start">
        <Subtitle title="Products" />
        {data.map((item, index) => (
          <Cardproduct
            key={item.id}
            index={index}
            img={item.images}
            title={item.title}
            price={item.price}
            scope={item.scope}
            item={item}
          />
        ))}
      </Row>
    </Container>
  );
}
