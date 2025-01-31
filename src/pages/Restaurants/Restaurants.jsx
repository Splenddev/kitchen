import './Restaurants.css';

import BackNav from '../../components/BackNav/BackNav';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Restaurants = () => {
  const { restaurantsView } = useContext(StoreContext);
  return (
    <>
      <BackNav goto={'home'} />
      <div className="restaurants-contents">{restaurantsView.name}</div>
    </>
  );
};

export default Restaurants;
