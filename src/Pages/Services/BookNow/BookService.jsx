import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
// import { Link } from "react-router-dom";
// import ShortNavbar from "../../../SharedPages/ShortNavbar";


const BookService = () => {

    // const service = useLoaderData();
    // const { title } = service;
    const {id} = useParams()
    console.log(id)
    
    const {user} =useContext(AuthContext);
    
    useEffect ( () =>{

    axios('http://localhost:5173/service') 
    .then(res =>{
      console.log(res.data);
    })
    }, [])
    const handleBookservice = event => {
      event.preventDefault();
    
    
      const form = event.target;
      const name = form.name.value;
      
    //   const photo = form.photo.value;
      const date = form.date.value;
      const time = form.time.value;
      const price = form.price.value;
      const email = form.email.value;
      const contect = form.contect.value;
      const order = {
        customerName:name,
        Time:time,
        Date:date,
        Price: price,
        email:email,
        contect:contect}
      console.log(order);
    
     
     axios.post('http://localhost:5000/bookings')
     .then(res =>{
      console.log(res.data)
     })
       

    }


    return (
        
        <div>
    <h2 className="text-4xl text-center font-bold pt-8 text-black underline">Add Service Area</h2>

    <div className="bg-slate-200  ">

    {/* <h2 className="text-4xl text-center font-bold pt-8 text-emerald-400">Booking Service:{title}</h2> */}

    <div className=" mt-8">
    <form onSubmit={handleBookservice} className="card-body flex-col lg:flex-row grid grid-cols-2 p-8 gap-9">
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-bold text-lg">Clients Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.name} placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-bold text-lg">Service Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.title} placeholder="name" className="input input-bordered" required />
        </div>
        {/* <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-bold text-lg">Service Details</span>
          </label>
          <input type="text" name="description" placeholder="description" className="input input-bordered" required />
        </div>
         */}
        {/* <div className="form-control w-96">
          <label className="label">
            <span className="label-text font-bold text-lg">Service Img</span>
          </label>
          <input type="url" name="photo"  placeholder="img" className="input input-bordered" />
        </div> */}
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-bold text-lg">Address </span>
          </label>
          <input type="text" name="description" placeholder="address" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-bold text-lg"> Service Date</span>
          </label>
          <input type="date" name="date"  placeholder="date" className="input input-bordered" required />
        </div>
      
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-bold text-lg"> Service Price</span>
          </label>
          <input type="text" name="price" defaultValue={user?.price} placeholder="price" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-bold text-lg"> Service Time</span>
          </label>
          <input type="time" name="time"  placeholder="time" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-bold text-lg"> Email</span>
          </label>
          <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-bold text-lg"> Contect NO.</span>
          </label>
          <input type="text" name="contect"  placeholder="contect no." className="input input-bordered" required />
        </div>
       
      
      <div className="form-control mt-6 justify-center lg:pl-96 pl-10">
      <Link to={'/bookings'}>
          <button ></button>
          <input  type="submit" value="Booking Confirm" className="btn btn-outline btn-success w-72 mb-8 font-bold" /></Link>
        </div>
        </form> 
    </div>
</div>


        </div>
    );
};

export default BookService;