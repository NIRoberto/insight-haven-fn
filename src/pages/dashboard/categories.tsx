import React, { useState } from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { categories } from "../../components/home/latestArticle";

interface CategoryCardProps {
  id: string;
  name: string;
  description: any;
  image: any;
  articleCount: any;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  description,
  image,
  articleCount,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-500 mb-4">Articles: {articleCount}</p>
        <div className="flex justify-between items-center text-xs text-gray-600">
          <button
            onClick={onView}
            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600"
          >
            <FaEye /> <span>View</span>
          </button>
          <button
            onClick={onEdit}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-600"
          >
            <FaEdit /> <span>Edit</span>
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-600"
          >
            <FaTrash /> <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}; // Adjust the import path as necessary

const Categories: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleView = (id: string) => {
    console.log(`View category ${id}`);
    // Implement view logic
  };

  const handleEdit = (id: string) => {
    console.log(`Edit category ${id}`);
    // Implement edit logic
  };

  const handleDelete = (id: string) => {
    console.log(`Delete category ${id}`);
    // Implement delete logic
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCategories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            description={category.description}
            image={category.image}
            articleCount={category.articleCount}
            onView={() => handleView(category.id)}
            onEdit={() => handleEdit(category.id)}
            onDelete={() => handleDelete(category.id)}
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

export default Categories;
