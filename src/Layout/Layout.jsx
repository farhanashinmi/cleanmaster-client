import { Outlet } from "react-router-dom";
// import Navbar from './../SharedPages/Navbar';
import Footer from "../SharedPages/Footer";


const Layout = () => {
    return (
        <div className="overflow-x-hidden bg-slate-100 ">
           
            {/* <Navbar></Navbar> */}
           
           <div className="max-w-7xl mx-auto" >
            <Outlet></Outlet>
           </div>
           <div className="max-w-7xl mx-auto">
           <Footer></Footer>
           </div>
           
        </div>
    );
};

export default Layout;