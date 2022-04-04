import React from 'react';
// import bannerImg from '../../images/apple-iphone-13-pro-max.jpg'
import bannerImg from '../../images/freez.jpg'
import useReviews from '../../hook/useReview';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const [reviews, setReviews] = useReviews()
    const firstThree = reviews.slice(0, 3)
    // console.log(reviews)
    const navigate = useNavigate()
    const goToReviews = () => {
        navigate('/reviews')
    }
    return (
        <div className='w-11/12 xl:w-4/5 mx-auto'>
            <div className=' md:flex justify-between items-center mt-10'>
                <div className="">
                    <h1 className='text-3xl md:text-5xl xl:text-7xl font-extrabold'>Your Next Choice</h1>
                    <h1 className='text-3xl md:text-5xl xl:text-7xl font-extrabold text-blue-700'>Your Best Choice</h1>
                    <p className='w-3/4 mt-3 mb-8'>Now most popular brand is walton in bd. It's model no is WFE-3 GO-GDEL-XX. It is very unique from others. It features is best. It has glass door. It type: Direct Cool. It Gross Bolume: 370 Ltr. Net Volume: 367 Ltr. It's special technoloty: Nano health care.  If want to see this freeze information. You can visit <a className='underline text-blue-900' href="https://waltonbd.com/direct-cool-refrigerator/wfk-3g0-gdel-xx">Walton WFK-3G0-GDEL-XX</a>. It is best Choice.</p>
                    <button className='px-3 md:px-4 lg:px-8 py-2 md:py-3 lg:py-4 bg-indigo-100 rounded-lg'>Live Demo</button>
                </div>
                <div className="w-full">
                    <img className='w-full' src={bannerImg} alt="" />
                </div>
            </div>

            <div className='mt-20'>
                <h2 className='text-center text-3xl font-bold'>Customer Reviews(3)</h2>

                <div className='grid md:grid-cols-2 xl:grid-cols-3 my-10 gap-20 font-sans'>
                    {
                        firstThree.map(review => <div className='flex items-center' key={review._id}>
                            <img className='w-24 h-24 rounded-bl-full ' src={review.picture} alt="" />
                            <div className='ml-4'>
                                <h3 className='text-2xl font-semibold'>{review.name}</h3>
                                <p>{review.about}</p>
                                <p><b>Rating :</b> {review.rating}</p>
                            </div>
                        </div>)
                    }
                </div>

                <div className='text-center'>
                    <button onClick={goToReviews} className='rounded-xl px-16 py-1 bg-blue-600 text-white mb-4'>See All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;