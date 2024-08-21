import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp, FaArrowLeft } from 'react-icons/fa';
import '../styles/chatContainer.scss';

const ChatWindow = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');
  const [isSearching, setIsSearching] = useState(true);

  const friends = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace',
    'Hannah', 'Ivy', 'Jack', 'Karen', 'Leo', 'Mona', 'Nina', 
    'Oliver', 'Paul', 'Quinn',
  ];

  const filteredFriends = friends.filter(friend =>
    friend.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCollapse = () => {
    if (!selectedFriend) {
      // Only allow collapsing if no friend is selected
      setIsCollapsed(!isCollapsed);
    }
  };

  const selectFriend = (friend) => {
    setSelectedFriend(friend);
    setIsSearching(false);
    setIsCollapsed(false); // Ensure the chat window stays expanded
  };

  const handleSendMessage = (e) => {
    if (e.key === 'Enter' && newMessage.trim()) {
      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedFriend]: [...(prevMessages[selectedFriend] || []), { text: newMessage, isMine: true }],
      }));
      setNewMessage('');
    }
  };

  const handleBackToSearch = (e) => {
    e.stopPropagation(); // Prevent collapsing when back button is clicked
    setSelectedFriend(null);
    setIsSearching(true);
  };

  return (
    <div className={`chat-container ${!isCollapsed ? 'expanded' : ''}`}>
      <div className="chat-header" onClick={toggleCollapse}>
        {selectedFriend && (
          <div className="back-button visible" onClick={handleBackToSearch}>
            <FaArrowLeft />
          </div>
        )}
        <div>{selectedFriend ? `Chat with ${selectedFriend}` : 'Select a Friend'}</div>
        {!selectedFriend && (isCollapsed ? <FaChevronUp /> : <FaChevronDown />)}
      </div>
      <div className={`chat-body ${isCollapsed ? 'hidden' : ''}`}>
        {isSearching ? (
          <div className="friend-list">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search friends..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            {filteredFriends.map((friend) => (
              <div className="friend-item" key={friend} onClick={() => selectFriend(friend)}>
                {friend}
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="chat-messages">
              {messages[selectedFriend] && messages[selectedFriend].map((msg, index) => (
                <div className={`message ${msg.isMine ? 'mine' : ''}`} key={index}>
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
              className="message-input"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
