/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { food_list } from '../assets/assets/frontend_assets/assets';
// import { useLocation, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // useState
  // useState
  const [cartItems, setCartItems] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(false);
  const [selectState, setSelectState] = useState('Select Me!');
  const [checked, setChecked] = useState(false);
  const [foodView, setFoodView] = useState({});
  const [restaurantsView, setRestaurantsView] = useState({});
  const [alerted, setAlerted] = useState(false);
  const [filterIcon, setFilterIcon] = useState(false);
  //  let alerted = false;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100 && !alerted) {
      // alert('Top page');
      setAlerted(false);
    } else if (window.scrollY < 100) {
      setAlerted(true);
    }
  });

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const listToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] }));
    }
  };

  function openPopup() {
    setIsOpen(true);
  }
  function closePopup() {
    setIsOpen(false);
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const removeAllFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - prev[itemId],
    }));
  };
  const setCartToZero = () => {
    setCartItems({});
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }

    return totalAmount;
  };
  const getTotalCartQuantity = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += cartItems[item];
      }
    }

    return totalAmount;
  };
  const viewDetailsHandler = () => {
    // setFoodView({ name, kitchen, description, id, kitchenImage, image });
    // window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    // navigate('/details');
    openPopup();
    if (checked) {
      setSelectState('Selected');
      setIcon(true);
      setChecked(false);
    } else if (!checked) {
      setSelectState('Select Me!');
      setIcon(false);
      setChecked(false);
    }
  };
  const contextValue = {
    food_list,
    addToCart,
    listToCart,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    removeFromCart,
    setCartToZero,
    removeAllFromCart,
    alerted,
    checked,
    setChecked,
    setIsOpen,
    viewDetailsHandler,
    isOpen,
    closePopup,
    openPopup,
    foodView,
    setFoodView,
    restaurantsView,
    setRestaurantsView,
    filterIcon,
    setFilterIcon,

    selectState,
    icon,
    setIcon,
    setSelectState,
    // prevPage,nextPage,
    getTotalCartQuantity,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
