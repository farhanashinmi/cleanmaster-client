import { Link } from "react-router-dom";
// import logofooter from '../assets/asset/icons/logo.png'
const Footer = () => {
    return (
        <div className="mx-auto">
                      
    <footer className="lg:footer  px-4 py-10 bg-black lg:text-base-content text-center">
      <aside>
      {/* <img className="overflow-content hidden" src={logofooter} alt="" /> */}
      <a className=" normal-case text-xl font-bold text-white">Cleaning War</a>
      </aside> 
      <nav>
      <header className="footer-title text-yellow-400 ">Services</header> 
    <Link to={'/services'} className="link link-hover text-slate-100">Home Cleaning</Link> 
    <Link to={'/services'} className="link link-hover text-slate-100">Glass Cleaning</Link> 
 
    <Link to={'/services'}  className="link link-hover text-slate-100">Office Cleaning</Link> 
    <Link to={'/services'} className="link link-hover text-slate-100">Kitchen Cleaning</Link>
     </nav> 
     <nav>
     <header className="footer-title text-yellow-400">Company</header> 
    <Link to={'/error'} className="link link-hover text-slate-100 ">About us</Link>
    <Link to={'/about'} className="link link-hover text-slate-100">Contact</Link>
    <Link to={'/checkout'} className="link link-hover text-slate-100">Booking</Link>
  
     </nav> 
     <nav>
     <header className="footer-title text-yellow-400">Ours</header> 
    <Link to={'/'} className="link link-hover text-slate-100">Terms of use</Link>
    <Link to={'/'} className="link link-hover text-slate-100">Privacy policy</Link>
    <Link to={'/'} className="link link-hover text-slate-100">CopyRight</Link>
  
    </nav>
    </footer>


  
        </div>
    );
};

export default Footer;