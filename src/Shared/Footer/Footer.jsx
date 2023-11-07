import { FaFacebook,FaTwitter,FaYoutube} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" p-10 bg-purple-800 text-neutral-content">
            <div className="footer">
            <aside>
                <img className="h-24 w-24 rounded-full" src="https://i.ibb.co/Jy1P6s3/pngtree-share-png-image-6596822.png" alt="" />
                <p className="text-base text-orange-200">The Culinary Cuddles. <br/>Providing reliable tech since 2010</p>
                
                
            </aside>
            <nav>
            <p className="text-lg">Contact us</p>
                <h2 className="hover:text-emerald-600 text-base text-cyan-500 italic font-semibold"><a href="">culinary@gmail.com</a></h2>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    
                    <a className='text-3xl text-sky-500'><FaFacebook></FaFacebook></a>
                    <a className='text-3xl text-blue-600'><FaTwitter></FaTwitter></a>
                    <a className='text-3xl text-red-600'><FaYoutube></FaYoutube></a>
                </div>
                
                
            </nav>
            </div>
            <aside className="text-center mt-5">
                <p className='italic'>Copyright © 2023 - All right reserved by The Culinary Cuddles</p>
                </aside>
          
                
           
        </footer>
    );
};

export default Footer;
// bg-neutral