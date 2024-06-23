import { Link } from "react-router-dom";


const ShortNavbar = () => {
    return (
        <div>
           <div className=" navbar justify-evenly bg-black">
  <div className="navbar-start mx-0">
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
    <div className="navbar-start text-white flex">
    <a className="btn btn-ghost text-xl">Cleaning War</a>
   
  </div>
  </div>
 
  <div className="navbar-center hidden lg:flex">
  <ul className="menu1 menu-horizontal px-1 gap-5 text-white">
      <li className=' text-lg'><Link to={'/'}>Home</Link></li>
      <li><Link to={'/contect'}>Contect</Link></li>
      <li className=' text-lg'><Link to={'/signin'}>Singin</Link></li>
     
     
    </ul>
  </div>
  
</div> 
        </div>
    );
};

export default ShortNavbar;