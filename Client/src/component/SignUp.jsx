import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom";
import './login.css'
import axios from "axios";
import back from '../assets/back.png';
import { apiDomain } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
const navigate = useNavigate()
const Schema =yup.object().shape({
    username: yup.string().required("This field is required!"),
    email: yup.string().email('Invalid email')
    .required('Email is required'),
    
    password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
     
  })
  
    const {register, handleSubmit, formState: { errors }} = useForm({
      resolver :yupResolver(Schema)})
  
    const onSubmit = (data) =>{
      axios.post(`${apiDomain}/auth/register`,data)
      .then((response) =>{
       response.data.message && alert(response.data.message);
       navigate("/")
      })
      .catch(({response}) =>{
         alert(response.data.error);
      });
    }
  
  return (
    <div className="login-container">
      <div className='image1'>
        <img src={back} alt="Image" />
      </div>
     <form id="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Register with us!</h3>
         <div className="input-control">
              <input type="text" placeholder="username" {...register("username")} />
              <p>{errors.username?.message}</p>              
          </div>
         <div className="input-control">
              <input type="text" placeholder="email" {...register("email")} />
              <p>{errors.email?.message}</p>    
          </div>
          
         <div className="input-control">
              <input type="password" placeholder="password" {...register("password")} />
              <p>{errors.password?.message}</p>  
                
              
          </div>
          <input type="submit" value="Register"  className="btn"/>
          <div className="navigation">
             <p>I have an account</p>
             <Link to='/'>login</Link>
            </div>
              
       </form>
    </div>
  )
}

export default SignUp