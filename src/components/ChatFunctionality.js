import React, { useState } from 'react';
import '../styles/chatFunctionality.scss';  // Import the SCSS file

const ChatFunctionality = ({ selectedFriend }) => {
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');

  // Handle sending a new message
  const handleSendMessage = (e) => {
    if (e.key === 'Enter' && newMessage.trim() && selectedFriend) {
      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedFriend]: [...(prevMessages[selectedFriend] || []), { text: newMessage, isMine: true }],
      }));
      setNewMessage('');
    }
  };

  if (!selectedFriend) {
    return <div>Select a friend to start chatting</div>;
  }

  const chatMessages = messages[selectedFriend] || [];

  return (
    <div className="ChatFunctionalityWrapper">
      <div className="ChatMessages">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`Message ${msg.isMine ? 'isMine' : ''}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleSendMessage}
        className="MessageInput"
      />
    </div>
  );
};

export default ChatFunctionality;
