/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Aboutus = () => {
    return (
        <div>
            <div className=" text-slate-800 p-20">
            <h1 className="text-5xl font-bold ">About Us</h1>
            <p className="py-6 text-justify">By outsourcing the chore of cleaning, individuals can reclaim their valuable time, reduce stress, and enjoy a consistently clean and healthy living environment. With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.Home cleaning services offer a convenient and professional solution to the ongoing battle against dust, dirt, and clutter in our homes. These services provide homeowners and residents with expert cleaning teams equipped with the knowledge, tools, and cleaning products necessary to transform any space into a spotless haven. Whether it's a one-time deep clean, regular maintenance, or specialized cleaning tasks like carpet or upholstery cleaning, home cleaning services can be tailored to meet individual needs. By outsourcing the chore of cleaning, individuals can reclaim their valuable time, reduce stress, and enjoy a consistently clean and healthy living environment. With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.</p>
            <Link to={'/'}><button className="btn btn-ghost bg-yellow-300 font-bold">Back to Home</button></Link> 
     
    </div>
        </div>
    );
};

export default Aboutus;