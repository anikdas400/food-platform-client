

const Banner = () => {
    return (
        <div className="carousel w-full h-[32rem] mx-auto ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/S3xnKZR/istockphoto-828545860-612x612.jpg" className="w-full rounded-t-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle btn-outline btn-error">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-outline btn-error">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/LpdBXMk/419068999.jpg" className="w-full rounded-t-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle btn-outline btn-error">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-outline btn-error">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/GxqHDfc/stock-vector-don-t-waste-food-world-food-day-and-international-awareness-day-on-food-loss-and-waste.jpg" className="w-full rounded-t-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle btn-outline btn-error">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-outline btn-error">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/kq0PrgZ/stock-vector-food-sharing-concept-vector-illustration-on-white-background-hand-giving-plate-of-food.jpg" className="w-full rounded-t-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle btn-outline btn-error ">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-outline btn-error">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;