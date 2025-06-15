import React from 'react';
import PostList from '../components/posts/PostList';
import CreatePost from '../components/posts/CreatePost';
import '../assets/styles/feed.css';

const Feed = () => {
  return (
    <div className="feed-page">
      <div className="feed-container">
        <div className="feed-sidebar">
          {/* Sidebar content (user profile, suggestions, etc.) */}
          <div className="user-card">
            <div className="user-avatar">
              <span>U</span> {/* Replace with user initial */}
            </div>
            <h3>Username</h3>
            <p>@userhandle</p>
          </div>
        </div>
        
        <div className="feed-main">
          <CreatePost />
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Feed;