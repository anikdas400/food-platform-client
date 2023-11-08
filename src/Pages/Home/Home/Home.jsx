import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners";
import About from "../About/About";
import { Link, useLoaderData } from "react-router-dom";
// import FoodCard from "./FoodCard";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const Home = () => {
    const {user}=useContext(AuthContext)
    // const foods = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>The Culinary Cuddles | Home</title>
            </Helmet>

            <Banner></Banner>
            <h2 className="text-4xl font-bold text-center italic text-green-800 mt-12 mb-8 underline">
                Our Food Items
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {/* {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                } */}

               

            </div>
            <div className="text-center mt-5">
                {
                    user?<Link to='/available'><button className="btn btn-success">show all</button></Link>:<Link to='/login'><button className="btn btn-success">show all</button></Link>
                }
                
                
                </div>



            <Partners></Partners>
            <About></About>
        </div>
    );
};

export default Home;