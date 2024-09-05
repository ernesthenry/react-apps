import { useState, useEffect, useCallback } from 'react';

const useUserFetcher = () => {
  const [users, setUsers] = useState([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  // Fetch a new user from the API
  const fetchUser = useCallback(async () => {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    const newUser = data.results[0];
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setCurrentUserIndex(users.length);
  }, [users]);

  // Move to the next user
  const nextUser = useCallback(() => {
    if (currentUserIndex < users.length - 1) {
      setCurrentUserIndex((prevIndex) => prevIndex + 1);
    } else {
      fetchUser();
    }
  }, [currentUserIndex, users.length, fetchUser]);

  // Move to the previous user
  const prevUser = useCallback(() => {
    if (currentUserIndex > 0) {
      setCurrentUserIndex((prevIndex) => prevIndex - 1);
    }
  }, [currentUserIndex]);

  // Fetch the first user on mount
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return {
    users,
    currentUser: users[currentUserIndex],
    nextUser,
    prevUser,
  };
};

export default useUserFetcher;
