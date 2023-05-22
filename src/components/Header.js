import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const onSubmitHandler = () => {
    navigate('/login', { replace: true });
  };
  return (
    <div className='flex justify-between items-center shadow-md'>
      <img
        alt='logo'
        src='https://play-lh.googleusercontent.com/51jQgQRTgQEj9dS0v8GVvLO5GgZJSffmtG_D9zqc1J0P3BkFV4Scj8WN0DDkCWYTv2I'
        className='h-20'
      />
      <ul className='flex justify-between '>
        <Link>
          <li className='mx-4 font-bold'>Home</li>
        </Link>
        <Link to='/about'>
          <li className='mx-4 font-bold'>About us</li>
        </Link>
        <Link to='/cart'>
          <li className='mx-4 font-bold'>cart</li>
        </Link>
      </ul>

      <div className='profile'>
        {location.pathname === '/login' ? (
          ''
        ) : (
          <button onClick={onSubmitHandler}>logout</button>
        )}
      </div>
    </div>
  );
};
export default Header;
