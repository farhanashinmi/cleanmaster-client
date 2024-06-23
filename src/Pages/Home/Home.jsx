import Navbar from "../../SharedPages/Navbar";
import AboutHome from "../About/AboutHome";
import Banner from "./Banner";
import HomeService from "./HomeService";



const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <HomeService></HomeService>
           <AboutHome></AboutHome>
        </div>
    );
};

export default Home;