import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { formatDate } from "../../utils/dateformat";
import { articles } from "./latestArticle";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col lg:flex-row space-y-4 p-8 lg:space-y-0 lg:space-x-4">
      {/* Left Side: Active Article Image */}
      <div className="flex-1 bg-white p-4 rounded-lg  relative">
        <img
          src={articles[activeIndex].image}
          alt={articles[activeIndex].title}
          className="w-full h-[70vh] rounded-lg"
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-buttonBg text-white p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-buttonBg text-white p-2 rounded-full"
        >
          <FaArrowRight />
        </button>
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-2">
          {articles.slice(0, 3).map((_, index) => (
            <div
              key={index}
              className={`
                w-8
                ${index === activeIndex ? "w-4" : "w-2"} rounded-full ${
                index === activeIndex ? "bg-buttonBg" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Side: List of Articles */}
      <div className="flex-1 bg-white p-8  rounded-lg shadow-md">
        <div className="space-y-4">
          {articles.slice(0, 3).map((article, index) => (
            <div key={article.id} className="flex">
              <h1
                className={`h-6 w-6 p-2 rounded-full flex items-center justify-center ${
                  index === activeIndex ? "bg-btn-gradient" : "bg-heading"
                }
                    text-white `}
              >
                {index + 1}
              </h1>
              <Link to={`/article/${article.id}`}>
                <div className="flex-1 ml-4">
                  <button
                    className={`w-full text-left text-heading  text-xl   ${
                      index === activeIndex ? "font-bold" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {article.title}
                  </button>
                  {index === activeIndex && (
                    <div className="mt-2 text-md">
                      <p>{article.summary}</p>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-sm">
                          {article.author.name} |{formatDate(article.date)}
                        </p>
                        <button className="text-sm text-buttonBg font-semibold">
                          Read More
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
