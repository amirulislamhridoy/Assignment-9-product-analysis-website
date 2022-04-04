import React from 'react';
import bannerImg from '../../images/apple-iphone-13-pro-max.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
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
        <div className='w-4/5 mx-auto'>
            <div className=' flex justify-between items-center mt-10'>
                <div className="">
                    <h1 className='text-7xl font-extrabold'>Your Next Choice</h1>
                    <h1 className='text-7xl font-extrabold text-blue-700'>Your Best Choice</h1>
                    <p className='w-3/4 mt-3 mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, facilis. Doloremque quo magnam aspernatur, sequi cum ratione aliquam. Vero aliquid ducimus distinctio, veritatis obcaecati mollitia amet doloremque qui fugiat esse?</p>
                    <button className='px-8 py-4 bg-indigo-100 rounded-lg'>Live Demo</button>
                </div>
                <div className="">
                    <img src={bannerImg} alt="" />
                </div>
            </div>

            <div className='mt-20'>
                <h2 className='text-center text-3xl font-bold'>Customer Reviews(3)</h2>
                <div className='grid grid-cols-3 my-10 gap-20 font-sans'>
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
                    <button onClick={goToReviews} className='rounded-xl px-16 py-1 bg-blue-600 text-white '>See All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;