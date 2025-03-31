import React from "react";

const Suggestions = ({ users, handleResultClick }) => {
  return (
    <div className="suggestions-list">
      {users.map((user) => (
        <div
          className="suggestion-item"
          key={user.id}
          onClick={() => handleResultClick(user)}
        >
          <img
            className="suggestion-image"
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
          />
          <div className="suggestion-info">
            <div className="suggestion-name">
              {user.firstName} {user.lastName}
            </div>
            <div className="suggestion-email">{user.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
