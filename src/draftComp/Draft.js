import React from 'react';

const Draft = (another) => {
  //   console.log(another);
  return (
    <div className="text-2xl mt-5">
      <h2 className="bg-fuchsia-400 text-black font-bold">My Address</h2>
      <div className="italic font-bold text-justify border-2 bg-lime-300 w-fit mx-auto mt-4 p-4">
        <p>Name: {another.addr.name}</p>
        <p>Village: {another.addr.village}</p>
        <p>Post: {another.addr.post}</p>
        <p>Police Station: {another.addr.ps}</p>
        <p>District: {another.addr.dist}</p>
        <p>Mobile: {another.addr.mob}</p>
      </div>
    </div>
  );
};

export default Draft;
