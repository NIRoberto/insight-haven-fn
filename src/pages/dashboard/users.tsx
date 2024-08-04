import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface UserCardProps {
  id: string;
  name: string;
  email: string;
  image: string;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  email,
  image,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-32 object-cover" />
        <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg ">
          <div className="flex gap-1">
            <button
              onClick={onView}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEye />
            </button>
            <button
              onClick={onEdit}
              className="text-yellow-500 hover:text-yellow-700"
            >
              <FaEdit />
            </button>
            <button
              onClick={onDelete}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{email}</p>
      </div>
    </div>
  );
};

export const users = [
  {
    id: "user1",
    name: "Eric Ndayisenga",
    email: "eric.ndayisenga@example.com",
    image: "https://via.placeholder.com/150?text=Eric+Ndayisenga",
  },
  {
    id: "user2",
    name: "Aline Uwase",
    email: "aline.uwase@example.com",
    image: "https://via.placeholder.com/150?text=Aline+Uwase",
  },
  {
    id: "user3",
    name: "Jean-Pierre Nkurunziza",
    email: "jeanpierre.nkurunziza@example.com",
    image: "https://via.placeholder.com/150?text=Jean-Pierre+Nkurunziza",
  },
  {
    id: "user4",
    name: "Fatima Munyaneza",
    email: "fatima.munyaneza@example.com",
    image: "https://via.placeholder.com/150?text=Fatima+Munyaneza",
  },
  {
    id: "user5",
    name: "Joshua Mugenzi",
    email: "joshua.mugenzi@example.com",
    image: "https://via.placeholder.com/150?text=Joshua+Mugenzi",
  },
  {
    id: "user6",
    name: "Kavira Grace",
    email: "kavira.grace@example.com",
    image: "https://via.placeholder.com/150?text=Kavira+Grace",
  },
  {
    id: "user7",
    name: "Yves Habimana",
    email: "yves.habimana@example.com",
    image: "https://via.placeholder.com/150?text=Yves+Habimana",
  },
  {
    id: "user8",
    name: "Diane Uwimana",
    email: "diane.uwimana@example.com",
    image: "https://via.placeholder.com/150?text=Diane+Uwimana",
  },
  {
    id: "user9",
    name: "Claude Bihogos",
    email: "claude.bihogos@example.com",
    image: "https://via.placeholder.com/150?text=Claude+Bihogos",
  },
  {
    id: "user10",
    name: "Nadia Kamanzi",
    email: "nadia.kamanzi@example.com",
    image: "https://via.placeholder.com/150?text=Nadia+Kamanzi",
  },
];

const Users: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleView = (id: string) => {
    console.log(`View user ${id}`);
    // Implement view logic
  };

  const handleEdit = (id: string) => {
    console.log(`Edit user ${id}`);
    // Implement edit logic
  };

  const handleDelete = (id: string) => {
    console.log(`Delete user ${id}`);
    // Implement delete logic
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentUsers.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            image={user.image}
            onView={() => handleView(user.id)}
            onEdit={() => handleEdit(user.id)}
            onDelete={() => handleDelete(user.id)}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-400"
        >
          <FaChevronLeft /> <span>Previous</span>
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-400"
        >
          <FaChevronRight /> <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default Users;
