import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';

const Register = () => {
    const [contentVisible, setContentVisible] = useState(true);
    const optionsRef = useRef(null);
    const { addUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
    });

    const handleToggleContent = () => {
        setContentVisible(!contentVisible);
    };

    const handleClickOutside = (event) => {
        if (optionsRef.current && !optionsRef.current.contains(event.target)) {
            setContentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.trim(),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://aspirecareerconsultancy.online/api/v1/users/register', formData); // Corrected URL

            const token = response.data.session_token;
            localStorage.setItem('token', token); // Store token in localStorage

            setFormData({
                fullname: '',
                username: '',
                email: '',
                password: '',
            });
            alert("Registration Successful");
            
        } catch (error) {
            alert("Registration failed. User already exists or there was an error.");
        }
    };

    return (
        <div ref={optionsRef} className={`flex justify-center absolute font-Roboto ${contentVisible ? '' : 'hidden'}`}>
            <div className='w-[90%] sm:w-[40rem] h-[30rem] mt-52 border-black bg-white shadow-2xl flex justify-center'>
                <form onSubmit={handleSubmit} className='w-full max-w-lg'>
                    <div className='font-semibold text-2xl mb-5 mt-5 text-center'>Enter Your Details</div>
                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full sm:w-1/2 px-3 mb-6 sm:mb-0'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='fullname'>
                                Full Name
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='fullname'
                                type='text'
                                placeholder='Enter Full Name'
                                name='fullname'
                                value={formData.fullname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='w-full sm:w-1/2 px-3'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                                Username
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='username'
                                type='text'
                                placeholder='Enter Username'
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                Email
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='email'
                                type='email'
                                placeholder='Enter Email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='flex flex-wrap -mx-3 mb-6'>
                        <div className='w-full px-3'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                                Password
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='password'
                                type=''
                                placeholder='Enter Password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <button
                            className='bg-[#EA5455] text-white font-bold w-full h-[2.5rem] mt-2 rounded focus:outline-none focus:shadow-outline'
                            type='submit'>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
