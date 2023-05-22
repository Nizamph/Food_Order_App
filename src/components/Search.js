import React from 'react';
import { useState } from 'react';
import { restaurantData } from '../config.js';
const Search = ({ type, onChange, onClick, value }) => {
  return (
    <div className='mt-3 p-2 min-w-fit flex justify-center '>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className='border ring-1 '
      />
      <button
        onClick={onClick}
        className='m-1 p-1 bg-blue-950 text-white  rounded-md'>
        Submit
      </button>
    </div>
  );
};

export default Search;
