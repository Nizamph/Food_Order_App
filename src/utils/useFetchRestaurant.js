import { useState, useEffect } from 'react';

const useFetchRestaurant = () => {
  const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
  const [allRestaurantData, setAllRestaurantData] = useState([]);
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  async function fetchRestaurantData() {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING'
      );
      const response = await data.json();
      console.log('response', response);
      setAllRestaurantData(response.data.cards[2].data.data.cards);
      setFilteredRestaurantData(response.data.cards[2].data.data.cards);
    } catch (err) {
      console.log(err);
    }
  }

  return [filteredRestaurantData, allRestaurantData, setFilteredRestaurantData];
};

export default useFetchRestaurant;
