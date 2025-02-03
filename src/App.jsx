import './App.css';
import Footer from './components/Footer/Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

// import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import {
  faBell,
  faGifts,
  faHome,
  faQuestionCircle,
  faSpoon,
  faStore,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { StoreContext } from './context/StoreContext.jsx';
import SidePopup from './components/SidePopup/SidePopup.jsx';
// import FoodDetails from './pages/FoodDetails/FoodDetails.jsx';
// import Restaurants from './pages/Restaurants/Restaurants.jsx';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
const App = () => {
  const [menu, setMenu] = useState('home');
  const { alerted, isOpen, openPopup, checked, closePopup } =
    useContext(StoreContext);
  const location = useLocation();
  const home = '/kitchen/';
  // console.log(location.pathname);

  return (
    <>
      <SidePopup />
      {/* {location.pathname === home + 'cart'
        ? setChecked(true)
        : console.log('hello')} */}
      <div
        className={`side-popup-opener ${isOpen ? 'left' : ''}`}
        onClick={() => {
          if (!checked && !isOpen) {
            alert('Please Select A Food To View Details');
          } else {
            !isOpen ? openPopup() : closePopup();
          }
        }}>
        <FontAwesomeIcon
          className={`icon ${!isOpen ? '' : 'forward'}`}
          icon={faBackward}
        />
      </div>
      {location.pathname === home ? (
        <div className="app-navbar">
          <NavBar />
        </div>
      ) : (
        <></>
      )}
      {location.pathname === home ? (
        <ul className="navbar-locations">
          <a href="#navbar">
            <li
              className={menu === 'home' ? 'active' : ''}
              onClick={() => {
                setMenu('home');
              }}>
              <FontAwesomeIcon
                className="icon"
                icon={faHome}
              />
              <span>
                Home
                <div></div>
              </span>
            </li>
          </a>
          <hr />
          <a href="#top-menu-cards">
            <li
              onClick={() => {
                setMenu('Foods');
              }}
              className={menu === 'Foods' ? 'active' : ''}>
              <FontAwesomeIcon
                className="icon"
                icon={faSpoon}
              />
              <span>
                Foods
                <div></div>
              </span>
            </li>
          </a>
          <hr />
          <a href="#restaurants">
            <li
              className={menu === 'restaurants' ? 'active' : ''}
              onClick={() => {
                setMenu('restaurants');
              }}>
              <FontAwesomeIcon
                className="icon"
                icon={faStore}
              />
              <span>Restaurants</span>
            </li>
          </a>
          <hr />
          <li
            className={menu === 'gifts' ? 'active' : ''}
            onClick={() => {
              setMenu('gifts');
            }}>
            <FontAwesomeIcon
              className="icon"
              icon={faGifts}
            />
            <span>
              Gifts
              <div></div>
            </span>
          </li>
          <hr />
          <li
            onClick={() => {
              setMenu('Notifications');
            }}
            className={menu === 'Notifications' ? 'active' : ''}>
            <FontAwesomeIcon
              className="icon"
              icon={faBell}
            />
            <span>
              Notifications
              <div></div>
            </span>
          </li>
          <hr />
          <li
            onClick={() => {
              setMenu('About Us');
            }}
            className={menu === 'About Us' ? 'active' : ''}>
            <a href="#footer">
              <FontAwesomeIcon
                className="icon"
                icon={faQuestionCircle}
              />
              <span>
                About Us
                <div></div>
              </span>
            </a>
          </li>
        </ul>
      ) : (
        <></>
      )}
      <div
        className={`app`}
        id="home">
        <div
          className={isOpen ? 'side-popup-container-wrap' : 'hide'}
          onClick={() => {
            closePopup();
          }}></div>
        {alerted ? (
          <></>
        ) : (
          <div className="go-up">
            <button
              onClick={() => {
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
              }}>
              <FontAwesomeIcon
                className="up-icon"
                icon={faArrowAltCircleUp}
              />
            </button>
          </div>
        )}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
