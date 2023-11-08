import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {

        logOut()
            .then(() => console.log('logOut successfully'))
            .catch(error => {
                console.error(error);
            })
    }
    const navItems = <>
        <li><Link className="text-lg text-violet-800 hover:text-green-700 hover:bg-white hover:underline font-semibold" to='/'>Home</Link></li>
        <li><Link className="text-lg text-violet-800 hover:text-green-700 hover:bg-white hover:underline font-semibold" to='/available'>Available Foods</Link></li>
        <li><Link className="text-lg text-violet-800 hover:text-sky-500 hover:bg-white hover:underline font-semibold" to='/add'>Add Food</Link></li>
        <li><Link className="text-lg text-violet-800 hover:text-sky-500 hover:bg-white hover:underline font-semibold" to='/manage'>ManageMyFood</Link></li>
        <li><Link className="text-lg text-violet-800 hover:text-sky-500 hover:bg-white hover:underline font-semibold" to='/request'>MyFoodRequest</Link></li>
        <li><Link className="text-lg text-violet-800 hover:text-green-700 hover:bg-white hover:underline font-semibold" to='/signup'>Sign UP</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div>
                    <Link to='/'><img className="h-16 w-16  rounded-full" src="https://i.ibb.co/Jy1P6s3/pngtree-share-png-image-6596822.png" alt="" /></Link>
                    <h2 className="font-semibold text-purple-800">The Culinary Cuddles.</h2>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <img className="w-14 h-14 rounded-full mr-2" src={user?.photoURL} alt="" />
                        <span className="mr-2">{user.displayName}</span>
                        <button onClick={handleLogOut} className="btn btn-success"><NavLink to='/'>LogOut</NavLink></button>
                    </> : <button className="btn btn-success"><NavLink to='/login'>Login</NavLink></button>
                }
                {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </label>
                <Link className="btn btn-success btn-outline" to='/signup'>sign up</Link> */}

            </div>
        </div>
    );
};

export default Navbar;