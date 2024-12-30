import React, { useState } from 'react';
import axios from 'axios';
import './orderstyle.css'; // استيراد ملف CSS
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CLEAR_CART } from '../store/cartslic1';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const additionalData = localStorage.getItem('cartItems');
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    

    const storedCartItems = JSON.stringify(localStorage.getItem('cartItems'));

    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('phonenumber', phonenumber);
    formData.append('email', email);
    formData.append('additional_data', storedCartItems);

    try {
      const res = await axios.post(
        'https://json-server-6-yt8p.onrender.com/orders',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setResponse(res.data);
      toast.success("You  Submitted successfully")
      
    
      localStorage.removeItem('cartItems');
      dispatch(CLEAR_CART())
    } catch (err) {
     
      toast.error(err);
    }
    navigate('/cart')
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Create Order</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-groufffp">
          <label>
            Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          
        </div>
        <div className="form-group">
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Phone Number:
            <input
              type="text"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className="form-button">
          Submit Order
        </button>
      </form>

  
    </div>
  );
};

export default OrderForm;
