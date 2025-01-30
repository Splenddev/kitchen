import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './AppTest.css';
import NavbarMe from './NavbarMe';
import Title from './Title';
import OrderMe from './orderMe';
// import orderMe from './orderMe';

const AppTest = () => {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <div className="app-test">
      {location.pathname === '/' ? (
        <div className="navbar">
          <NavbarMe />
        </div>
      ) : (
        <></>
      )}
      <Link to="/order">
        <button>Order</button>
      </Link>
      {location.pathname !== '/' ? (
        <Link to="/">
          <button>Home</button>
        </Link>
      ) : (
        <></>
      )}
      <Routes>
        <Route
          path="/"
          element={<Title />}
        />
        <Route
          path="/order"
          element={<OrderMe />}
        />
      </Routes>
    </div>
  );
};

export default AppTest;
