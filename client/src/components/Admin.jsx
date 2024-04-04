/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState, createContext } from 'react'
import { FaHome, FaUser } from 'react-icons/fa';
import { RiMessage2Fill } from "react-icons/ri";
import { MdCreateNewFolder } from "react-icons/md";
import { Link, Outlet, useNavigate } from 'react-router-dom';

export const AdminContext = createContext();
const API_KEY = import.meta.env.VITE_REACT_APP_API;

const Admin = () => {
    const [adminId, setAdminId] = useState();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get(`${API_KEY}/auth/verifyAdmin`)
            .then((res) => {
                console.log(res);
                setAdminId(res.data.id);
                if (res.data.message !== "Success") {
                    // setSuc("Succeded!");
                    navigate("/");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <AdminContext.Provider value={adminId}>
            <div className='h-auto text-white w-full flex flex-col items-center'>
                <nav className='sticky top-16 bg-black text-white  w-full py-3'>
                    <ul className='flex flex-row items-center justify-evenly md:justify-center'>
                        <li>
                            <Link className='flex flex-row items-center px-3 py-2 md:mx-3' to={""}><FaHome className='mx-2' />Home</Link>
                        </li>
                        <li>
                            <Link className='flex flex-row items-center px-3 py-2 md:mx-3' to={"users"}><FaUser className='mx-2' /> Users</Link>
                        </li>
                        <li>
                            <Link className='flex flex-row items-center px-3 py-2 md:mx-3' to={"contacts"}><RiMessage2Fill className="mx-2" />Contacts</Link>
                        </li>
                        <li>
                            <Link className='flex flex-row items-center px-3 py-2 md:mx-3' to={"create"}><MdCreateNewFolder className='mx-2' />Create</Link>
                        </li>
                    </ul>
                </nav>
                {/* <div className='h-screen w-full bg-white text-black rounded-md p-4 text-center'>
                <p className='text-4xl font-bold'>Welcome Back!</p>
                <p>Whats the plan for today!</p>
            </div> */}
                <Outlet />
            </div>
        </AdminContext.Provider>
    )
}

export default Admin;