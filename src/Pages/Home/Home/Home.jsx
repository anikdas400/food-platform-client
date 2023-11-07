import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners";
import About from "../About/About";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The Culinary Cuddles | Home</title>
            </Helmet>
            <Banner></Banner>
            <Partners></Partners>
            <About></About>
        </div>
    );
};

export default Home;