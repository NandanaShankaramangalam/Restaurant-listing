import React, { useState } from "react";
import EditForm from "../Editform/EditForm";
import { api } from "../../Services/axios";

const Cards = ({ restaurantData, setRestaurantData, fetchData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const handleModalOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleEdit = (id, name, address, contact, description, image) => {
    handleModalOpen();
    setEditData({ id, name, address, contact, description, image });
  };

  const handleDelete = async (id) => {
    try {
      console.log("deletinggggg...", id);
      await api.delete(`http://localhost:3001/delete-restaurant/${id}`);
      const updatedData = restaurantData.filter((data) => data.id !== id);
      setRestaurantData(updatedData);
    } catch (error) {
      console.error("Error occurred while deleting data:", error);
    }
  };

  return (
    <>
      {restaurantData.map((item) => {
        return (
          <div class="max-w-sm rounded overflow-hidden shadow-lg relative group">
            <img
              class="w-full h-44"
              src={`${item.image}`}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">{item.name}</div>
              <p class="text-gray-700 text-base text-center">
                {item.description}
              </p>
              <p class="text-gray-700 text-base text-center">
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>{" "}
                {item.address}
              </p>
              <p class="text-gray-700 text-base text-center">
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>{" "}
                {item.contact}
              </p>
            </div>
            <div>
              <div className="h-auto px-3 py-1 rounded-2xl w-auto flex justify-center bg-slate-400 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-3 right-3 gap-2 items-center">
                <div>
                  <i
                    class="fa-solid fa-pen-to-square cursor-pointer"
                    onClick={() =>
                      handleEdit(
                        item.id,
                        item.name,
                        item.address,
                        item.contact,
                        item.description,
                        item.image
                      )
                    }
                  ></i>
                </div>
                <div>
                  <i
                    class="fa-solid fa-trash cursor-pointer"
                    onClick={() => handleDelete(item.id)}
                  ></i>
                </div>
              </div>
            </div>
            {isOpen && (
              <EditForm
                editData={editData}
                handleModalOpen={handleModalOpen}
                fetchData={fetchData}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default Cards;
