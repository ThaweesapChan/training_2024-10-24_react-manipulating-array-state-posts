// Posts.jsx
import React, { useState } from "react";

// ข้อมูล Post จากโจทย์
const initialPosts = [
  { id: 1, title: "Paper Clips", content: "Post Content...", likes: 61 },
  { id: 2, title: "Born to Kill", content: "Post Content...", likes: 46 },
  { id: 3, title: "Ten Shrews", content: "Post Content...", likes: 50 },
];

function Posts() {
  // ใช้ useState ในการเก็บข้อมูลโพสต์
  const [posts, setPosts] = useState(initialPosts);

  // ฟังก์ชันสำหรับเพิ่ม Like
  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  // ฟังก์ชันสำหรับลด Like (ต้องไม่ต่ำกว่า 0)
  const handleDislike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId && post.likes > 0
        ? { ...post, likes: post.likes - 1 }
        : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="post-header">
              <h2>{post.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button
                onClick={() => handleLike(post.id)}
                className="like-button"
              >
                Like
              </button>
              <button
                onClick={() => handleDislike(post.id)}
                className="dislike-button"
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
