import contect1 from '../../assets/asset/login/log.jpg'
import contect2 from '../../assets/asset/services/1.jpg'
import contect3 from '../../assets/asset/services/4.jpg'
import payment1 from '../../assets/asset/payment/4.png'
import payment2 from '../../assets/asset/payment/2.png'

import { Link } from 'react-router-dom';
import Aboutus from '../About/Aboutus'


const Contect = () => {
    return (
        <div>
            <Aboutus></Aboutus>
            <div className="flex flex-wrap justify-center mt-10 gap-8 bg-emerald-300 h-full">
    <div className=" text-slate-800 mt-10 lg:pl-72 justify-center">
      <h1 className="text-5xl font-bold ">Cotect Us</h1>
      <p className="py-2">Address : house 23 , melbon , new york</p>
      <p className="py-2">phone : 123 456 679 998</p>
      <p className="py-2">Email : cleaningwar@gmail.com</p>
     
    </div>
    <div className="lg:w-1/2 relative">
    <img src={contect1}className="w-5/5 rounded-lg shadow-2xl border-4 h-52 border-yellow-400" />
    <Link to={'/readmore'}><button className="btn btn-ghost bg-yellow-300 font-bold mt-3 w-52">Call Now</button></Link>
    </div>
    </div>

    <div>
    <div className="hero min-h-screen bg-base-300 mt-10">
  <div className="hero-content flex-col lg:flex-row ">
   
    <div className="lg:w-1/2 text-slate-800 text-justify p-10">
      <h1 className="text-5xl font-bold ">Booking</h1>
      <p className="py-6">By outsourcing the chore of cleaning, individuals can reclaim their valuable time, reduce stress, and enjoy a consistently clean and healthy living environment. With the help of experienced and reliable cleaning professionals, homes become more inviting, comfortable, and free from the burden of household tasks.</p>
     <Link to={'/readmore'}><button className="btn btn-ghost bg-yellow-300 font-bold">Read More</button></Link> 
    </div>
    <div className="lg:w-1/2 relative ">
    <img src={contect2} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={contect3} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-36 border-8" />
    </div>
  </div>
  </div>

  <div  className="text-center">
  <h1 className="text-5xl font-bold mb-8 mt-10">Payment</h1>
  <div className="flex justify-center mb-10  h-32">
  <img className="w-36 shadow-xl"  src={payment1} alt="" />
  <img className="w-36 shadow-xl"  src={payment2} alt="" />
  
  <img className="w-36 shadow-xl"  src={payment1} alt="" />
  </div>
  </div>
    
    </div>
        </div>
    );
};

export default Contect;