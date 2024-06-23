/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import ServiceCard from './ServiceCard';
import ShortNavbar from "../../SharedPages/ShortNavbar";
import axios from "axios";



const Service = () => {

    const [services, setservices] = useState([]);

    useEffect( () =>{
       
      axios('http://localhost:5000/services')
      .then(res =>{
        setservices(res.data)
      })
    }, [])

     
    
    
    return (
        <div>
          <ShortNavbar></ShortNavbar>
           <div className="text-center mx-auto py-8">
            <h3 className="text-5xl font-bold text-yellow-400 ">Our Services</h3>
            <p className=" mt-4 text-justify  px-2"> These services provide homeowners and residents with expert cleaning teams equipped with the knowledge, tools, and cleaning products necessary to transform any space into a spotless haven. Whether it's a one-time deep clean, regular maintenance, or specialized cleaning tasks like carpet or upholstery cleaning, home cleaning services can be tailored to meet individual needs.</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-6 gap-y-8">

          {
            services.map ( service => <ServiceCard
            key={service._id}
            service={service}
            ></ServiceCard>

            )
          }

           </div>  
        </div>
    );
};

export default Service;