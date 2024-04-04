/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Application = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [description, setDescription] = useState();
    const [facebook, setFacebook] = useState();
    const [twitter, setTwitter] = useState();
    const [checkbox, setCheckbox] = useState();

    const navigate = useNavigate();
    const API_KEY = import.meta.env.VITE_REACT_APP_API;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${API_KEY}/apply/`)
                // console.log(res);
                if (res.data.success) {
                    alert(res.data.message);
                    navigate('/login');
                }
            } catch (error) {
                console.log(`Error with secure apply route ${error}`)
            }
        }
        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_KEY}/apply/`, { name, email, description, facebook, twitter, checkbox });
            if (res.data.success) {
                alert(res.data.message);
                navigate('/');
            }
            else {
                alert(res.data.message);
            }
        } catch (error) {
            console.log(`Error with application page`);
        }
    }
    return (
        <div className='h-auto w-full flex flex-col mx-auto md:px-4 py-4 my-3 border'>
            <div className="px-4 mx-4">
                <h2 className='text-center text-2xl md:text-4xl font-semibold my-4'>Join us as an
                    <span className='text-blue-600'> Author
                    </span>!</h2>
                <div className='border-2 border-black w-[200px] mx-auto'></div>
                <p className='md:text-center text-xl my-2'>Please read the following instructions carefully.</p>
                <div className='flex flex-col md:flex-row gap-4 items-center justify-around my-4'>
                    <div className='shadow-md shadow-gray-300 border border-gray-400 rounded px-8 py-4'>
                        <h2 className='text-2xl font-semibold my-2 px-2 border-l-4 rounded border-blue-600'>Terms & Conditions!</h2>
                        <ul className="list-disc text-lg">
                            <li>You should be 18 years old are above.</li>
                            <li>You should have an Intermediate school diploma.</li>
                            <li>You should have social media exposure and well maintained profile.</li>
                            <li>You must have to be responsible and dedicated towards <br /> socity responsibilities.</li>
                        </ul>
                    </div>
                    <div className='shadow-md shadow-gray-300 border border-gray-400 rounded p-8'>
                        <h2 className='text-2xl font-semibold my-2  px-2 border-l-4 rounded border-blue-600'>Perks & Benefits!</h2>
                        <ul className="list-disc text-lg">
                            <li>Access to premium subscription.</li>
                            <li>You can add your own posts.</li>
                            <li>Avail opportunities to get engage with other professionals.</li>
                            <li>And many more.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-4 flex flex-col items-center justify-center shadow-md shadow-gray-300 border border-gray-400 rounded px-8 py-4'>
                <h2 className='text-2xl md:text-3xl text-center font-semibold my-4'>Application Form</h2>
                <div className='border-2 border-black w-[200px] mx-auto'></div>
                {/* Application Form */}
                <form onSubmit={handleSubmit} className='w-full md:w-[400px] flex flex-col items-center' >
                    <div className='md:w-full flex flex-col my-2'>
                        <label className='my-2 font-semibold' htmlFor="name">Name:</label>
                        <input className='w-[300px] md:w-full border border-gray-400 px-2 py-1 rounded-md outline-none text-black' type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name} />
                    </div>

                    <div className='md:w-full flex flex-col my-2'>
                        <label className='my-2 font-semibold' htmlFor="email">Email:</label>
                        <input className='w-[300px] md:w-full border border-gray-400 px-2 py-1 rounded-md outline-none text-black' type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>

                    <div className='md:w-full flex flex-col my-2'>
                        <label className='my-2 font-semibold' htmlFor="email">Description:</label>
                        <textarea className='w-[300px] md:w-full border border-gray-400 px-2 py-1 rounded-md outline-none text-black' placeholder='Please provide some detail about yourself...' onChange={(e) => setDescription(e.target.value)} value={description} cols="30" rows="10"></textarea>
                    </div>

                    <div className='md:w-full flex flex-col my-2'>
                        <label className='my-2 font-semibold' htmlFor="social">Facebook Profile:</label>
                        <input className='w-[300px] md:w-full border border-gray-400 px-2 py-1 rounded-md outline-none text-black' type="url" placeholder='Enter Facebook Profile link' onChange={(e) => setFacebook(e.target.value)} value={facebook} />
                    </div>

                    <div className='md:w-full flex flex-col my-2'>
                        <label className='my-2 font-semibold' htmlFor="social">Twitter Profile:</label>
                        <input className='w-[300px] md:w-full border border-gray-400 px-2 py-1 rounded-md outline-none text-black' type="url" placeholder='Enter Twitter Profile link' onChange={(e) => setTwitter(e.target.value)} value={twitter} />
                    </div>

                    <div className='md:w-full flex flex-row my-2'>
                        <input type="checkbox" id='checkbox' required onChange={(e) => setCheckbox(e.target.checked)} value={checkbox} />
                        <label className='my-2 px-2 font-semibold' htmlFor="social">Check this box to accept our privacy policy.</label>
                    </div>
                    <button type='submit' onClick={handleSubmit} className="w-[300px] md:w-full bg-gray-800 text-white px-3 py-2 rounded-lg my-4 font-bold ">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Application