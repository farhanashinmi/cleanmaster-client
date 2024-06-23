/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import serviceimg1 from '../../assets/asset/services/1.jpg'
import serviceimg2 from '../../assets/asset/services/2.jpg'
import serviceimg3 from '../../assets/asset/services/3.jpg'
import serviceimg4 from '../../assets/asset/services/4.jpg'
import serviceimg5 from '../../assets/asset/services/5.jpg'
import serviceimg6 from '../../assets/asset/services/6.jpg'

const HomeService = () => {
    return (
       <div>
       <div className="text-center mx-auto py-8">
            <h3 className="text-5xl font-bold text-yellow-400 ">Our Services</h3>
            <p className=" mt-4 text-justify  px-2"> These services provide homeowners and residents with expert cleaning teams equipped with the knowledge, tools, and cleaning products necessary to transform any space into a spotless haven. Whether it's a one-time deep clean, regular maintenance, or specialized cleaning tasks like carpet or upholstery cleaning, home cleaning services can be tailored to meet individual needs.</p>
       </div>
       <div className="py-6 px-6 gap-y-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="card w-96 bg-slate-100 border-yellow-400 border-2 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={serviceimg1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-start">
            <h2 className="card-title font-bold">Bathroom Cleaning</h2>
            <p className="text-justify">With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.</p>
            <p className="font-semibold">$ 250.00</p>
            <div className="card-actions flex">
            <Link to={'/service'} ><button className="btn btn-outline btn-warning font-bold">Book Now</button></Link>
            <Link to={'/service'}><button className="btn btn-outline btn-success font-bold">More</button></Link>
            </div>
            </div>
            </div>
            <div className="card w-96 bg-slate-100 border-yellow-400 border-2 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={serviceimg2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-start">
            <h2 className="card-title font-bold">Glass Cleaning</h2>
            <p className="text-justify">With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.</p>
            <p className="font-semibold">$ 300.00</p>
            <div className="card-actions flex">
            <Link to={'/service'} ><button className="btn btn-outline btn-warning font-bold">Book Now</button></Link>
            <Link to={'/service'}><button className="btn btn-outline btn-success font-bold">More</button></Link>
            </div>
            </div>
            </div>
            <div className="card w-96 bg-slate-100 border-yellow-400 border-2 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={serviceimg3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-start">
            <h2 className="card-title font-bold">Kitchen Cleaning</h2>
            <p className="text-justify">With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.</p>
            <p className="font-semibold">$ 200.00</p>
            <div className="card-actions flex">
            <Link to={'/service'} ><button className="btn btn-outline btn-warning font-bold">Book Now</button></Link>
            <Link to={'/service'}><button className="btn btn-outline btn-success font-bold">More</button></Link>
            </div>
            </div>
            </div>
            <div className="card w-96 bg-slate-100 border-yellow-400 border-2 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={serviceimg4} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-start">
            <h2 className="card-title font-bold">Office Cleaning</h2>
            <p className="text-justify">With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.</p>
            <p className="font-semibold">$ 700.00</p>
            <div className="card-actions flex">
            <Link to={'/service'} ><button className="btn btn-outline btn-warning font-bold">Book Now</button></Link>
            <Link to={'/service'}><button className="btn btn-outline btn-success font-bold">More</button></Link>
            </div>
            </div>
            </div>
            <div className="card w-96 bg-slate-100 border-yellow-400 border-2 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={serviceimg5} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-start">
            <h2 className="card-title font-bold">School Cleaning</h2>
            <p className="text-justify">With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.</p>
            <p className="font-semibold">$ 600.00</p>
            <div className="card-actions flex">
            <Link to={'/service'} ><button className="btn btn-outline btn-warning font-bold">Book Now</button></Link>
            <Link to={'/service'}><button className="btn btn-outline btn-success font-bold">More</button></Link>
            </div>
            </div>
            </div>
            <div className="card w-96 bg-slate-100 border-yellow-400 border-2 shadow-xl">
            <figure className="px-10 pt-10">
            <img src={serviceimg6} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-start">
            <h2 className="card-title font-bold">Home Cleaning</h2>
            <p className="text-justify">With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.</p>
            <p className="font-semibold">$ 750.00</p>
            <div className="card-actions flex">
            <Link to={'/service'} ><button className="btn btn-outline btn-warning font-bold">Book Now</button></Link>
            <Link to={'/service'}><button className="btn btn-outline btn-success font-bold">More</button></Link>
            </div>
            </div>
            </div>

        </div>
        <div className="text-center">
        <Link to={'/service'} > <button className="btn btn-success text-xl text-white font-semiabold bg-emerald-600 w-52  mb-10 text-right">See More</button> </Link> 
        </div>
        </div>
    );
};

export default HomeService;