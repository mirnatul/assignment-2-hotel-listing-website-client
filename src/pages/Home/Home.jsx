import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../../components/Card/Card';

const Home = () => {
    const [hotelData, setHotelData] = useState([])

    useEffect(() => {
        fetch('hotel-data.json')
            .then(res => res.json())
            .then(data => setHotelData(data))
    }, [])


    const [yorkCount, setYorkCount] = useState(6)
    const [mumbaiCount, setMumbaiCount] = useState(6)
    const [parisCount, setParisCount] = useState(6)
    const [londonCount, setLondonCount] = useState(6)




    return (
        <Tabs className='mt-8'>
            <TabList className='flex justify-center gap-4 text-white mb-6'>
                <Tab className='bg-blue-400 inline-flex items-center px-3 py-2 rounded-full'>New York</Tab>
                <Tab className='bg-blue-400 inline-flex items-center px-3 py-2 rounded-full'>Mumbai</Tab>
                <Tab className='bg-blue-400 inline-flex items-center px-3 py-2 rounded-full'>Paris</Tab>
                <Tab className='bg-blue-400 inline-flex items-center px-3 py-2 rounded-full'>London</Tab>
            </TabList>

            <TabPanel>
                <div className='grid lg:grid-cols-3 gap-6 justify-center'>
                    {
                        hotelData.slice(0, yorkCount).map((eachHotel, index) => <Card key={index} eachHotel={eachHotel} identity="new york"></Card>)
                    }
                </div>
                <div className='text-center my-8'>
                    <button onClick={() => setYorkCount(yorkCount + 3)} className="btn btn-primary">Show More</button>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-3 gap-6 justify-center'>
                    {
                        hotelData.slice(0, mumbaiCount).map((eachHotel, index) => <Card key={index} eachHotel={eachHotel} identity="mumbai"></Card>)
                    }
                </div>
                <div className='text-center my-8'>
                    <button onClick={() => setMumbaiCount(mumbaiCount + 3)} className="btn btn-primary">Show More</button>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-3 gap-6 justify-center'>
                    {
                        hotelData.slice(0, parisCount).map((eachHotel, index) => <Card key={index} eachHotel={eachHotel} identity="paris"></Card>)
                    }
                </div>
                <div className='text-center my-8'>
                    <button onClick={() => setParisCount(parisCount + 3)} className="btn btn-primary">Show More</button>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-3 gap-6 justify-center'>
                    {
                        hotelData.slice(0, londonCount).map((eachHotel, index) => <Card key={index} eachHotel={eachHotel} identity="london"></Card>)
                    }
                </div>
                <div className='text-center my-8'>
                    <button onClick={() => setLondonCount(londonCount + 3)} className="btn btn-primary">Show More</button>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default Home;