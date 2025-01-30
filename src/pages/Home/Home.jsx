import { useContext, useState } from 'react';
import Header from '../../components/Header/Header';
import KitchenMenu from '../../components/KitchenMenu/KitchenMenu';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faGifts,
  faHome,
  faQuestionCircle,
  faSpoon,
  faStore,
} from '@fortawesome/free-solid-svg-icons';

import { StoreContext } from '../../context/StoreContext';
import FoodDetails from '../FoodDetails/FoodDetails';
// import { Link } from 'react-router-dom';

const Home = () => {
  const [menu, setMenu] = useState('home');

  const { filterIcon, setFilterIcon, isOpen, closePopup, foodView } =
    useContext(StoreContext);
  return (
    <div
      className="home"
      onClick={() => {
        if (filterIcon) {
          setFilterIcon(false);
        }
      }}>
      {/* <button onClick={openPopup}>PopUp</button> */}
      <div className={`side-popup ${isOpen ? 'open' : ''}`}>
        <button
          className="toogle-btn"
          onClick={closePopup}>
          Close PopUp
        </button>
        <div className="popup-contents">
          <FoodDetails foodView={foodView} />
        </div>
      </div>
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
      <Header />

      <KitchenMenu />
    </div>
  );
};

export default Home;
