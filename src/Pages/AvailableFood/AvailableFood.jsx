import { useLoaderData } from "react-router-dom";

import AvailCard from "./AvailCard";


const AvailableFood = () => {
    const foods = useLoaderData()
    return (
        <div>
            <h2 className="text-4xl font-bold text-center italic text-green-800 mt-12 mb-8 underline">
                Our Food Items
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    foods.map(food => <AvailCard key={food._id} food={food}></AvailCard>)
                }

               

            </div>
        </div>
    );
};

export default AvailableFood;