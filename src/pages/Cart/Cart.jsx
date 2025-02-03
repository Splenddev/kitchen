import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClose,
  faMinusCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import BackNav from '../../components/BackNav/BackNav';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    getTotalCartAmount,
    viewDetailsHandler,
    getTotalCartQuantity,
    setCartToZero,
  } = useContext(StoreContext);

  const [paymentButton, setPaymentButton] = useState(true);
  const assetsMade = food_list;
  const proceedHandler = () => {
    if (getTotalCartAmount() === 0) {
      return setPaymentButton(false);
    }
    paymentButton
      ? alert('Order Request Submitted')
      : alert('Cant Proceed. Check the Informations and try again');
  };
  // const navigate = useNavigate();
  // const viewDetailsHandler = (name, kitchen, id, description) => {
  //   setFoodView({ name, kitchen, description, id });
  //   window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  //   navigate('/details');
  //   if (checked) {
  //     setSelectState('Selected');
  //     setIcon(true);
  //   } else {
  //     setSelectState('Select Me!');
  //     setIcon(false);
  //   }
  // };

  return (
    <>
      <BackNav goto={'back'} />

      <div className="cart-options">
        <button
          className={getTotalCartAmount() === 0 ? 'no-product' : ''}
          onClick={setCartToZero}>
          Remove All From Cart
        </button>
        <button
          className={
            getTotalCartAmount() === 0 ? 'no-product' : 'total-cart-quantity'
          }>
          Total Food Selected: <h5>{getTotalCartQuantity()}</h5>
        </button>
      </div>
      {getTotalCartAmount() === 0 ? (
        <p className="no-food-to-display">
          There is no food here. Please select food from the{' '}
          <NavLink to={'/kitchen/'}>homepage</NavLink>
        </p>
      ) : (
        <div className="cart-foods">
          {assetsMade.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div
                  className="cart-items"
                  key={index}>
                  <div className="cart-items-left">
                    <img src={item.image} />
                  </div>
                  <div className="cart-items-right">
                    <div className="cart-items-right-top">
                      <div className="name-kitchen">
                        <p>{item.name}</p>
                        <hr />
                        <p className="last-child">{item.kitchen}</p>
                      </div>
                      <FontAwesomeIcon
                        onClick={() => {
                          removeAllFromCart(item._id);
                        }}
                        className="cross"
                        icon={faClose}
                      />
                    </div>
                    <div className="cart-items-right-middle">
                      <button
                        className="btn"
                        onClick={() => {
                          viewDetailsHandler(
                            item.name,
                            item.kitchen,
                            item.description,
                            item._id,
                            item.k_image,
                            item.image
                          );
                        }}>
                        View Food Details
                      </button>
                    </div>
                    <div className="cart-items-right-bottom">
                      <div className="quantity">
                        <FontAwesomeIcon
                          className="icons"
                          icon={faMinusCircle}
                          onClick={() => {
                            removeFromCart(item._id);
                          }}
                        />

                        <p>{cartItems[item._id]}</p>
                        <FontAwesomeIcon
                          onClick={() => {
                            addToCart(item._id);
                          }}
                          className="icons"
                          icon={faPlusCircle}
                        />
                      </div>
                      <p>Price: ${item.price}</p>
                      <div className="total">
                        <p>Total Amount: ${item.price * cartItems[item._id]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}

      <div className="cart">
        <div className="customer-details">
          <p>What is your Delivery Area?</p>
          <div className="address-select">
            <select>
              <option
                disabled
                selected
                value="Select Area">
                Select Area
              </option>
              <option value="Inside Campus">Inside Campus</option>
              <option value="Millionaire Hostel Side">
                Millionaire Hostel Side
              </option>
              <option value="Safari Westend">Safari Westend</option>
              <option value="Winners Church Side">Winners Church Side</option>
              <option value="Yidi Road Side ">Yidi Road Side </option>
              <option value="Market Side">Market Side</option>
              <option value="School Road">School Road</option>
              <option value="Elemere">Elemere</option>
              <option value="Inside Safari">Inside Safari</option>
              <option value="Pando Lion">Pando Lion</option>
              <option value="Amina Castle">Amina Castle</option>
              <option value="Westend 1">Westend 1</option>
              <option value="Westend 2">Westend 2</option>
            </select>
          </div>
          <p>What is your delivery address?</p>
          <textarea></textarea>
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Food Transaction Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total Amount</b>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </b>
              </div>
            </div>
            <button
              className={getTotalCartAmount() === 0 ? 'no-product' : ''}
              onClick={
                proceedHandler
                // navigate('/order');
              }>
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
