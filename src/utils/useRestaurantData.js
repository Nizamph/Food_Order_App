import { useState, useEffect } from 'react';

const useRestaurantData = (id) => {
  const [restaurantInfo, setRestaurantData] = useState({});
  useEffect(() => {
    getRestaurantData();
  }, []);
  // console.log(restaurantInfo);
  const getRestaurantData = async () => {
    console.log('id from hook', id);
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=${id}`
    );

    let restaurantData = await data.json();
    console.log('gotten restaurantData', restaurantData);
    setRestaurantData(restaurantData?.data?.cards[0]?.card?.card?.info);
  };
  console.log('this is restaurant info', restaurantInfo);
  return restaurantInfo;
};

export default useRestaurantData;
