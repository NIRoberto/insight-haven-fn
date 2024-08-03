const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({
  image,
  title,
  summary,
  author,
}) => {
  return (
    <div className="bg-white rounded-lg  flex flex-row">
      {/* Image Section */}
      <div className="w-1/2  bg-gray-100 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-md font-bold mb-2">{title}</h3>
        </div>
        <div className="text-gray-500 text-sm">
          <p>By: {author}</p>
        </div>
      </div>
    </div>
  );
};

interface FeaturedArticleCardProps {
  image: string;
  title: string;
  summary: string;
  author: string;
}
export default FeaturedArticleCard;
