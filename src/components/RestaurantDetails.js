import React from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { IMG_URL } from '../config';
import useRestaurantData from '../utils/useRestaurantData';
const RestaurantDetails = () => {
  let { id } = useParams();

  console.log('id from restro details', id);
  const restaurantInfo = useRestaurantData(id);

  if (Object.keys(restaurantInfo).length === 0) {
    console.log('loadingggg');
    return (
      <div className='shimmerContainer'>
        {Array(6)
          .fill('')
          .map((e, index) => (
            <Shimmer keys={index} />
          ))}
      </div>
    );
  }
  return (
    <>
      <img src={IMG_URL + restaurantInfo.cloudinaryImageId} />
      <h1>{restaurantInfo.name}</h1>
      <h2>{restaurantInfo.locality}</h2>
      <h3>{restaurantInfo.avgRating}</h3>
    </>
  );
};

export default RestaurantDetails;
