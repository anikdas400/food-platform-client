import { useLoaderData } from "react-router-dom";


const Details = () => {
    const food = useLoaderData()
    const { _id, foodn, quantity, photo, date, description, location, imgUrl, dname }= food
    return (
        <div>
            <h2>details{dname}</h2>
        </div>
    );
};

export default Details;