// src/hooks/useUsers.js
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = useCallback(async () => {
    try {
      const response = await axios.get('https://randomuser.me/api');
      const newUser = response.data.results[0];
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setCurrentIndex((prevIndex) => prevIndex === users.length ? prevIndex + 1 : prevIndex);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }, [users.length]);

  const nextUser = () => {
    if (currentIndex === users.length - 1) {
      fetchUser();
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevUser = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return {
    users,
    currentUser: users[currentIndex],
    nextUser,
    prevUser
  };
};

export default useUsers;
