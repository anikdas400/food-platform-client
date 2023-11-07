import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold mb-5 mt-7 text-green-700">Partners</h2>
            <Marquee className="mb-7" pauseOnHover={true} speed={30}>
               <img className="h-44 w-72" src="https://i.ibb.co/M9kNCsY/n.png" alt="" />
               <img className="h-44 w-80" src="https://i.ibb.co/4YNgmh1/p.png" alt="" />
               <img className="h-44 w-72" src="https://i.ibb.co/N9rNpYj/global.png" alt="" />
               <img className="h-44 w-80" src="https://i.ibb.co/kD2MNWG/zendesk-logo-icon-167934.png" alt="" />
            </Marquee>

        </div>
    );
};

export default Partners;