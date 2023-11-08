import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";


const Login = () => {

    const [signUpError, setSignUpError] = useState('')
    const [success, setSuccess] = useState('')
    const { signIn, signInWithgoogle } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)




        // reset error
        setSignUpError('')
        setSuccess('')

        if (password.length < 6) {
            setSignUpError('Your password should be at least 6 characters')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Your password should be at least one UpperCase character')
            return
        }



        // createUser in firebase
        signIn(email, password)
            .then(result => {
                const user = result.user
                setSuccess('User logged successfully')
                event.target.reset()
                navigate(location?.state ? location.state : '/')
                console.log(user)
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            })

    }

    const handleGoogleSignin = ()=>{
        signInWithgoogle()
        .then(result=>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-t-lg">

            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">

                    <img className="h-[28rem] rounded-lg" src="https://i.ibb.co/3hv0KQd/login.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-semibold text-center text-indigo-500 mt-5">Login now!</h1>
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
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                    {
                        signUpError ? <p className="text-red-700 font-semibold mb-2 text-center">{signUpError}</p> :
                            <p className="text-green-700 font-semibold mb-2 text-center">{success}</p>
                    }
                    <h2 className="text-center text-lg font-semibold text-purple-900 underline">OR</h2>

                    <p className="text-center">sign in with<button onClick={handleGoogleSignin} className="btn btn-ghost font-bold text-purple-900"><FcGoogle className="text-lg"></FcGoogle>Google</button></p>

                    
                    <p className="text-center mb-3">Do not have an account?please <Link className="text-purple-700 font-bold text-lg" to="/signup">Sign Up</Link> </p>



                </div>
            </div>
        </div>
    );
};

export default Login;