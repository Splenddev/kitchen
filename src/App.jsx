import './App.css';
import Footer from './components/Footer/Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

// import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { StoreContext } from './context/StoreContext.jsx';
// import FoodDetails from './pages/FoodDetails/FoodDetails.jsx';
// import Restaurants from './pages/Restaurants/Restaurants.jsx';

const App = () => {
  const { alerted, filterIcon, setFilterIcon } = useContext(StoreContext);
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <div
      onClick={() => {
        if (filterIcon) {
          setFilterIcon(false);
        }
      }}
      className="app"
      id="home">
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
      {location.pathname === '/kitchen/' ? (
        <div className="app-navbar">
          <NavBar />
        </div>
      ) : (
        <></>
      )}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
