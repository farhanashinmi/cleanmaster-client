/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {

    const {_id,title,img,price,description} = service

    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {title}
      
    </h2>
    <p>{description}</p>
    <p>{price}</p>
    <div className="card-actions justify-start">
    <Link to={`/book/${_id}`} ><button className="btn btn-outline btn-warning font-bold">Book Now</button></Link>
    <Link to={`/service/${_id}`}><button className="btn btn-outline btn-success font-bold">Details</button></Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default ServiceCard;