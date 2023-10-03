import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom'
import Card from '../../components/Card/Card';

const SingleHotel = () => {

    const hotelData = useLoaderData()
    const myKeysValues = window.location.search;
    const urlParams = new URLSearchParams(myKeysValues)

    const params = urlParams.get('identity')
    // console.log(params);


    const { id } = useParams()
    // const identity = useSearchParams()
    // console.log(identity);
    // console.log(id);

    // console.log(hotelData);
    const singleHotelData = hotelData.find(singleData => singleData.id == id)
    // console.log(singleHotelData);

    return (
        <div className='max-w-md mx-auto mt-3'>
            <Card eachHotel={singleHotelData} identity={params}></Card>
        </div>
    );
};

export default SingleHotel;