import React from "react";
import { Comment as CommentType } from "../types/blog/blog";

interface CommentProps {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <div className="flex items-center mb-2">
        <img
          src={comment.author.profileImage}
          alt={comment.author.name}
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <h4 className="text-sm font-semibold">{comment.author.name}</h4>
          <p className="text-xs text-gray-600">
            {new Date(comment.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <p className="text-gray-700">{comment.content}</p>
    </div>
  );
};

export default Comment;
