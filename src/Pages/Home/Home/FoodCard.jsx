import { Link } from "react-router-dom";


const FoodCard = ({ food }) => {
    const { _id, foodn, quantity, photo, date, description, imgUrl, dname } = food
    
    // console.log(_id)
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-44 w-72 mt-3 rounded-lg ml-3" src={photo} alt="food" /></figure>
            <div className="card-body">
                <h2 className="card-title">Food: <span className="text-purple-700">{foodn}</span></h2>
                <h3 className="text-lg font-semibold italic">{description}</h3>
                <div className="flex gap-3">
                    <h2 className="font-semibold">quantity:<span className="text-red-700 font-bold">{quantity}</span></h2>
                    <p className="font-semibold">expired: <span className="text-red-500 font-bold">{date}</span></p>

                </div>

                <div className="flex gap-40">
                   <div className="flex gap-2 justify-center items-center">
                   <img className="h-16 w-16 rounded-full" src={imgUrl} alt="" />
                    <h2>{dname}</h2>
                   </div>

                    <div className=" justify-end">
                    <Link to={`/details/${_id}`}>
                    <button className="btn bg-gradient-to-r from-purple-500 to-pink-500">Details</button>
                    </Link>
                    </div>
                </div>
                




            </div>
        </div>
    );
};

export default FoodCard;