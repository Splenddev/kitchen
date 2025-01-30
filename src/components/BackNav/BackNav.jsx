import { useContext } from 'react';
import './BackNav.css';
import { StoreContext } from '../../context/StoreContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong,
  faCartShopping,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const BackNav = ({ goto, other }) => {
  const { prevPage, getTotalCartAmount, getTotalCartQuantity, closePopup } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="back-nav">
      {goto === 'home' ? (
        <FontAwesomeIcon
          icon={faClose}
          className="icon"
          onClick={closePopup}
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => {
            prevPage();
          }}
          className="icons"
          icon={faArrowLeftLong}
        />
      )}
      <h2>KitchenConnect.com</h2>
      {other === 'cart' ? (
        <p
          onClick={() => {
            navigate('/cart');
            closePopup();
          }}>
          <FontAwesomeIcon
            className="icon"
            icon={faCartShopping}
          />
          {getTotalCartAmount() != 0 ? (
            <span className="dot">{getTotalCartQuantity()}</span>
          ) : (
            <></>
          )}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BackNav;
