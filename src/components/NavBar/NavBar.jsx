import './NavBar.css';
import { assets } from '../../assets/assets/frontend_assets/assets.js';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';

const NavBar = () => {
  // const
  // useState
  // const [menuHam, setMenuHam] = useState(false);
  // const [man, setMan] = useState(false);
  // const [menuShow, setMenuShow] = useState(false);
  const [login, setLogin] = useState('');
  const { getTotalCartAmount, getTotalCartQuantity } = useContext(StoreContext);

  // function test() {
  //   if (!menuShow) {
  //     setMenuShow(true);
  //     // setMan(true);s
  //   } else setMenuShow(false);
  // }
  // useEffect(() => {
  //   const media = window.matchMedia('(max-width:816px)');
  //   setMenuHam(media.matches);
  //   const handle = (e) => {
  //     setMenuHam(e.matches);
  //   };
  //   media.addEventListener('change', handle);
  //   return () => {
  //     media.removeEventListener('change', handle);
  //   };

  //   // if (media) {
  //   //   setMenuHam(true);
  //   // } else {
  //   //   setMenuHam(false);
  //   // }
  //   // console.log(media);
  // }, []);
  return (
    <div
      className="main-nav"
      id="navbar">
      <div className="navbar">
        <div className="logo-container">
          <Link to="/kitchen/">
            <img
              className="logo"
              src={assets.logo}
            />
          </Link>
          <p>
            <span>Kitchen</span>
            <span>Connect.com</span>
          </p>
        </div>
        <div className="navbar-sub-locations">
          <div className="basket-container">
            <p>
              <Link to="/kitchen/cart">
                {getTotalCartAmount() != 0 ? (
                  <span className="dot">{getTotalCartQuantity()}</span>
                ) : (
                  <></>
                )}
                <FontAwesomeIcon
                  className="icon"
                  icon={faCartShopping}
                />
              </Link>
            </p>
          </div>
          <button>
            <div
              className="user-icon"
              onClick={() => {
                login !== 'login' ? setLogin('login') : setLogin('menu');
              }}>
              <FontAwesomeIcon
                className="icon"
                icon={faUser}
              />
            </div>
            {login === 'login' ? <span>Sign In</span> : <></>}
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
