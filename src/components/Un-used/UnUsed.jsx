import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { menu_list } from '../../assets/assets/frontend_assets/assets';
const UnUsed = () => {
  // useState
  const [favorite, setFavorite] = useState(false);
  const [favorite1, setFavorite1] = useState(false);
  const [favorite2, setFavorite2] = useState(false);
  const [favorite3, setFavorite3] = useState(false);
  const [favorite4, setFavorite4] = useState(false);
  return (
    <div>
      <div className="icon-rating-star">
        <FontAwesomeIcon
          className={!favorite ? '' : 'redi'}
          onClick={() => {
            if (!favorite || favorite1 || favorite2 || favorite3 || favorite4) {
              setFavorite(true);
              setFavorite1(false);
              setFavorite2(false);
              setFavorite3(false);
              setFavorite4(false);
            } else {
              setFavorite(false);
            }
          }}
          icon={faStar}
        />
        <FontAwesomeIcon
          className={!favorite1 ? '' : 'redi'}
          onClick={() => {
            if (!favorite1 || favorite2 || favorite3 || favorite4) {
              setFavorite(true);
              setFavorite1(true);
              setFavorite2(false);
              setFavorite3(false);
              setFavorite4(false);
            } else {
              setFavorite1(false);
              setFavorite(false);
            }
          }}
          icon={faStar}
        />
        <FontAwesomeIcon
          className={!favorite2 ? '' : 'redi'}
          onClick={() => {
            if (!favorite2 || favorite3) {
              setFavorite(true);
              setFavorite1(true);
              setFavorite2(true);
              setFavorite3(false);
            } else {
              setFavorite(false);
              setFavorite1(false);
              setFavorite2(false);
            }
          }}
          icon={faStar}
        />
        <FontAwesomeIcon
          className={!favorite3 ? '' : 'redi'}
          onClick={() => {
            if (!favorite3 || favorite4) {
              setFavorite(true);
              setFavorite1(true);
              setFavorite2(true);
              setFavorite3(true);
              setFavorite4(false);
            } else {
              setFavorite(false);
              setFavorite1(false);
              setFavorite2(false);
              setFavorite3(false);
            }
          }}
          icon={faStar}
        />
        <FontAwesomeIcon
          className={!favorite4 ? '' : 'redi'}
          onClick={() => {
            if (!favorite4) {
              setFavorite(true);
              setFavorite1(true);
              setFavorite2(true);
              setFavorite3(true);
              setFavorite4(true);
            } else {
              setFavorite(false);
              setFavorite1(false);
              setFavorite2(false);
              setFavorite3(false);
              setFavorite4(false);
            }
          }}
          icon={faStar}
        />
      </div>

      <div className="menu-filter-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="menu-filter">
              <img src={item.menu_image} />
              <div>{item.menu_name}</div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UnUsed;
