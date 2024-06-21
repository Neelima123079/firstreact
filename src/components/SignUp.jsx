import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
       console.log('this button is clicked');
       navigate('/login');
    }
     return (
       <div onClick={navigateToLogin}>Signup</div>
     )
   }
   
   export default Login;
