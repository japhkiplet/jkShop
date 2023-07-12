import back from '../assets/back.png';
import RegisterForm from './SignUp';
import './landing.css'
import LoginForm from './Login';
import { useState } from 'react';


 const Landing = () => {
    const [isLoginForm, setIsLoginForm] = useState(false);

    const toggleForm = () => {
        setIsLoginForm(!isLoginForm);
    };
    return (
        <>
        <div className="homepage">
             <div className='image'>
                <img src={back} alt="Image" />
                </div>
                <div className='land-left'>
                    {isLoginForm ? (
                        <RegisterForm onFormChange={toggleForm} />
                    ) : (
                        <LoginForm onFormChange={toggleForm} />
                        )}    
                         </div>
                </div>
        </>       
    )};

export default Landing;
