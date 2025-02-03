import Header from '../../components/Header/Header';
import KitchenMenu from '../../components/KitchenMenu/KitchenMenu';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <KitchenMenu />
    </div>
  );
};

export default Home;
