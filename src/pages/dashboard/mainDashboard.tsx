import React from "react";
import { FaFileAlt, FaTags, FaUsers } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa"; // Example icon for views
import { BiComment } from "react-icons/bi";
import { SummaryCardProps } from "../../components/types/dashboard/dashboard";
import { Article } from "../../components/types/blog/blog";
import { articles } from "../../components/home/latestArticle";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="p-6">
        {/* Article Title */}
        <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
        {/* Article Summary */}
        <p className="text-sm text-gray-600 mb-4">{article.summary}</p>

        {/* Article Details */}
        <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
          <div className="flex items-center">
            <FaRegEye className="mr-1" /> {/* Views icon */}
            <span>1.2K Views</span> {/* Placeholder text for views */}
          </div>
          <div className="flex items-center">
            <BiComment className="mr-1" /> {/* Comments icon */}
            <span>{article.comments.length} Comments</span>
          </div>
        </div>

        {/* Read More Link */}
      </div>
    </div>
  );
};
const SummaryCard: React.FC<SummaryCardProps> = ({
  icon: Icon,
  label,
  number,
  bgColor,
}) => {
  return (
    <div
      className={`p-8 rounded-2xl shadow-md text-white bg-buttonBg  flex justify-between items-center`}
    >
      <div>
        <p className="text-sm">{label}</p>
        <h3 className="text-xl font-bold">{number}</h3>
      </div>
      <div className="mr-4">
        <Icon className="text-4xl" />
      </div>
    </div>
  );
};

const MainDashboard: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to the Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <SummaryCard
          icon={FaFileAlt}
          label="Articles"
          number={150}
          bgColor="bg-blue-600"
        />
        <SummaryCard
          icon={FaTags}
          label="Categories"
          number={20}
          bgColor="bg-green-600"
        />
        <SummaryCard
          icon={FaUsers}
          label="Users"
          number={500}
          bgColor="bg-red-600"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">Top Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default MainDashboard;
