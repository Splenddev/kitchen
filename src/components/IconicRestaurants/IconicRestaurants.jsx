/* eslint-disable react/prop-types */
// import { assets } from '../../assets/assets/frontend_assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconicRestaurants.css';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

const IconicRestaurants = ({ image, name, location }) => {
  const navigate = useNavigate();
  const { setRestaurantsView } = useContext(StoreContext);
  const restaurantsHandler = () => {
    console.log('ji');

    setRestaurantsView({ name, image, location });
    navigate('/restaurants');
  };
  return (
    <div
      className="nolo"
      onClick={restaurantsHandler}>
      <div className="image_container">
        <img src={image} />
      </div>
      <div className="other-contemts">
        <h2 onClick={restaurantsHandler}>{name.toUpperCase()}</h2>
        <div className="working-hours-days">
          <p>Working Days: Monday - Sunday</p>
          <p>Opening Time: 9:00am - 8:00pm</p>
        </div>
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default IconicRestaurants;
