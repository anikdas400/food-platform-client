import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Details = () => {
    const {user}=useContext(AuthContext)
    const food = useLoaderData()
    const {_id, foodn, quantity, photo, date, description, dname }= food
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure><img className="h-96 w-auto mt-3 rounded-lg ml-3" src={photo} alt="food" /></figure>
        <div className="card-body ml-80">
            <h2 className="card-title">Food: <span className="text-purple-700">{foodn}</span></h2>
            <h3 className="text-lg font-semibold italic">{description}</h3>
            <div className="flex gap-3 ">
                <h2 className="font-semibold">quantity:<span className="text-red-700 font-bold">{quantity}</span></h2>
                <p className="font-semibold">expired: <span className="text-red-500 font-bold">{date}</span></p>
                

            </div>
            
            <div className="flex gap-40">
               <div className="flex gap-5 justify-center items-center">
               
                <h2 className="text-lg font-bold">Donator Name: <span className="text-lg font-semibold text-green-600">{dname}</span></h2>
                <h2 className="text-lg font-bold">User Name: <span className="text-lg font-semibold text-yellow-500">{user.displayName}</span></h2>
               </div>

                <div className="">
                <Link to={`/request/${_id}`}><button className="btn btn-outline btn-secondary ">Request</button></Link>
                </div>
            </div>
            




        </div>
    </div>
    );
};

export default Details;