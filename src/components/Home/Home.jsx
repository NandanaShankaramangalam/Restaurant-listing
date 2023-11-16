import React, { useState } from 'react'
import Cards from '../Cards/Cards'
import AddForm from '../AddForm/AddForm'
// import Restaurants from '../Restaurants/Restaurants'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleModalOpen = () =>{
        setIsOpen((prev)=>!prev);
    }
  return (
    <div>
    <div className={`mt-32 px-16 ${isOpen?'blur':''}`}>
        <div className='mb-4'>
            <p>
            Welcome to <span className='text-custom-lightorange font-semibold'>Plum Chef</span>, your go-to destination for discovering and exploring the finest dining experiences in your city! Whether you're a foodie on the hunt for the latest culinary trends or someone looking for a cozy spot for a casual dinner, our app has you covered.
            </p>
        </div>
        <div className='mb-4 flex justify-center'>
            <button onClick={handleModalOpen} className="bg-custom-lightorange text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-gray-700 rounded">
            Add a Restaurant
            </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 mb-6'>
          <Cards/>
        </div>    
    </div>
    {isOpen && <AddForm handleModalOpen={handleModalOpen}/>}
    </div>
  )
}

export default Home