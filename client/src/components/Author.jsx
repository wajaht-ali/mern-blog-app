/* eslint-disable no-unused-vars */
import React, { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { MdNewspaper, MdOutlinePostAdd } from "react-icons/md";

const API_KEY = import.meta.env.VITE_REACT_APP_URI;
export const AuthorContext = createContext();

const Author = () => {
    const [authorId, setAuthorId] = useState("");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get(`${API_KEY}/api/auth/verifyAuthor`)
            .then((res) => {
                console.log(res);
                setAuthorId(res.data.id);
                if (res.data.message !== "Success") {
                    navigate("/");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <AuthorContext.Provider value={authorId}>
            <div className='h-auto text-center bg-white text-black w-full flex flex-col items-center'>
                <nav className='sticky top-16 bg-black text-white  w-full py-3'>
                    <ul className='flex flex-row items-center justify-evenly md:justify-center'>
                        <li>
                            <Link className='flex flex-row items-center px-3 py-2 md:mx-3' to={""}><MdNewspaper className='mx-2' />Your Posts</Link>
                        </li>
                        <li>
                            <Link className='flex flex-row items-center px-3 py-2 md:mx-3' to={"create-post"}><MdOutlinePostAdd className='mx-2' />Create</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </AuthorContext.Provider>
    )
}

export default Author