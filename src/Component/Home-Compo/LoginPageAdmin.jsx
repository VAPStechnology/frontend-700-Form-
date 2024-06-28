import React, { useState } from 'react';
import { IoLockClosedSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext'; 

const LoginPageAdmin = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); 
        if (!password || !email) {
            setError('Please fill in all fields');
            return;
        }
        try {
            const response = await axios.post('https://aspirecareerconsultancy.online/api/v1/admins/loginAdmin', {
                email: email,
                password: password,
            });
            if (response.data.data.accessToken) {
                alert('Login success');
                const accessToken = response.data.data.accessToken;
                localStorage.setItem('adminToken', accessToken);
                login(); // Update login state
                navigate('/admin');
            } else {
                setError('Login failed. Please check your Email and Passowrd.');
            }
        } catch (error) {
            setError("Login failed. Please check your Email and Passowrd.");
        }   
    };

    return (
        <div className='bg-slate-600 lg:w-full w-[60rem] md:w-[70rem] lg:h-[73rem] h-[130rem] flex justify-center items-center'>
            <form onSubmit={handleSubmit}>
                <div className='text-center text-5xl font-Roboto text-white font-bold pb-10'>Admin Login</div>
                <hr className='border-white mb-16'></hr>
                <div className='flex md:ml-0 ml-[2rem] mt-10'>
                    <label htmlFor="email" className='lg:w-12 w-14 bg-green-500 text-white'>
                        <MdEmail className='text-3xl md:mt-2 lg:mt-1 mt-3 lg:ml-2 ml-3' />
                    </label>
                    <input
                        type="text"
                        id="email"
                        className='lg:w-[20rem] lg:h-[3rem] w-[25rem] h-[4rem] ml-3 pl-2'
                        placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className='flex mt-10 md:ml-0 ml-[2rem]'>
                    <label htmlFor="password" className='lg:w-12 w-14 bg-orange-500 text-white'>
                        <IoLockClosedSharp className='text-3xl md:mt-2 lg:mt-1 mt-3 lg:ml-2 ml-3' />
                    </label>
                    <input
                        className='lg:w-[20rem] lg:h-[3rem] w-[25rem] h-[4rem] ml-3 pl-2'
                        type="password"
                        id="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                
                <hr className='border-white mt-16'></hr>
                {error && <p className='text-red-500 mt-4'>{error}</p>}
                <button type="submit" className='bg-green-500 hover:bg-green-300 md:w-[8rem] md:h-[3rem] w-[6rem] h-[3rem] mt-16 ml-[16rem] text-white font-semibold rounded-lg'>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPageAdmin;
