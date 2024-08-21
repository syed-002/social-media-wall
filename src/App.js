// import React, { useState } from 'react';
// import MenuBar from './components/MenuBar';
// import AddPost from './components/AddPost';
// import Post from './components/Post';
// import ChatWindow from './components/ChatWindow';

// const App = () => {
//   const [posts, setPosts] = useState([]);

//   const handleAddPost = (content) => {
//     const newPost = {
//       id: Date.now(),
//       content,
//       likes: 0,
//       liked: false,
//       comments: [],
//       timestamp: new Date()
//     };
//     setPosts([newPost, ...posts]);
//   };

//   const handleDeletePost = (id) => {
//     setPosts(posts.filter(post => post.id !== id));
//   };

//   const handleLikePost = (id) => {
//     setPosts(posts.map(post =>
//       post.id === id ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked } : post
//     ));
//   };

//   const handleAddComment = (id, comment) => {
//     setPosts(posts.map(post =>
//       post.id === id ? { ...post, comments: [...post.comments, comment] } : post
//     ));
//   };

//   return (
//     <div>
//       <MenuBar />
//       <AddPost onAddPost={handleAddPost} />
//       {posts.map(post => (
//         <Post 
//           key={post.id} 
//           post={post} 
//           onDelete={handleDeletePost} 
//           onLike={handleLikePost} 
//           onComment={handleAddComment} 
//         />
//       ))}
//       <ChatWindow />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import MenuBar from './components/MenuBar';
import AddPost from './components/AddPost';
import Post from './components/Post';
import ChatContainer from './components/ChatContainer';
import "./styles/menuBar.scss";// Updated import for the new chat container

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (content) => {
    const newPost = {
      id: Date.now(),
      content,
      likes: 0,
      liked: false,
      comments: [],
      timestamp: new Date()
    };
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleLikePost = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked } : post
    ));
  };

  const handleAddComment = (id, comment) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, comments: [...post.comments, comment] } : post
    ));
  };

  return (
    <div className="app-container">
      <MenuBar />
      <AddPost onAddPost={handleAddPost} />
      {posts.map(post => (
        <Post 
          key={post.id} 
          post={post} 
          onDelete={handleDeletePost} 
          onLike={handleLikePost} 
          onComment={handleAddComment} 
        />
      ))}
      <ChatContainer /> {/* Updated component */}
    </div>
  );
};

export default App;
