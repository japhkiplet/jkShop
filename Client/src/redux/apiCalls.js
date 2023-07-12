import { loginStart, loginSuccess,loginFailure, logOut } from './userSlice';
import {productStart,productSuccess,productFailure} from './productSlice';
import { createProductStart, createProductSuccess,createProductFailure } from './productSlice';
import axios from 'axios';
import { apiDomain } from '../utils/utils';



export const loginUser = async(dispatch,user)=>{
    console.log(user,dispatch);
dispatch(loginStart());
    try{
const {data} = await axios.post(`${apiDomain}/auth/login`,user);
dispatch(loginSuccess(data));

alert('logged in succesfully');
console.log(data);
    }catch(err){
console.log(err)
dispatch(loginFailure());
    }
}
export const logOutUser = async(dispatch)=>{
    console.log(dispatch);
    dispatch(logOut())
}

export  const getProductsData = async(dispatch)=>{
    dispatch(productStart());
   
    try{
const {data} = await  axios.get(`${apiDomain}/product`);
dispatch(productSuccess(data));
    }catch(err){
dispatch(productFailure())
    }
}

export const addProduct = async(dispatch,data) =>{
    console.log(`${apiDomain}/product`);
    console.log(data);
    dispatch(createProductStart())
    try {
        console.log(`${apiDomain}/product`);
      await axios.post(`${apiDomain}/product`,data) 
        dispatch(createProductSuccess(data));
    }
    catch(err){
        dispatch(createProductFailure())
    }
  }