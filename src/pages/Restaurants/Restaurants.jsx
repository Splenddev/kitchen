/* eslint-disable react/prop-types */
import './Restaurants.css';

import BackNav from '../../components/BackNav/BackNav';

const Restaurants = ({ restaurants }) => {
  return (
    <>
      <BackNav goto={'home'} />
      <div className="restaurants-contents">{restaurants.name}</div>
    </>
  );
};

export default Restaurants;
