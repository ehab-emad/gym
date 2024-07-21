
// import { Container } from "react-bootstrap";
// import Sliderhome from "../../components/home/slider";
// import { Catogreycard } from "../../components/catogry/catograycard";
// import { Hompeproducts } from "../../components/home/homecardproduct";

import { Container } from "react-bootstrap";
import Sliderhome from "../../components/home/slider1";
import { Catogreycard } from "../../components/catogry/catrogrycard1";
import { Hompeproducts } from "../../components/home/homecardproduct1";


// import { Hompeproducts } from "../../components/home/homecardproduct";

// import { Catogreycard } from "../../components/catogry/catograycard";



export default function Homepage(){
    return(
<div className="font" style={{minHeight:"670px"}}>

<Sliderhome/>
<Container>
<Catogreycard/>
    <Hompeproducts title='الاكثر مبيعا' btntitle='المزيد'/>
   
    
</Container>

</div>


    )
}