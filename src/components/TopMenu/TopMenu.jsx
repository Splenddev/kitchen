/* eslint-disable react/prop-types */
// import { assets } from '../../assets/assets/frontend_assets/assets';
// import { useNavigate } from 'react-router-dom';
import './TopMenu.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const TopMenu = ({
  name,
  image,
  kitchen,
  description,
  id,
  price,
  kitchenImage,
}) => {
  // const navigate = useNavigate();
  // const [inputCheckBox, setInputCheckBox] = useState(false);
  const {
    addToCart,
    removeFromCart,
    setChecked,
    viewDetailsHandler,
    setFoodView,
  } = useContext(StoreContext);
  // const viewDetailsHandler = () => {
  //   setFoodView({ name, kitchen, description, kitchenImage, id, image });
  //   // window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  //   // navigate('/details');
  //   openPopup();
  //   if (checked) {
  //     setSelectState('Selected');
  //     setIcon(true);
  //     setChecked(false);
  //   } else if (!checked) {
  //     setSelectState('Select Me!');
  //     setIcon(false);
  //     setChecked(false);
  //   }
  // };
  const checkboxHandler = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      setChecked(e.target.checked);
      addToCart(id);
      setFoodView({ name, kitchen, description, id, kitchenImage, image });
    } else if (!e.target.checked) {
      setChecked(false);
      removeFromCart(id);
      setFoodView({});
    }
  };
  return (
    <div className="top-menu-cards">
      <div className="top-menu-card">
        <div className="image-container">
          <img src={image} />
        </div>
        <div className="food-other-contents">
          <div className="ratings--name">
            <h2>{name}</h2>
            <div className="checkbox-wrapper">
              <input
                id={`_checkbox-26 ${id}`}
                // onClick={() =>
                //   checked ? setInputCheckBox(true) : setInputCheckBox(false)
                // }
                type="checkbox"
                onChange={checkboxHandler}
              />
              <label htmlFor={`_checkbox-26 ${id}`}>
                <div className="tick_mark"></div>
              </label>
            </div>
          </div>
          <hr />
          <p className="description">{description}</p>
          <hr />
        </div>
      </div>
      <div className="view-details___price">
        <button
          onClick={() => {
            setFoodView({
              name,
              kitchen,
              description,
              id,
              kitchenImage,
              image,
            });
            viewDetailsHandler();
            // (
            //   name,
            //   kitchen,
            //   description,
            //   kitchenImage,
            //   id,
            //   image
            // )
          }}>
          View Food Details
        </button>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default TopMenu;
