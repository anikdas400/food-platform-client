import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";


const SignUp = () => {

    const [signUpError,setSignUpError] = useState('')
    const [success,setSuccess] = useState('')
    const {createUser}=useContext(AuthContext)

    const handleSignUp = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        setSignUpError('')
        setSuccess('')

        if(password.length < 6){
            setSignUpError('Your password should be at least 6 characters')
            return
        }
        else if(!/[A-Z]/.test(password)){
            setSignUpError('Your password should be at least one UpperCase character')
            return
        }
        createUser(email,password)
        .then(result=>{
            const user = result.user
            setSuccess('User created successfully')
            event.target.reset()
            console.log(user)
        })
        .catch(error=>{
            console.error(error);
            setSignUpError(error.message)
        })
    }
    
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-t-lg">

            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">

                    <img className="h-[30rem] rounded-lg" src="https://i.ibb.co/3hv0KQd/login.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-semibold text-center text-indigo-500 mt-5">Sign Up </h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
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
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>

                    {
                        signUpError?  <p className="text-red-700 font-semibold mb-2 text-center">{signUpError}</p>:
                        <p className="text-green-700 font-semibold mb-2 text-center">{success}</p>
                    }
                    
                    
                    <p className="text-center mb-3">Already have an account?please <Link className="text-purple-700 font-bold text-lg" to="/login">sign in</Link> </p>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;