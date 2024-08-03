import React, { useState } from "react";
import { Article } from "../types/blog/blog";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { formatDate } from "../../utils/dateformat";

const articles: Article[] = [
  {
    id: "1",
    title:
      "An In-Depth Exploration of Neural Networks: Architecture, Training, and Applications",
    summary:
      "An in-depth exploration of neural networks, including their architecture, training methods, and applications in various fields.",
    content: `
      <h2>Introduction to Neural Networks</h2>
      <p>Neural networks are a class of machine learning models inspired by the structure and function of the human brain. They are designed to recognize patterns and learn from data by adjusting the weights of connections between nodes.</p>
      <h2>Architectures of Neural Networks</h2>
      <p>Neural networks can be categorized into different architectures, such as:</p>
      <ul>
        <li><strong>Feedforward Networks:</strong> Information moves in one direction from input to output.</li>
        <li><strong>Recurrent Networks:</strong> Networks where connections can create cycles, allowing information to be processed in loops.</li>
      </ul>
      <h2>Applications of Neural Networks</h2>
      <p>Neural networks have a wide range of applications, including:</p>
      <ul>
        <li><strong>Image Recognition:</strong> Identifying objects in images.</li>
        <li><strong>Natural Language Processing:</strong> Understanding and generating human language.</li>
      </ul>
    `,
    date: "2024-08-01T10:00:00Z",
    category: { id: "ai", name: "AI" },
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0H9Lgk0qTCENybcPK1BYizRiduauiXU8bDA&s",
    comments: [],
    author: { id: "author1", name: "Dr. Alex Johnson" },
  },
  {
    id: "2",
    title:
      "How Machine Learning is Revolutionizing Healthcare: From Diagnostics to Personalized Treatment",
    summary:
      "Exploring how machine learning algorithms are transforming healthcare by improving diagnostic accuracy and personalizing treatment plans.",
    content: `
      <h2>Introduction to Machine Learning in Healthcare</h2>
      <p>Machine learning has rapidly advanced the field of healthcare, providing tools for early diagnosis, personalized medicine, and predictive analytics.</p>
      <h2>Applications in Healthcare</h2>
      <p>Machine learning is used in various healthcare applications, including:</p>
      <ul>
        <li><strong>Disease Prediction Models:</strong> Predicting the likelihood of diseases based on patient data.</li>
        <li><strong>Medical Image Analysis:</strong> Analyzing medical images for accurate diagnosis.</li>
        <li><strong>Personalized Treatment Plans:</strong> Developing treatment plans tailored to individual patients.</li>
      </ul>
      <h2>Challenges and Ethical Considerations</h2>
      <p>While machine learning offers significant benefits, it also presents challenges such as data privacy and algorithmic bias.</p>
    `,
    date: "2024-08-02T10:00:00Z",
    category: { id: "ml", name: "Machine Learning" },
    createdAt: "2024-08-02T10:00:00Z",
    updatedAt: "2024-08-02T10:00:00Z",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_V73mOd26HDygg-iS3nagf0_og0f4GgpgWQ&s",
    comments: [],
    author: { id: "author2", name: "Dr. Emily Wang" },
  },
  {
    id: "3",
    title:
      "Ethical Challenges in AI Development: Bias, Privacy, and the Future of Work",
    summary:
      "A critical look at the ethical issues surrounding artificial intelligence, including bias, privacy concerns, and the impact on employment.",
    content: `
      <h2>Introduction to AI Ethics</h2>
      <p>As artificial intelligence systems become more prevalent, they raise important ethical questions that must be addressed.</p>
      <h2>Key Ethical Issues</h2>
      <p>The primary ethical concerns include:</p>
      <ul>
        <li><strong>Algorithmic Bias:</strong> Bias in AI algorithms can lead to unfair outcomes.</li>
        <li><strong>Privacy Concerns:</strong> AI systems often require access to sensitive personal data.</li>
        <li><strong>Impact on Employment:</strong> Automation and AI may lead to job displacement.</li>
      </ul>
      <h2>Developing Ethical AI Practices</h2>
      <p>It is crucial to develop AI systems responsibly, ensuring transparency and fairness in their design and implementation.</p>
    `,
    date: "2024-08-03T10:00:00Z",
    category: { id: "ethics", name: "Ethics" },
    createdAt: "2024-08-03T10:00:00Z",
    updatedAt: "2024-08-03T10:00:00Z",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_V73mOd26HDygg-iS3nagf0_og0f4GgpgWQ&s",
    comments: [],
    author: { id: "author3", name: "Prof. Michael Lee" },
  },
];

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
          {articles.map((_, index) => (
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
          {articles.map((article, index) => (
            <div key={article.id} className="flex">
              <h1
                className={`h-6 w-6 p-2 rounded-full flex items-center justify-center ${
                  index === activeIndex ? "bg-btn-gradient" : "bg-heading"
                }
                    text-white `}
              >
                {index + 1}
              </h1>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
