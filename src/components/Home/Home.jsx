import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import AddForm from '../AddForm/AddForm'
import { api } from '../../Services/axios'
// import Restaurants from '../Restaurants/Restaurants'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [restaurantData, setRestaurantData] = useState([])
    const handleModalOpen = () =>{
        setIsOpen((prev)=>!prev);
    }
    
    useEffect(()=>{
     fetchData()
    },[])

    const fetchData = async () => {
        try {
          const response = await api.get("/");
          console.log("Response from data fetch:", response.data.data);
          if (response.data && response.data.data) {
            setRestaurantData(response.data.data);
          }
        } catch (error) {
          console.error("Error occurred while fetching data:", error);
        }
      };
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6 gap-4'>
          <Cards restaurantData={restaurantData} fetchData={fetchData}/>
        </div>    
    </div>
    {isOpen && <AddForm handleModalOpen={handleModalOpen} fetchData={fetchData}/>}
    </div>
  )
}

export default Home