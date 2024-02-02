import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
      <Link to="/users">View Users</Link>
    </>
  );
};
