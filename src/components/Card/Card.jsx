import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { PiBuildings } from 'react-icons/pi'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { LiaBathSolid } from 'react-icons/lia'
import { SlSizeFullscreen } from 'react-icons/sl'
import { AiOutlineHeart } from 'react-icons/ai'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Card = ({ eachHotel, identity }) => {
    let image;
    if (identity === 'new york') {
        image = eachHotel.newYorkImage
    }
    else if (identity === 'mumbai') {
        image = eachHotel.mumbaiImage
    }
    else if (identity === 'paris') {
        image = eachHotel.parisImage
    }
    else {
        image = eachHotel.londonImage
    }

    // console.log(image);
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-1 pt-1 relative">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide><img src={`${image[0]}`} alt="Shoes" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src={`${image[1]}`} alt="Shoes" className="rounded-xl" /></SwiperSlide>
                    <SwiperSlide><img src={`${image[2]}`} alt="Shoes" className="rounded-xl" /></SwiperSlide>
                </Swiper>
                <p className='absolute left-0 top-0 mt-4 ml-4 bg-white px-2 py-1 rounded-full text-blue-700 font-semibold'>For Rent</p>
                <div className='absolute right-0 top-0 mt-4 mr-4 bg-white p-2 rounded-full'>
                    <AiOutlineHeart size={24} color='blue'></AiOutlineHeart>
                </div>
            </figure>
            <div className="card-body">
                <p className='inline-flex items-center gap-1'><FaMapMarkerAlt></FaMapMarkerAlt> 8558 Parker Rd.</p>
                <h2 className="card-title">{eachHotel?.name}</h2>
                <div className='flex justify-center gap-10 my-4'>
                    <div>
                        <PiBuildings size={20}></PiBuildings>
                        <p>{eachHotel.room} Room</p>
                    </div>
                    <div>
                        <MdOutlineBedroomParent size={20}></MdOutlineBedroomParent>
                        <p>{eachHotel.bed} Bed</p>
                    </div>
                    <div>
                        <LiaBathSolid size={20}></LiaBathSolid>
                        <p>{eachHotel.bath} Bath</p>
                    </div>
                    <div>
                        <SlSizeFullscreen size={20}></SlSizeFullscreen>
                        <p>732 sft</p>
                    </div>
                </div>
                <div className='flex justify-between mt-4 items-center'>
                    <p><span className='text-xl font-semibold text-blue-700'>${eachHotel.rent}</span>/month</p>
                    <button className="border-2 border-blue-700 px-4 py-2 rounded-full text-blue-700 hover:text-white hover:bg-blue-700">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Card;