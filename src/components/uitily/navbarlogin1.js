// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.jpg'


import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../../store/authslic1";
import { toast } from "react-toastify";
// import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import ShowOnLogin, { ShowOnLogout } from "../../hiddenlink/hiddenlink1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaUserCircle } from "react-icons/fa";
import { faCartShopping, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { AdminOnlyLink } from "../admin/adminonlylink1";
import { auth } from "../../firbase/config1";

import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


   
    function Navbarlogin() {
      const [displayName, setdisplayName] = useState("");
      // const [scrollPage, setScrollPage] = useState(false);
      const navigate = useNavigate();

      const dispatch = useDispatch();
      const fixNavbar = () => {
        if (window.scrollY > 50) {
          // setScrollPage(true);
        } else {
          // setScrollPage(false);
        }
      };
      window.addEventListener("scroll", fixNavbar);
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // console.log(user);
            if (user.displayName == null) {
              const u1 = user.email.slice(0, -10);
              console.log(u1)
              const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
              setdisplayName(uName);
            } else {
              setdisplayName(user.displayName);
            }
    
            dispatch(
              SET_ACTIVE_USER({
                email: user.email,
                userName: user.displayName ? user.displayName : displayName,
                userID: user.uid,
              })
            );
          } else {
            setdisplayName("");
            dispatch(REMOVE_ACTIVE_USER());
          }
        });
      }, [dispatch, displayName]);
    
      // const toggleMenu = () => {
      //   setShowMenu(!showMenu);
      // };
    
      // const hideMenu = () => {
      //   setShowMenu(false);
      // };
    
      const logoutUser = () => {
        signOut(auth)
          .then(() => {
            toast.success("Logout successfully.");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      };    
       const carts = useSelector((state) => state.carts.cartItems)
  return (
    <Navbar expand="lg" className="bg-dark nav-style" style={{width:"100%",padding:" 0px 00px "}}>
      <Container >
        <Navbar.Brand href="#"><Link to='/'><img src={logo} className='img-style ' alt='...'/></Link></Navbar.Brand>
        <ShowOnLogout>
                          <Nav.Link  className=' d-flex align-items-center shops' >
       <Link style={{textDecoration:"none"}} to={'/login'}> login <FontAwesomeIcon icon={faUserAlt} className='shop me-1 text-info mx-2 fs-4  '  /></Link>
      

            </Nav.Link>                </ShowOnLogout>
            <ShowOnLogin>   <NavDropdown title="login succes" id="navbarScrollingDropdown" style={{color:"red"}}>
              <NavDropdown.Item href="#action3">
              <Nav.Link> 
                  <a  href="#home" style={{ color: "#ff7722" ,display:"flex",fontSize:"20px",width:"100px",alignItems:"center",textDecoration:"none"}}>
                    <FaUserCircle size={20} style={{marginLeft:"2px"}}/>
                    Hi, {displayName}
                  </a>
                </Nav.Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                 <Nav.Link style={{color:"white"}} to="/" onClick={logoutUser}>
                    Logout
                  </Nav.Link>
                 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              </NavDropdown.Item>
            
           
            </NavDropdown>
            </ShowOnLogin>
            <AdminOnlyLink>
                  <Link to="/admin/products">
                    <button className="btn btn-info">Admin</button>
                  </Link>
                  </AdminOnlyLink>
            <ShowOnLogin>
            <Nav.Link className=' d-flex align-items-center'  >
            <p className='cart-lentgh'> {carts.length} </p>
            <Link to={"/cart"}>  <FontAwesomeIcon icon={faCartShopping} className='shop    fs-4' /></Link>
        
           
            </Nav.Link>
            </ShowOnLogin>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">



          <Form.Control 
            type="search"
            placeholder="ابحث عن المنتجات......"
            className=""
            aria-label="Search"
          />



          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px',marginLeft:"-90px" }}
            navbarScroll
          >
                       
           
           
            <Nav.Link>
            <NavDropdown title="Admin" id="navbarScrollingDropdown" style={{color:"red"}}>
              <NavDropdown.Item href="#action3">
            
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
            
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
                </Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

export default Navbarlogin;