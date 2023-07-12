import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import './login.css'
import { loginUser } from "../redux/apiCalls";
import { useSelector,useDispatch } from 'react-redux';

const Login = () => {
const  dispatch  = useDispatch();
const username = useSelector((state)=>state.user?.user?.email)
const navigate = useNavigate()
const Schema =yup.object().shape({
   
    email: yup.string().email('Invalid email')
    .required('Email is required'),
   
    password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
    
  })
  
    const {register, handleSubmit, formState: { errors }} = useForm({
      resolver :yupResolver(Schema)})
  
    const onSubmit = (data) =>{
      loginUser(dispatch,data);
      navigate('/home')
      
    }
  
  return (
    <div className="login-container">
        
     <form id="form" onSubmit={handleSubmit(onSubmit)}>
         <h3>Login</h3>
         <div className="input-control">
            <input type="text" placeholder="email" {...register("email")} />
            <p>{errors.email?.message}</p>      
          </div>
         
          
         <div className="input-control">
              <input type="password" placeholder="password" {...register("password")} />
              <p>{errors.password?.message}</p>  
          </div>
          <input type="submit" value="login"  className="btn"/>
          <div className="navigation">
            <p>I don't have an account</p>
            <Link to="/signup">Sign-Up</Link>
          </div>
       </form>
    </div>
  )
}

export default Login
                
              
          
        
