
import React, { useState } from 'react';

 // Import SCSS file
import { FaTrash, FaHeart, FaComment } from 'react-icons/fa';
import '../styles/post.scss';

const Post = ({ post, onDelete, onLike, onComment }) => {
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleAddComment = () => {
    if (comment.trim()) {
      onComment(post.id, comment);
      setComment('');
      setShowComments(true); // Automatically show comments after adding one
    }
  };

  return (
    <div className="post-container">
      <div className="delete-button" onClick={() => onDelete(post.id)}>
        <FaTrash />
      </div>
      <div className="post-content">{post.content}</div>
      <div className="post-actions">
        <div className="action-button" onClick={() => onLike(post.id)}>
          <FaHeart color={post.liked ? 'red' : 'black'} /> {post.likes} Likes
        </div>
        <div className="action-button" onClick={() => setShowComments(!showComments)}>
          <FaComment /> {post.comments.length} Comments
        </div>
      </div>

      {showComments && (
        <div className="comment-section">
          <input
            className="comment-input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
          />
          <div className="comment-list">
            {post.comments.map((cmt, index) => (
              <div className="comment-item" key={index}>{cmt}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;

