import { Link } from "react-router-dom";
import about1 from '../../assets/asset/aboutus/person.jpg'
import about2 from '../../assets/asset/aboutus/parts.jpg'

const AboutHome = () => {
    return (
        <div>
        <div className="text-center mx-auto " >
            <div className="hero min-h-screen bg-green-100 ">
            <div className="hero-content flex-col lg:flex-row ">
            <div className="lg:w-1/2 relative">
            <img src={about1} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={about2} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-36 border-8" />
            </div>
            <div className="lg:w-1/2 text-slate-800 ">
            <h1 className="text-5xl font-bold lg:py-0 py-20">About Us</h1>
            <p className="lg:py-6 py-0 text-justify">By outsourcing the chore of cleaning, individuals can reclaim their valuable time, reduce stress, and enjoy a consistently clean and healthy living environment. With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.</p>
            <Link to={'/aboutus'} ><button className="btn btn-ghost bg-yellow-300 font-bold">Read More</button></Link> 
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default AboutHome;