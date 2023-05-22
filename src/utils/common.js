export const filteredData = (allRestaurantData, input) => {
  let filteredRestaurantData = allRestaurantData.filter((restr) => {
    return restr.data.name.toLowerCase().includes(input.toLowerCase());
  });
  console.log(filteredData);
  return filteredRestaurantData;
};
