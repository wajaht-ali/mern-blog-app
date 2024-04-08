/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthorContext } from '../Author.jsx';

const API_KEY = import.meta.env.VITE_REACT_APP_API;

const Create = () => {
  const authorId  = useContext(AuthorContext);

  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [desc, setDesc] = useState();
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const formdata = new FormData();
  formdata.append('title', title)
  formdata.append('category', category)
  formdata.append('desc', desc)
  formdata.append('creatorId', authorId)
  formdata.append('file', file)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.post(`/api/posts/createPost`, formdata)
      .then((res) => {
        // console.log(res);
        navigate("/author");
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  return (
    <div className='h-auto bg-blue-500 text-white w-full flex flex-col'>
      <div className='rounded-md mx-auto border-2 border-white my-2 w-[80%] md:w-[50%] text-black'>
        <div className="py-4 shadow-sm shadow-white">
          <h2 className='text-white text-center font-bold text-2xl'>Create Post</h2>
        </div>
        <form className="p-4 text-start" onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label className='my-2' htmlFor="name">Title:</label>
            <input className='px-2 py-1 rounded-md outline-none text-black' type="text" placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className='flex flex-col'>
            <label className='my-2' htmlFor="email">Category:</label>
            <input className='px-2 py-1 rounded-md outline-none text-black' type="email" placeholder='News, Sports, Business, World, Earth' onChange={(e) => setCategory(e.target.value)} />
          </div>

          <div className='flex flex-col'>
            <label className='my-2' htmlFor="description">Description:</label>
            <textarea className='px-2 py-1 rounded-md outline-none text-black' placeholder='Enter Description' onChange={(e) => setDesc(e.target.value)} id="description" cols="30" rows="10"></textarea>
          </div>

          <div className='flex flex-col'>
            <label className='my-2' htmlFor="description">File:</label>
            <input type='file' className='w-full px-2 py-1 rounded-md outline-none text-black' onChange={(e) => setFile(e.target.files[0])} />
          </div>

          <button onClick={handleSubmit} className="w-full bg-gray-800 text-white px-3 py-2 rounded-lg mt-4">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create