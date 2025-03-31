import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";

const Autocomplete = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [message, setMessage] = useState("");

  const fetchData = async (searchTerm) => {
    if (searchTerm?.length) {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${searchTerm}`
        );
        const data = await response.json();

        if (data && data.users && data.users.length > 0) {
          setFilteredUsers(data.users);
          setShowResults(true);
          setMessage("");
        } else {
          setFilteredUsers([]);
          setMessage("No user exist!");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setFilteredUsers([]);
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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search users..."
        onChange={handleSearch}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : showResults ? (
        <Suggestions users={filteredUsers} />
      ) : null}

      {message?.length > 0 && searchTerm?.length > 0 ? (
        <div>{message}</div>
      ) : null}
    </div>
  );
};

export default Autocomplete;
