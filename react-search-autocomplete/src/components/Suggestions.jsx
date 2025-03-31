import React from "react";

const Suggestions = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          {user.firstName} {user.lastName}
        </p>
      ))}
    </div>
  );
};

export default Suggestions;
