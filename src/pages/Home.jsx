import React from 'react';
import Todo from '../components/Todo';

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-4 bg-rose-900 text-white p-4">
        My Todo App
      </h1>
      <Todo />
    </div>
  );
};

export default Home;
