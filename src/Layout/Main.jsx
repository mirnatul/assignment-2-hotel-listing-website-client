import React from 'react';
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl font-bold bg-blue-400 py-4 text-center'>Hotel listing Website</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;