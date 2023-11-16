import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io"

const AddForm = ({handleModalOpen}) => {

    const [datas, setDatas] = useState({})
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setDatas({
          ...datas,
          [name]: value,
        });
      };
  return (
    <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-96 overflow-scroll w-2/6 z-10 bg-yellow-100 shadow shadow-yellow-300 rounded-md'>
      <div className=''>
      <form className='px-4 mt-5'>
        <div className='flex justify-end' style={{color:'gray'}}><IoMdClose size={32} className='cursor-pointer' onClick={()=>handleModalOpen()}/></div>
        <div className='text-center py-3'>
            <h1 className='text-xl font-bold'>Add a Restaurant</h1>
        </div>
      <div className="mb-4">
        <label for="name" className="block text-gray-600">Restaurant Name</label>
        <input type="text" id="name" onChange={handleFormChange} name="name" className="w-full border outline-none rounded px-3 py-2"/>
      </div>

      <div className="mb-4">
        <label for="message" className="block text-gray-600">Description</label>
        <textarea id="message" onChange={handleFormChange} name="message" rows="3" className="w-full outline-none resize-none rounded px-3 py-2"></textarea>
      </div>

      <div className="mb-4">
        <label for="address" className="block text-gray-600">Address</label>
        <input type="text" id="address" onChange={handleFormChange} name="address" className="w-full outline-none border rounded px-3 py-2"/>
      </div>

      <div className="mb-4">
        <label for="phone" className="block text-gray-600">Phone Number</label>
        <input type="tel" id="phone" onChange={handleFormChange} name="phone" className="w-full outline-none border rounded px-3 py-2"/>
      </div>

      
    <div className="flex items-center justify-center w-full mb-4">
        <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
        </label>
    </div> 


      <div className='flex justify-center mb-5'>
        <button  className="bg-custom-lightorange text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-gray-700 rounded">
          Submit
        </button>
      </div>
      
    </form>
      </div>
    </div>
  )
}

export default AddForm