/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import ShortNavbar from "../../SharedPages/ShortNavbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Signup = () => {

    const {createUser} = useContext(AuthContext);

    const handlesignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        }) 
        .catch(error => console.log(error))

    }


    return (
        <div>
            <ShortNavbar></ShortNavbar>
                 <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold  text-emerald-600 ">Cleaning War</h1>
            <p className="py-6 text-justify">By outsourcing the chore of cleaning, individuals can reclaim their valuable time, reduce stress, and enjoy a consistently clean and healthy living environment. With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.Home cleaning services offer a convenient and professional solution to the ongoing battle against dust, dirt, and clutter in our homes. These services provide homeowners and residents with expert cleaning teams equipped with the knowledge, tools, and cleaning products necessary to transform any space into a spotless haven. Whether it's a one-time deep clean, regular maintenance, or specialized cleaning tasks like carpet or upholstery cleaning, home cleaning services can be tailored to meet individual needs. By outsourcing the chore of cleaning, individuals can reclaim their valuable time, reduce stress, and enjoy a consistently clean and healthy living environment. With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.</p>
                </div>
        <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100  border-2 border-emerald-600 text-center">
        <form onSubmit={handlesignup} className="card-body">
                <div className="form-control ">
                <label className="label">
                <span className="label-text font-semibold">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                <label className="label">
                <span className="label-text font-semibold">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                <span className="label-text font-semibold">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
        <div className="form-control mt-6 ">
      
            <input className="btn btn-success w-82 text-xl text-white font-semiabold bg-emerald-600 hover:bg-orange-400  mb-10 text-right"  type="submit" value="signup" />
      
        </div>
        </form>
        <p className="pb-6">Already have an Account  <Link to={'/signin'}><span className="text-emerald-600 font-medium ">Signin</span></Link></p>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Signup;