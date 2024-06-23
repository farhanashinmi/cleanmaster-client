import { Link } from 'react-router-dom';
import logo from '../assets/asset/icons/logo.png'

const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-black ">
  <div className="navbar-start text-white text-xl z-10">
  <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] fixed p-2 shadow bg-base-100 rounded-box w-52 text-black">
      <li className=' text-lg'><Link to={'/'}>Home</Link></li>
      <li><Link to={'/contect'}>Contect</Link></li>
        <li>
          <a>Dashboard</a>
          <ul className="p-2">
            <li><a>My Shedeul</a></li>
            <li><a>Add Services</a></li>
            <li><a>Manage Services</a></li>
          </ul>
        </li>
        
      </ul>
    </div>
    <div className="navbar-start hidden lg:flex ">
    <ul className="menu1 menu-horizontal gap-5 ">
      <li className=' text-lg'><Link to={'/'}>Home</Link></li>
      <li><Link to={'/contect'}>Contect</Link></li>
      <li className=' text-lg '>
        <details>
          <summary>Dashboard</summary>
          <ul className=" text-black text-base h-32 w-42 px-4 ">
            <li><a>My Shedeul</a></li>
            <li><a>Add Services</a></li>
            <li><a>Manage Services</a></li>
          </ul>
        </details>
      </li>
     
    </ul>
  </div>
  </div>
  
  <div className="navbar-center text-white flex">
    <a className="btn btn-ghost text-xl">Cleaning War</a>
    <img className='w-12' src={logo} alt="" />
  </div>
  <div className="navbar-end">
   
    <button className="btn btn-ghost btn-circle text-white">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div> 
        </div>
    );
};

export default Navbar;