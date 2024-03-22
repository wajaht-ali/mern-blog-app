/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Application = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [urlF, setUrlF] = useState();
    const [urlT, setUrlT] = useState();
    const [check, setCheck] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    }
    return (
        <div className='h-auto w-full flex flex-col mx-auto px-4 py-4 my-3 border'>
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
                    <div className='flex flex-col my-2'>
                        <label className='my-2 font-semibold' htmlFor="name">Name:</label>
                        <input className='w-[300px] md:w-full border border-gray-400 px-2 py-1 rounded-md outline-none text-black' type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name}/>
                    </div>

                    <div className='flex flex-col my-2'>
                        <label className='my-2 font-semibold' htmlFor="email">Email:</label>
                        <input className='w-[300px] md:w-full border border-gray-400 px-2 py-1 rounded-md outline-none text-black' type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>

                    <div className='flex flex-col my-2'>
                        <label className='my-2 font-semibold' htmlFor="social">Facebook Profile:</label>
                        <input className='w-[300px] md:w-full border border-gray-400 px-2 py-1 rounded-md outline-none text-black' type="url" placeholder='Enter Facebook Profile link' onChange={(e) => setUrlF(e.target.value)} value={urlF}/>
                    </div>

                    <div className='flex flex-col my-2'>
                        <label className='my-2 font-semibold' htmlFor="social">Twitter Profile:</label>
                        <input className='w-[300px] md:w-full border border-gray-400 px-2 py-1 rounded-md outline-none text-black' type="url" placeholder='Enter Twitter Profile link' onChange={(e) => setUrlT(e.target.value)} value={urlT}/>
                    </div>

                    <div className='flex flex-row my-2'>
                        <input type="checkbox" id='checkbox' required onChange={(e) => setCheck(e.target.checked)} value={check}/>
                        <label className='my-2 px-2 font-semibold' htmlFor="social">Check this box to accept our privacy policy.</label>
                    </div>
                    <button onClick={handleSubmit} className="w-[300px] md:w-full bg-gray-800 text-white px-3 py-2 rounded-lg my-4 font-bold ">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Application