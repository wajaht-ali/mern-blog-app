/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    // const [user, setUser] = useState({});
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [role, setRole] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:8000/admin/getUserById/" + id)
            .then((res) => {
                // console.log(res);
                // setUser(res.data);
                setName(res.data.name);
                setEmail(res.data.email);
                setRole(res.data.role);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/admin/updateUserById/" + id, { name, email, role })
            .then((res) => {
              navigate("/admin/users");  
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className='h-auto bg-blue-600 border-2 text-black w-full py-4 px-2 md:px-8 flex flex-col items-center justify-center'>
            <div className='bg-white h-full w-[80%] md:w-[40%] rounded-md flex flex-col'>
                <div className='py-2 shadow-md shadow-gray-300 w-full text-center'>
                    <h2 className='text-2xl font-semibold'>Update User</h2>
                    <p>Update the user record here</p>
                </div>
                <div className='px-3'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col my-2'>
                            <label className='font-semibold' htmlFor="name">Name</label>
                            <input className='bg-gray-300 px-2 py-1 rounded-md text-black my-1' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label className='font-semibold' htmlFor="name">Email</label>
                            <input className='bg-gray-300 px-2 py-1 rounded-md text-black my-1' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col my-2'>
                            <label className='font-semibold' htmlFor="role">Role</label>
                            <input className='bg-gray-300 px-2 py-1 rounded-md text-black my-1' type="text" id="role" value={role} onChange={(e) => setRole(e.target.value)} />
                        </div>

                        <button onClick={handleSubmit} className='my-2 bg-green-500 rounded-md text-white font-semibold px-4 py-2'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser