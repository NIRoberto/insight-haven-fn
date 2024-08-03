import { Link } from "react-router-dom";

const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({
  image,
  title,
  summary,
  author,
  id,
}) => {
  return (
    <Link to={`/article/${id}`}>
      <div className="bg-white rounded-lg my-4  border flex flex-row">
        {/* Image Section */}
        <div className="w-1/2 h-28  bg-gray-100 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="w-1/2 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold mb-2">{title}</h3>
          </div>
          <div className="text-gray-500 text-sm">
            <p>By: {author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

interface FeaturedArticleCardProps {
  image: string;
  title: string;
  summary: string;
  author: string;
  id: string;
}
export default FeaturedArticleCard;
