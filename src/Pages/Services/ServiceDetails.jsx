import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShortNavbar from "../../SharedPages/ShortNavbar";

const ServiceDetails = () => {

    const {_id} = useParams()

    const [servicedatails, setservicedatails] =useState(null);
    

    useEffect(() => {
        fetch("../../../public/service.json")
          .then((res) => res.json())
          .then((data) => {
            const filteredData = data.find(item => item._id == _id);
            setservicedatails(filteredData)
        });
        }, [_id]);
  

    return (
        <div>
            <ShortNavbar></ShortNavbar>
             <div className="card h-[500px] bg-base-100 shadow-xl m-10">
                <div className="flex flex-col md:flex-row-reverse lg:flex-row w-[100%] object-cover p-6 lg:p-20">

             
  <figure><img className="w-96" src={servicedatails?.img} alt="Shoes" /></figure>
  <div className="card-body w-96">
    <h2 className="card-title text-2xl">
    {servicedatails?.title}
      
    </h2>
    <p className="text-justify w-60 md:w-52 lg:w-96">{servicedatails?.description}</p>
    <p className="font-semibold">{servicedatails?.price}</p>
    <div className="card-actions justify-start">
    <Link to={`/book/${_id}`} ><button className="btn btn-outline btn-warning font-bold">Book Now</button></Link>

    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default ServiceDetails;