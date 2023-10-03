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
                        hotelData.map((eachHotel, index) => <Card key={index} eachHotel={eachHotel} identity="new york"></Card>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-3 gap-6 justify-center'>
                    {
                        hotelData.map((eachHotel, index) => <Card key={index} eachHotel={eachHotel} identity="mumbai"></Card>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-3 gap-6 justify-center'>
                    {
                        hotelData.map((eachHotel, index) => <Card key={index} eachHotel={eachHotel} identity="paris"></Card>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid lg:grid-cols-3 gap-6 justify-center'>
                    {
                        hotelData.map((eachHotel, index) => <Card key={index} eachHotel={eachHotel} identity="london"></Card>)
                    }
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default Home;