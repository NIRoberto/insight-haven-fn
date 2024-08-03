import React, { useState } from "react";
import { Article, Category } from "../types/blog/blog";
import ArticleCard from "./articleCard";
import FeaturedArticleCard from "./featuredcard";
import CategoryCard from "./categoryCard";

const articles: Article[] = [
  {
    id: "1",
    title: "The Future of AI in 2025",
    summary:
      "Exploring the advancements in AI technology and its implications for the future.",
    content: "<p>Artificial Intelligence (AI) is rapidly evolving...</p>",
    date: "2024-08-01T10:00:00Z",
    category: { id: "cat1", name: "AI & Machine Learning" },
    createdAt: "2024-08-01T10:00:00Z",
    updatedAt: "2024-08-01T10:00:00Z",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mtjwbFnS2U6LuDvciBz13g@2x.jpeg",
    comments: [
      {
        id: "1",
        author: {
          id: "author1",
          name: "Alice Johnson",
          bio: "AI Enthusiast and Researcher",
          profileImage:
            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mtjwbFnS2U6LuDvciBz13g@2x.jpeg",
        },
        content: "Great article! Very insightful.",
        createdAt: "2024-08-01T12:00:00Z",
      },
    ],
    author: {
      id: "author2",
      name: "John Doe",
      bio: "Tech writer and AI expert",
      profileImage:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mtjwbFnS2U6LuDvciBz13g@2x.jpeg",
    },
  },
  {
    id: "2",
    title: "The Rise of Quantum Computing",
    summary:
      "An overview of quantum computing technology and its potential applications.",
    content: "<p>Quantum computing is a revolutionary technology...</p>",
    author: {
      id: "author2",
      name: "John Doe",
      bio: "Tech writer and AI expert",
      profileImage:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mtjwbFnS2U6LuDvciBz13g@2x.jpeg",
    },
    date: "2024-08-02T10:00:00Z",
    category: { id: "cat2", name: "Quantum Computing" },
    createdAt: "2024-08-02T10:00:00Z",
    updatedAt: "2024-08-02T10:00:00Z",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mtjwbFnS2U6LuDvciBz13g@2x.jpeg",
    comments: [
      {
        id: "1",
        author: {
          id: "author1",
          name: "Alice Johnson",
          bio: "AI Enthusiast and Researcher",
          profileImage:
            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mtjwbFnS2U6LuDvciBz13g@2x.jpeg",
        },
        content: "Great article! Very insightful.",
        createdAt: "2024-08-01T12:00:00Z",
      },
      {
        id: "2",
        author: {
          id: "author1",
          name: "Alice Johnson",
          bio: "AI Enthusiast and Researcher",
          profileImage:
            "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mtjwbFnS2U6LuDvciBz13g@2x.jpeg",
        },
        content: "Great article! Very insightful.",
        createdAt: "2024-08-01T12:00:00Z",
      },
    ],
  },
  // Add more articles here...
];

const categories: Category[] = [
  {
    id: "cat1",
    name: "AI & Machine Learning",
    description:
      "Explore the latest advancements in artificial intelligence and machine learning technologies.",
    image: "https://via.placeholder.com/150?text=AI+%26+Machine+Learning",
    articleCount: 120,
  },
  {
    id: "cat2",
    name: "Quantum Computing",
    description:
      "Understand the principles and applications of quantum computing and its impact on the future.",
    image: "https://via.placeholder.com/150?text=Quantum+Computing",
    articleCount: 45,
  },
  {
    id: "cat3",
    name: "Robotics",
    description:
      "Dive into the world of robotics, automation, and their applications in various industries.",
    image: "https://via.placeholder.com/150?text=Robotics",
    articleCount: 78,
  },
  {
    id: "cat4",
    name: "Natural Language Processing (NLP)",
    description:
      "Learn about NLP technologies that enable computers to understand and process human language.",
    image: "https://via.placeholder.com/150?text=NLP",
    articleCount: 65,
  },
  {
    id: "cat5",
    name: "Data Science",
    description:
      "Explore techniques in data analysis, statistics, and machine learning to extract insights from data.",
    image: "https://via.placeholder.com/150?text=Data+Science",
    articleCount: 150,
  },
  {
    id: "cat6",
    name: "Cybersecurity",
    description:
      "Stay updated on the latest trends and practices in cybersecurity to protect digital assets.",
    image: "https://via.placeholder.com/150?text=Cybersecurity",
    articleCount: 90,
  },
  {
    id: "cat7",
    name: "Cloud Computing",
    description:
      "Discover the benefits and challenges of cloud computing, including service models and deployment types.",
    image: "https://via.placeholder.com/150?text=Cloud+Computing",
    articleCount: 55,
  },
  {
    id: "cat8",
    name: "Blockchain Technology",
    description:
      "Understand blockchain technology and its potential to revolutionize various sectors.",
    image: "https://via.placeholder.com/150?text=Blockchain+Technology",
    articleCount: 34,
  },
  {
    id: "cat9",
    name: "Internet of Things (IoT)",
    description:
      "Explore IoT devices and systems that connect and communicate over the internet.",
    image: "https://via.placeholder.com/150?text=IoT",
    articleCount: 88,
  },
  {
    id: "cat10",
    name: "Software Development",
    description:
      "Stay current with trends in software development, including best practices and new technologies.",
    image: "https://via.placeholder.com/150?text=Software+Development",
    articleCount: 160,
  },
  {
    id: "cat11",
    name: "Tech Innovations",
    description:
      "Learn about the latest technological innovations and their impact on various fields.",
    image: "https://via.placeholder.com/150?text=Tech+Innovations",
    articleCount: 112,
  },
  {
    id: "cat12",
    name: "Startups & Entrepreneurship",
    description:
      "Get insights into startup culture and entrepreneurship, including tips for building a successful business.",
    image: "https://via.placeholder.com/150?text=Startups+%26+Entrepreneurship",
    articleCount: 39,
  },
  {
    id: "cat13",
    name: "Digital Transformation",
    description:
      "Explore how digital transformation is reshaping businesses and industries.",
    image: "https://via.placeholder.com/150?text=Digital+Transformation",
    articleCount: 71,
  },
  {
    id: "cat14",
    name: "Ethics in Technology",
    description:
      "Discuss the ethical implications of technology and how to address them.",
    image: "https://via.placeholder.com/150?text=Ethics+in+Technology",
    articleCount: 27,
  },
  {
    id: "cat15",
    name: "Augmented Reality (AR) & Virtual Reality (VR)",
    description:
      "Discover the potential of AR and VR technologies in creating immersive experiences.",
    image: "https://via.placeholder.com/150?text=AR+%26+VR",
    articleCount: 59,
  },
  {
    id: "cat16",
    name: "Computational Neuroscience",
    description:
      "Understand the intersection of neuroscience and computational models.",
    image: "https://via.placeholder.com/150?text=Computational+Neuroscience",
    articleCount: 33,
  },
  {
    id: "cat17",
    name: "Big Data",
    description:
      "Explore big data technologies and how they help in processing large volumes of data.",
    image: "https://via.placeholder.com/150?text=Big+Data",
    articleCount: 98,
  },
  {
    id: "cat18",
    name: "Computer Vision",
    description:
      "Learn about computer vision techniques and their applications in image and video analysis.",
    image: "https://via.placeholder.com/150?text=Computer+Vision",
    articleCount: 74,
  },
  {
    id: "cat19",
    name: "Human-Computer Interaction",
    description:
      "Study how people interact with computers and design user-friendly interfaces.",
    image: "https://via.placeholder.com/150?text=Human-Computer+Interaction",
    articleCount: 50,
  },
  {
    id: "cat20",
    name: "Tech Policy & Regulation",
    description:
      "Examine the policies and regulations affecting the technology sector.",
    image: "https://via.placeholder.com/150?text=Tech+Policy+%26+Regulation",
    articleCount: 40,
  },
];

const LatestArticles: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [allArticles] = useState<Article[]>(articles);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    const totalPages = Math.ceil(allArticles.length / pageSize);
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="flex-1">
        <div className="flex-1 bg-white p-4 rounded-lg border-none">
          <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
          {allArticles
            .slice((page - 1) * pageSize, page * pageSize)
            .map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                image={article.image}
                title={article.title}
                summary={article.summary}
              />
            ))}
        </div>
        <div className="flex  mx-8 justify-between mt-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-btn-gradient text-white rounded-full"
          >
            &lt; Prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-btn-gradient text-white rounded-full"
          >
            Next &gt;
          </button>
        </div>
      </div>

      {/* Sidebar: List of Articles */}
      <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2">Categories</h3>
          <CategoryList />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Featured Articles</h3>
          <ul className="space-y-2">
            {articles.map((article, index) => (
              <FeaturedArticleCard
                key={article.id}
                image={article.image}
                title={article.title}
                summary={article.summary}
                author={article.author.name}
                id={article.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;

const CategoryList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? categories.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - itemsPerPage
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {categories
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </div>

      <div className="flex gap-4 items-end justify-end">
        <button
          onClick={handlePrev}
          className="  bg-btn-gradient text-white px-4 py-2  rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="  bg-btn-gradient text-white px-4 py-2 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
