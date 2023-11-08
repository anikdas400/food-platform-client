

const FoodCard = ({food}) => {
    const {_id,foodn,quantity,photo,date,description,location,imgUrl,dname} = food
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="food" /></figure>
            <div className="card-body">
                <h2 className="card-title">Food:{foodn}</h2>
                <div className="">
                <h2>quantity:{quantity}</h2>
                <p>expired:{date}</p>
                </div>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;