/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
// import { MdOutlineClock } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { AuthorContext } from './Author.jsx';
import { AdminContext } from './Admin.jsx';

const API_KEY = import.meta.env.VITE_REACT_APP_API;

const Post = () => {
    const authorId = useContext(AuthorContext);
    const adminId = useContext(AdminContext);
    const [post, setPost] = useState({});
    const { id } = useParams();
    // console.log("AdminId: ", adminId);
    // console.log("AuthorId: ", authorId);
    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get(`/api/posts/latest/` + id)
            .then((result) => {
                console.log(result);
                setPost(result.data.post);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div className='h-auto w-full flex flex-col items-center mx-auto border-black border-2 p-4'>
            <div className='mt-8 w-full h-full bg-gray-300 box-content'>
                <h1 className='text-xl md:text-4xl mt-3 font-bold'>{post.title}</h1>
                <img className='my-4 w-full md:w-[500px] md:h-[400px]' src={`http://localhost:8000/Images/${post.file}`} alt="myImage" />
                <p className='uppercase font-semibold'>{post.category}</p>
                <p className='flex flex-row items-center '><FaRegClock size={15} className='mx-2' />{post.createdAt}</p>
                <p className='mt-4 text-lg'>{post.desc}</p>
            </div>
            {/* <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                    src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    className="object-cover w-full h-64"
                    alt=""
                />
                <div className="p-5 border border-t-0">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <Link
                            to="/"
                            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                            aria-label="Category"
                            title="traveling"
                        >
                            traveling
                        </Link>
                        <span className="text-gray-600">— 28 Dec 2020</span>
                    </p>
                    <Link
                        to="/"
                        aria-label="Category"
                        title="Visit the East"
                        className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        Visit the East
                    </Link>
                    <p className="mb-2 text-gray-700">
                        Sed ut perspiciatis unde omnis iste natus error sit sed quia
                        consequuntur magni voluptatem doloremque.
                    </p>
                    <Link
                        to="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                        Learn more
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default Post