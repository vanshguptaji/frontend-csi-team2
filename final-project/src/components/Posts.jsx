// src/components/Post.jsx
import React from "react";

    


const Post = ({ image, time, caption, hashtags, likes, comments, shares, views, isVideo }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h2 className="font-bold">Alanna Myassa</h2>
          <p className="text-sm text-gray-400">{time}</p>
        </div>
      </div>

      {/* Caption */}
      <p className="mb-4">{caption}</p>
      <p className="text-sm text-gray-400">{hashtags}</p>

      {/* Media */}
      <div className="rounded-lg overflow-hidden mb-4">
        {isVideo ? (
          <div className="relative">
            <video
              src={image}
              className="w-full h-auto object-cover"
              controls={false}
              muted
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="text-white text-4xl">▶</span>
            </button>
          </div>
        ) : (
          <img
            src={image}
            alt="Post"
            className="w-full h-auto object-cover"
          />
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between text-sm">
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1">
            <span>❤️</span>
            <span>{likes}</span>
          </button>
          <button className="flex items-center space-x-1">
            <span>💬</span>
            <span>{comments}</span>
          </button>
          <button className="flex items-center space-x-1">
            <span>🔁</span>
            <span>{shares}</span>
          </button>
        </div>
        <p>{views} Views</p>
      </div>
      
    </div>
  );
};

export default Post;
