import React from 'react';
import { ScaleLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen w-full'>
            <p className='text-lg'>Loading</p>
            <ScaleLoader />
        </div>
    );
};

export default LoadingSpinner;