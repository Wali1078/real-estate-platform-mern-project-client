import Advertisement from "../../components/Home/Advertisement/Advertisement";
import Banner from "../../components/Home/Banner/Banner";
import MyContainer from "../../components/Shared/MyContainer";
import Footer from "../../components/Home/Footer/Footer";
import Review from "../../components/Home/Review/Review";
import Accordion from "../../components/Home/Accordion/Accordion";
import GetUpdate from "../../components/Home/GetUpdate/GetUpdate";
import ContactUs from "../../components/Home/ContactUs/ContactUs";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    <MyContainer>
      <Helmet>
        <title>Dream 🏚️ | Home</title>
      </Helmet>
      <Banner />
      <Advertisement />
      <Review/>
      <GetUpdate/>
      <Accordion/>
      <ContactUs/>
      <Footer />
    </MyContainer>
  );
};

export default Home;
