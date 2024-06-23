import './home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../../assets/asset/banner/1.jpg'
import { Link } from 'react-router-dom';
import banner2 from '../../assets/asset/banner/2.jpg'
import banner3 from '../../assets/asset/banner/3.jpg'
import banner4 from '../../assets/asset/banner/4.jpg'

const Banner = () => {
    return (
        <div className='mx-auto '>
     <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        {/* <div className="hero1 min-h-screen" style={{backgroundImage: (banner1)}}> */}
        <div className="hero1 min-h-screen items-start " >
  <div className="hero1-overlay object-cover bg-opacity-60">
    <img src={banner1} alt="" />
  </div>
  <div className="text-start lg:my-[-500px] md:my-[-400px] my-10  mx-20">
    <div className=" text-black ">
      <h1 className="mb-4 lg:text-5xl text-xl font-bold"> Cleaning with Care, Making <br/>Homes Shine.</h1>
      <p className="mb-4 lg:text-xl text-sm">Home cleaning services offer a convenient and professional solution to the <br/> ongoing battle against dust, dirt, and clutter in our homes.</p>
      <div className='flex gap-x-4'>
      <Link to={'/service'}><button className="btn btn-outline btn-warning font-bold">Services</button></Link>
      <Link to={'/service'}><button className="btn btn-outline btn-success  font-bold">Purches</button></Link>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
        
        <SwiperSlide>
        {/* <div className="hero1 min-h-screen" style={{backgroundImage: (banner1)}}> */}
        <div className="hero2 min-h-screen items-start " >
  <div className="hero2-overlay object-cover bg-opacity-60">
    <img src={banner2} alt="" />
  </div>
  <div className="text-start lg:my-[-500px] md:my-[-400px] my-10  mx-20">
    <div className=" text-white">
      <h1 className="mb-4 lg:text-5xl text-xl font-bold"> Cleaning with Care, Making <br/>Homes Shine.</h1>
      <p className="mb-4 lg:text-xl text-sm">Home cleaning services offer a convenient and professional solution to the <br/> ongoing battle against dust, dirt, and clutter in our homes.</p>
      <div className='flex gap-x-4'>
      <Link to={'/service'}><button className="btn btn-outline btn-warning font-bold">Services</button></Link>
      <Link to={'/service'}><button className="btn btn-outline btn-success  font-bold">Purches</button></Link>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
        
        <SwiperSlide>
        {/* <div className="hero1 min-h-screen" style={{backgroundImage: (banner1)}}> */}
        <div className="hero3 min-h-screen items-start " >
  <div className="hero3-overlay object-cover bg-opacity-60">
    <img src={banner3} alt="" />
  </div>
  <div className="text-start lg:my-[-500px] md:my-[-400px] my-10  mx-20">
    <div className=" text-white ">
      <h1 className="mb-4 lg:text-5xl text-xl font-bold"> Cleaning with Care, Making <br/>Homes Shine.</h1>
      <p className="mb-4 lg:text-xl text-sm">Home cleaning services offer a convenient and professional solution to the <br/> ongoing battle against dust, dirt, and clutter in our homes.</p>
      <div className='flex gap-x-4'>
      <Link to={'/service'}><button className="btn btn-outline btn-warning font-bold">Services</button></Link>
      <Link to={'/service'}><button className="btn btn-outline btn-success  font-bold">Purches</button></Link>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
        
        <SwiperSlide>
        {/* <div className="hero1 min-h-screen" style={{backgroundImage: (banner1)}}> */}
        <div className="hero4 min-h-screen items-start " >
  <div className="hero4-overlay object-cover bg-opacity-60">
    <img src={banner4} alt="" />
  </div>
  <div className="text-start lg:my-[-500px] md:my-[-400px] my-10  mx-20">
    <div className=" text-black ">
      <h1 className="mb-4 lg:text-5xl text-xl font-bold"> Cleaning with Care, Making <br/>Homes Shine.</h1>
      <p className="mb-4 lg:text-xl text-sm">Home cleaning services offer a convenient and professional solution to the <br/> ongoing battle against dust, dirt, and clutter in our homes.</p>
      <div className='flex gap-x-4'>
      <Link to={'/service'}><button className="btn btn-outline btn-warning font-bold">Services</button></Link>
      <Link to={'/service'}><button className="btn btn-outline btn-success  font-bold">Purches</button></Link>
      </div>
    </div>
  </div>
</div>
        </SwiperSlide>
        
        
        
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
        </div>
    );
};

export default Banner;