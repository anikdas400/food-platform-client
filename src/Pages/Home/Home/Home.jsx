import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners";
import About from "../About/About";
import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";


const Home = () => {
    const foods = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>The Culinary Cuddles | Home</title>
            </Helmet>
            
            <Banner></Banner>
            <h2 className="text-5xl font-extrabold">
                food items:{foods.length}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {
                foods.map(food=><FoodCard key={food._id} food={food}></FoodCard>)
            }
            </div>
            
            <Partners></Partners>
            <About></About>
        </div>
    );
};

export default Home;