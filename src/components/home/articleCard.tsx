import React from "react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  image: string;
  title: string;
  summary: string;
  id: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  image,
  title,
  summary,
}) => {
  return (
    <Link to={`/article/${id}`}>
      <div className="flex-1 bg-white p-4 rounded-lg shadow-md relative flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="flex-1 lg:w-1/2 bg-gray-100 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 lg:w-1/2 p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
          </div>
          <div className="flex items-center space-x-4 text-gray-500">
            <div className="flex items-center space-x-4 text-gray-500">
              <img src="" alt="" />
              <p>by John Doe</p>
            </div>
            <div>
              <p>May 20, 2024</p>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-4">{summary}</p>
          </div>
          <div>
            <button className="bg-btn-gradient text-white py-2 px-4 rounded-md hover:bg-btnHover transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
