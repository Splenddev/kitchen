/* eslint-disable react/prop-types */
import BackNav from '../../components/BackNav/BackNav';
import './FoodDetails.css';
// import image from '../../../public/header_5.jpg';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faHandPointer,
  // faStar,
} from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../context/StoreContext';

const FoodDetails = () => {
  // useState
  // const [cartIcon, setCartIcon] = useState('cart');
  const location = useLocation();
  const {
    addToCart,
    removeFromCart,
    icon,
    foodView,
    setIcon,
    selectState,
    setSelectState,
  } = useContext(StoreContext);
  const rating = (28 + parseInt(foodView.id)) / 10;
  // console.log(checked);

  return (
    <>
      <BackNav
        goto={'home'}
        other={location.pathname === '/cart' ? '' : 'cart'}
      />
      <div
        style={{ '--rating': rating }}
        className="food-details-header">
        <div className="overlay-bg"></div>
        <img src={foodView.image} />
        <div className="food-details-header-contents">
          <p className="compliment-tag">
            Good Food Offers A Great Smile And Brings People Together with
            Lasting Joy
          </p>

          <p className="sub-tag">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="food-details">
        <div className="kitchen-image__food-name">
          <div className="kitchen-image-container">
            <img src={foodView.kitchenImage} />
          </div>
          <div className="food-name__ratings__reviews">
            <div className="left">
              <p className="name">{foodView.name}</p>
              <p className="kitchen">{foodView.kitchen}</p>
              <p className="rating_stats">
                {(28 + parseInt(foodView.id)) / 10}{' '}
                <div className="star-container">
                  <div className="meter"></div>
                </div>
                <span>(1227 reviews)</span>
              </p>
            </div>
            <div className="right">
              <button
                onClick={() => {
                  if (selectState === 'Select Me!' && !icon) {
                    setIcon(true);
                    setSelectState('Selected');
                    // setChecked(true);
                    addToCart(foodView.id);
                  } else {
                    setIcon(false);
                    // setChecked(false);
                    removeFromCart(foodView.id);
                    setSelectState('Select Me!');
                  }
                }}
                className={`select-food ${
                  selectState === 'Selected' ? 'selected' : 'not-selected'
                }`}>
                {selectState}
                {icon ? (
                  <FontAwesomeIcon
                    className="icon"
                    icon={faCheck}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="icon pointer"
                    icon={faHandPointer}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
