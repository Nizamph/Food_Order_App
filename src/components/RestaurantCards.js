import { IMG_URL } from '../config.js';

const ReastaurantCards = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className='m-2 p-2 pl-3 h-80 w-72 border shadow-md '>
      <img
        src={IMG_URL + cloudinaryImageId}
        alt='food'
        className='h-52 w-64 object-cover'
      />
      <h3 className='font-bold'>{name}</h3>
      <h4 className=' truncate '>{cuisines.join(',')}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default ReastaurantCards;
