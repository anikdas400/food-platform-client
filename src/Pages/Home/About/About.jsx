

const About = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-teal-600 italic mb-3 mt-9 text-center">About Us</h2>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <img src="https://i.ibb.co/fpghWnW/poor.jpg" className="max-w-lg rounded-lg shadow-2xl" />
                    <div className="w-1/3">
                        <h1 className="text-3xl font-bold">we are committed to our people to serve better</h1>
                        <p className="py-6 italic">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary btn-outline">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;