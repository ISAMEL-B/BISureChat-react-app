import React, { useState } from 'react';
import { HeartIcon, CommentIcon, ShareIcon, BugIcon } from '../ui/Icons';

const Post = ({ username, content, timestamp, likes, comments }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-avatar">
          <span>{username.charAt(0).toUpperCase()}</span>
        </div>
        <div className="user-info">
          <h4>{username}</h4>
          <p className="timestamp">{timestamp}</p>
        </div>
      </div>
      
      <div className="post-content">
        <p>{content}</p>
      </div>
      
      <div className="post-stats">
        <span>{likeCount} likes</span>
        <span>{comments.length} comments</span>
      </div>
      
      <div className="post-actions">
        <button 
          onClick={handleLike} 
          className={`like-btn ${isLiked ? 'liked' : ''}`}
        >
          <HeartIcon filled={isLiked} />
          Like
        </button>
        
        <button onClick={() => setShowComments(!showComments)}>
          <CommentIcon />
          Comment
        </button>
        
        <button>
          <ShareIcon />
          Share
        </button>
        
        <button className="bug-btn">
          <BugIcon />
          Bug
        </button>
      </div>
      
      {showComments && (
        <div className="comments-section">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <strong>{comment.user}</strong>: {comment.text}
            </div>
          ))}
          <div className="add-comment">
            <input type="text" placeholder="Add a comment..." />
            <button>Post</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;