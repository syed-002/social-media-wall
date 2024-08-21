import React, { useState } from 'react';
import '../styles/addPost.scss';
//import { alignProperty } from '@mui/material/styles/cssUtils';



const AddPost = ({ onAddPost }) => {
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (content) {
      onAddPost(content);
      setContent('');
    }
  };

  return (
    <div className="add-post-container">
      <textarea
        className="text-area" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="What's on your mind?" 
      />
      <button className="button" onClick={handlePost}>Post</button>
    </div>
  );
};

export default AddPost;
