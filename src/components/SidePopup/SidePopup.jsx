import { useContext } from 'react';
import './SidePopup.css';
import { StoreContext } from '../../context/StoreContext';
import FoodDetails from '../../pages/FoodDetails/FoodDetails';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidePopup = () => {
  const {
    isOpen,
    foodView,
    //  setIsOpen, getTotalCartQuantity
  } = useContext(StoreContext);
  return (
    <div className={`side-popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-contents">
        <FoodDetails foodView={foodView} />
      </div>
    </div>
  );
};

export default SidePopup;
