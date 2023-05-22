import ReastaurantCards from './RestaurantCards';
import { restaurantData } from '../config.js';
import { filteredData } from '../utils/common';
import Search from './Search';
import { useState } from 'react';
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useFetchRestaurant from '../utils/useFetchRestaurant';
const Body = (props) => {
  const [input, setInput] = useState('');

  const [filteredRestaurantData, allRestaurantData, setFilteredRestaurantData] =
    useFetchRestaurant();
  console.log('filtered Restaurant Data us here', filteredRestaurantData);
  console.log('filtered Restaurant Data us here', allRestaurantData);
  let dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let shimmerComponent = dataArr.map((item) => {
    return <Shimmer key={item} />;
  });

  if (allRestaurantData.length === 0) {
    return (
      <div className='flex justify-between gap-x-8 gap-y-8 flex-wrap'>
        {shimmerComponent}
      </div>
    );
  }
  return (
    <>
      {
        <Search
          onChange={(e) => setInput(e.target.value)}
          onClick={() => {
            let data = filteredData(allRestaurantData, input);
            setFilteredRestaurantData(data);
          }}
          type={'text'}
          value={input}
        />
      }
      <div className='flex justify-between flex-wrap'>
        {filteredRestaurantData?.length === 0 ? (
          <h1>No Hotels found</h1>
        ) : (
          filteredRestaurantData?.map((restData) => {
            return (
              <Link
                to={`/restaurantDetails/${restData.data.id}`}
                key={restData.data.id}>
                <ReastaurantCards {...restData.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
