import React from 'react';
import notfound from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <img className='w-2/4' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;