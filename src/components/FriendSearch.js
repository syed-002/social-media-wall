import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/friendSearch.scss'; // Import SCSS file

const FriendSearch = ({ selectFriend }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const friends = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Hannah',
    'Ivy',
    'Jack',
    'Karen',
    'Leo',
    'Mona',
    'Nina',
    'Oliver',
    'Paul',
    'Quinn',
  ];

  const filteredFriends = friends.filter(friend =>
    friend.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="friend-search">
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
      <div className="friend-list">
        {filteredFriends.map((friend) => (
          <div key={friend} className="friend-item" onClick={() => selectFriend(friend)}>
            {friend}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendSearch;
