// Define the types for nested objects
interface Category {
  id: string;
  name: string;
  description?: string; // Optional field for category description
  image?: string; // Optional field for category image URL
  articleCount?: number; // Optional field for the number of articles in the category
}

interface Author {
  id: string;
  name: string;
  bio?: string;
  profileImage?: string;
}

interface Comment {
  id: string;
  author: Author;
  content: string;
  createdAt: string;
}

interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: Category;
  createdAt: string;
  updatedAt: string;
  image: string;
  comments: Comment[];
  author: Author;
}

export type { Category, Author, Comment, Article };
