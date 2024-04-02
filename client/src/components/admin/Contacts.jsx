/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import img from "../../assets/message.jpeg";

const Contacts = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
      const res = await axios.get("http://localhost:8000/admin/applications");
      if (res.data.success) {
        setCards(res.data.applications);
      }
      else {
        alert("Something wrong with contact forms.");
      }
    }
    fetchCards();
  }, [])
  return (
    <div className='h-auto bg-blue-600 text-black px-4 border-2 w-full flex flex-col py-3'>
      <div className="py-3">
        <h2 className='border-l-4 rounded-sm border-[#FFD230] text-lg md:text-3xl font-bold px-2 text-white'>Applications</h2>
      </div>
      <div className="flex flex-wrap items-center gap-y-4 justify-center md:justify-evenly gap-2">
        {
          cards.length === 0 ?
            <div className='text-2xl font-semibold my-4'>No Applications at the moment!</div>
            :
            cards.map((item) => {
              return <Link key={item._id} to={`/admin/contacts/${item._id}`}>
                <div className="w-[350px] overflow-hidden duration-300 bg-white rounded">
                  <img
                    className='h-[200px] w-[250px] mx-auto py-2'
                    src={img}
                    alt="myImage"
                  />
                  <div className="p-5 border border-t-0">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                      <p
                        className="transition-colors duration-200 text-blue-gray-900 py-2 text-xl hover:text-deep-purple-accent-700">
                        Author Application
                      </p>
                      <span className="text-gray-600">— {item.createdAt}</span>
                    </p>
                    <p
                      aria-label=""
                      className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      Learn more
                    </p>
                  </div>
                </div>
              </Link>
            })
        }
      </div>
    </div>
  )
}

export default Contacts