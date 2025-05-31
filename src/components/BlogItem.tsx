import React from "react";

type Blog = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const BlogItem: React.FC<{ blog: Blog }> = ({ blog }) => (
  <div className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 text-white transition-transform hover:scale-105 duration-200">
    <h2 className="text-xl font-bold mb-2 drop-shadow-lg">{blog.title}</h2>
    <p className="text-base drop-shadow-sm">{blog.body}</p>
  </div>
);

export default BlogItem;
