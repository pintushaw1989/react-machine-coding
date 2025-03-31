import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const Autocomplete = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const fetchData = async (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredUsers([]);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${searchTerm}`
      );
      const data = await response.json();

      if (data && data.users && data.users.length > 0) {
        setFilteredUsers(data.users);
      } else {
        setFilteredUsers([]);
      }
    } catch (error) {
      console.log(error);
      setFilteredUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // use of debounce
    let timer = setTimeout(() => {
      fetchData(searchTerm);
    }, 500);

    // clear the previous timer if searchTerm changes
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleResultClick = (user) => {
    setSearchTerm(`${user.firstName} ${user.lastName}`);
    setShowResults(false);
  };

  return (
    <div className="container">
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        placeholder="Search users..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowResults(true);
        }}
      />
  
      {showResults && (searchTerm.trim() !== "" || isLoading) && (
        <div className="suggestions">
          {isLoading ? (
            <div>Loading...</div>
          ) : filteredUsers.length > 0 ? (
            <Suggestions
              users={filteredUsers}
              handleResultClick={handleResultClick}
            />
          ) : (
            <div>No user found!</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
