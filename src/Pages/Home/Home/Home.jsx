import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Teams from "../Teams/Teams";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            <Teams></Teams>
        </div>
    );
};

export default Home;