import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault()
    }
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">

                    <img className="h-[25rem] rounded-lg" src="https://i.ibb.co/3hv0KQd/login.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-semibold text-center text-purple-700 mt-5">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    
                    <p className="text-center">Login with <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 font-semibold text-green-500">Google</button></p>
                    <p className="text-center mb-3">Do not have an account?please <Link className="text-lime-400 font-semibold" to="/register">Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;