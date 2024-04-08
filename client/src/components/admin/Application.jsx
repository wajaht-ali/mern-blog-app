/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa6";

const API_KEY = import.meta.env.VITE_REACT_APP_API;

const Application = () => {
    const [application, setApplication] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await axios.get(`/api/admin/applications/` + id);
                // console.log(res);
                if (res.data.success) {
                    setApplication(res.data.app);
                }
                else {
                    alert('Error with application.');
                }
            }
            fetchData();
        } catch (error) {
            console.log(`Error with application ${error}`)
        }
    }, [])

    return (
        <div className='h-auto w-full flex flex-col items-center mx-auto border-black text-black border-2 p-4'>
            <div className='mt-8 w-full h-full bg-gray-300 box-content p-2'>
                <h1 className='text-2xl md:text-4xl my-4 font-bold text-center'>Authorship Application Form</h1>


                <p className="text-2xl font-semibold my-2">{application.name}</p>

                <p className='flex flex-row items-center '><FaRegClock size={15} className='mx-2' />{application.createdAt}</p>

                <p className='text-lg'>User Email: {application.email}</p>

                <div className='my-4'>
                    <div className='text-xl font-semibold'>About the User:</div>
                    <p>{application.description}</p>
                </div>
                <div className='my-4'>
                    <Link className='text-lg bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mx-2' to={application.facebook}>Facebook</Link>
                    <Link className='text-lg bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mx-2' to={application.twitter}>Twitter</Link>
                </div>
            </div>
        </div>
    )
}

export default Application