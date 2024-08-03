import React from "react";
import { Category } from "../types/blog/blog";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="bg-white p-4 text-left  rounded-lg shadow-md flex flex-col items-start w-full ">
      <div className="w-full h-44 bg-gray-100 rounded-lg overflow-hidden">
        {category.image && (
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {category.articleCount !== undefined && (
        <p className="text-gray-600 mt-2">{category.articleCount} articles</p>
      )}
    </div>
  );
};

export default CategoryCard;
