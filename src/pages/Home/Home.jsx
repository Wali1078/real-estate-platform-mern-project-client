import Advertisement from "../../components/Advertisement/Advertisement";
import Banner from "../../components/Banner/Banner";
import MyContainer from "../../components/Shared/MyContainer";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <MyContainer>
      <Banner />
      <Advertisement />
      <Footer />
    </MyContainer>
  );
};

export default Home;
