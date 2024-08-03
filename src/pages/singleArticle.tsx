import React from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/home/comment";
import { Article } from "../components/types/blog/blog";

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

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((article: any) => article.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center mb-4">
            <img
              src={article.author.profileImage}
              alt={article.author.name}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <h2 className="text-lg font-semibold">{article.author.name}</h2>
              <p className="text-sm text-gray-600">{article.author.bio}</p>
            </div>
          </div>
          <div className="prose">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4">Comments</h3>
            {article.comments.map((comment: any) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
