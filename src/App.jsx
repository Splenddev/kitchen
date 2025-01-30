import './App.css';
import Footer from './components/Footer/Footer.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart.jsx';
import Points from './pages/Points/Points.jsx';
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { StoreContext } from './context/StoreContext.jsx';
// import FoodDetails from './pages/FoodDetails/FoodDetails.jsx';
import Restaurants from './pages/Restaurants/Restaurants.jsx';

const App = () => {
  const { restaurantsView, alerted, filterIcon, setFilterIcon } =
    useContext(StoreContext);
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
      {location.pathname === '/' ? (
        <div className="app-navbar">
          <NavBar />
        </div>
      ) : (
        <></>
      )}
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/points"
          element={<Points />}
        />
        <Route
          path="/restaurants"
          element={<Restaurants restaurants={restaurantsView} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
