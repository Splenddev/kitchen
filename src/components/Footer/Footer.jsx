import { useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets/frontend_assets/assets';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  return (
    <div
      className="footer"
      id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="logo-company-name">
            <img src={assets.logo} />
            <p>KitchenConnect.com</p>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <div className="footer-content-social-icon">
            <img src={assets.linkedin_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.facebook_icon} />
          </div>
        </div>
        <div className="footer-content-right">
          <div className="footer-content-right-left">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+234-7083-484-603</li>
              <li>michaelnwode023@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright 2024 @ Tomato.com - All Rights Reserved.
      </p>
      <span
        onClick={() => {
          console.log(location.pathname);
        }}
        className="copyright">
        The Dev Teams
      </span>
    </div>
  );
};

export default Footer;
