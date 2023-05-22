import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      AboutUs
      <Link to='/about/profile'>My profile</Link>
      <Outlet />
    </div>
  );
};

export default AboutUs;
