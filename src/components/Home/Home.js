import React from 'react';
import bannerImg from '../../images/apple-iphone-13-pro-max.jpg'

const Home = () => {
    return (
        <div className='w-4/5 mx-auto flex justify-between items-center mt-4'>
            <div className="">
                <h1 className='text-7xl font-extrabold'>Your Next Choice</h1>
                <h1 className='text-7xl font-extrabold'>Your Best Choice</h1>
                <p className='w-3/4 mt-3 mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, facilis. Doloremque quo magnam aspernatur, sequi cum ratione aliquam. Vero aliquid ducimus distinctio, veritatis obcaecati mollitia amet doloremque qui fugiat esse?</p>
                <button className='px-8 py-4 bg-indigo-100 rounded-lg'>Live Demo</button>
            </div>
            <div className="">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Home;