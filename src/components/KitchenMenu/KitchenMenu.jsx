import restaurants from '../../assets/assets/frontend_assets/restaurants';
import IconicRestaurants from '../IconicRestaurants/IconicRestaurants';
import Title from '../Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faClose,
  // faClosedCaptioning,
  faFilter,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import './KitchenMenu.css';
import TopMenu from '../TopMenu/TopMenu';
import {
  food_list,
  // menu_list,
} from '../../assets/assets/frontend_assets/assets';
import { useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const KitchenMenu = () => {
  const [searchedText, setSearchedText] = useState('');
  const [kitchen, setKitchen] = useState('all');
  // const [placeholder, setPlaceholder] = useState(
  //   `Search your favorite meals here`
  // );
  // const [noFood, setNoFood] = useState(false);
  // const [filterIcon, setFilterIcon] = useState(false);
  const filterSearch = 'item.filterSearch';
  // const [error, setError] = useState(false);
  // const [egg, setEgg] = useState(false);
  // const [inputState, setInputState] = useState(false);
  // const [showingResultsFor, setShowingResultsFor] = useState(false);
  const [NoSearchedText, setNoSearchedText] = useState('');
  const [filterKitchen, setFilterKitchen] = useState('Filter Kitchen');
  const [foodMenuDummy, setFoodMenuDummy] = useState(food_list);
  const { filterIcon, setFilterIcon } = useContext(StoreContext);

  function searchHandler(e) {
    setSearchedText(e.target.value);

    if (e.target.value.length === 0) {
      // setShowingResultsFor(false);
      setNoSearchedText(
        'Please type the name of the food you want to search for.'
      );
      // setNoFood(false);
    } else {
      setNoSearchedText('');
    }
    // console.log(foodMenuDummy);
    if (foodMenuDummy.length === 0) {
      console.log('error');
    }
    // setNoFood(true);
    // } else setNoFood(false);
  }

  return (
    <div className="explore-kitchen">
      <Title
        item="top-menu-cards"
        title="Top Foods for you"
        subTitle="Choose from varieties of foods from kitchens all over the campus."
      />

      <div className="search-icon">
        <div className="search-input">
          <input
            type="text"
            value={searchedText}
            onChange={searchHandler}
            placeholder={`Search favorite meals from${
              filterKitchen.toLowerCase() === 'all' ||
              filterKitchen.toLowerCase() === 'filter kitchen'
                ? ' all'
                : ' ' + filterKitchen
            } kitchen`}
          />
          {/* {egg ? <span>close the filter menu</span> : <></>} */}
          <p
          // onClick={filterHandler}
          >
            <FontAwesomeIcon
              className="icon"
              icon={faSearch}
            />
          </p>
        </div>
        <div className="filter-handler">
          <div className="content">
            <div
              className="icon__title"
              onClick={() => {
                !filterIcon ? setFilterIcon(true) : setFilterIcon(false);
                // setInputState(true);
                // setSearchedText('');
                // setFoodMenuDummy(food_list);
                // setShowingResultsFor(false);
                // setPlaceholder('');
              }}>
              <FontAwesomeIcon
                className="filter-kitchen-icon"
                icon={faFilter}
              />
              <span className="filter-kitchen-title">
                <span>{filterKitchen}</span>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={
                    filterIcon ? 'arrow-down-icon rotate' : 'arrow-down-icon'
                  }
                />
              </span>
            </div>
          </div>
          <ul
            // onChange={selectHandler}
            className={
              filterIcon ? 'kitchen-category-ul ' : 'kitchen-category-ul hide'
            }>
            <li
              className={kitchen === 'all' ? 'active' : ''}
              onClick={() => {
                // setFoodKitchenDummy(foodMenuDummy);
                // console.log(foodKitchenDummy);
                setKitchen('all');
                setFilterKitchen('All');
                setFoodMenuDummy(
                  food_list.filter((kitchen) => {
                    return kitchen.all.toLowerCase() === 'all';
                  })
                );
              }}>
              All
            </li>
            {/* <p>{foodMenuDummy[0].kitchen}</p> */}
            <li
              className={kitchen === 'arena' ? 'active' : ''}
              onClick={() => {
                setKitchen('arena');
                setFilterKitchen('Arena');
                // console.log(foodMenuDummy);
                setFoodMenuDummy(
                  food_list.filter((kitchen) => {
                    return kitchen.kitchen.toLowerCase() === 'arena';
                  })
                );
                // setFoodKitchenDummy(foodMenuDummy);
                // console.log(foodKitchenDummy);
                console.log(foodMenuDummy.length);
              }}>
              Arena
            </li>
            <li
              className={kitchen === 'iya afusat' ? 'active' : ''}
              onClick={() => {
                // setFoodKitchenDummy(foodMenuDummy);
                // console.log(foodKitchenDummy);
                setKitchen('iya afusat');
                setFilterKitchen('Iya Afusat');
                setFoodMenuDummy(
                  food_list.filter((kitchen) => {
                    return kitchen.kitchen.toLowerCase() === 'iya afusat';
                  })
                );
                console.log(foodMenuDummy.length);
              }}>
              Iya Afusat
            </li>
            <li
              className={kitchen === 'tasty munch' ? 'active' : ''}
              onClick={() => {
                // setFoodKitchenDummy(foodMenuDummy);
                // console.log(foodKitchenDummy);
                setKitchen('tasty munch');
                setFilterKitchen('Tasty Munch');
                setFoodMenuDummy(
                  food_list.filter((kitchen) => {
                    return kitchen.kitchen.toLowerCase() === 'tasty munch';
                  })
                );
                console.log(foodMenuDummy.length);
              }}>
              Tasty Munch
            </li>
            <li
              className={kitchen === 'krafty' ? 'active' : ''}
              onClick={() => {
                // setFoodKitchenDummy(foodMenuDummy);
                // console.log(foodKitchenDummy);
                setKitchen('krafty');
                setFilterKitchen('Krafty');
                setFoodMenuDummy(
                  food_list.filter((kitchen) => {
                    return kitchen.kitchen.toLowerCase() === 'krafty';
                  })
                );
                console.log(foodMenuDummy.length);
              }}>
              Krafty
            </li>
            <li
              className={kitchen === 'bissy joy' ? 'active' : ''}
              onClick={() => {
                // setFoodKitchenDummy(foodMenuDummy);
                console.log(foodMenuDummy.length);
                setKitchen('bissy joy');
                setFilterKitchen('Bissy Joy');
                setFoodMenuDummy(
                  food_list.filter((kitchen) => {
                    return kitchen.kitchen.toLowerCase() === 'bissy joy';
                  })
                );
              }}>
              Bissy Joy
            </li>
          </ul>
        </div>
      </div>
      <div className="kitchen-category-title"></div>
      <p className="no-searched-text">{NoSearchedText}</p>

      <div className="restaurants_cards menu-card">
        {foodMenuDummy.length === 0 ? (
          <div className="error-popup">
            <p className="error-message">
              There is no food to display. Please try another food name and
              Kitchen
            </p>
            <FontAwesomeIcon
              icon={faClose}
              className="close"
              onClick={() => {
                // setNoFood(false);
                setFoodMenuDummy(food_list);
              }}
            />
          </div>
        ) : (
          foodMenuDummy
            .filter((item) => {
              return searchedText.toLowerCase() === ''
                ? item
                : filterSearch.toLowerCase().includes(searchedText);
            })
            .map((item) => {
              return (
                <TopMenu
                  key={item._id}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  ratings={item.category}
                  kitchen={item.kitchen}
                  kitchenImage={item.k_image}
                  description={item.description}
                />
              );
            })
        )}
      </div>
      <Title
        item="restaurants"
        title="ICONIC Restaurants"
        subTitle="Locally made legendary foods delivered to your door."
      />
      <div className="restaurants_cards">
        {restaurants.map((item, index) => {
          return (
            <IconicRestaurants
              key={index}
              image={item.image}
              name={item.name}
              ratings={item.ratings}
              location={item.location}
            />
          );
        })}
      </div>
    </div>
  );
};

export default KitchenMenu;
