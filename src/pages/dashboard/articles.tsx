import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { articles } from "../../components/home/latestArticle";

interface CardProps {
  title: string;
  summary: string;
  image: string;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  summary,
  image,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col justify-between">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{summary}</p>
        <div className="flex justify-between items-center gap-2 text-xs text-gray-600">
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
};

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleView = (id: string) => {
    console.log(`View article ${id}`);
  };

  const handleEdit = (id: string) => {
    console.log(`Edit article ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete article ${id}`);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(articles.length / itemsPerPage);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            summary={article.summary}
            image={article.image}
            onView={() => handleView(article.id)}
            onEdit={() => handleEdit(article.id)}
            onDelete={() => handleDelete(article.id)}
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

export default Articles;
