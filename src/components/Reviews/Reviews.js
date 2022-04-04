import React from 'react';
import useReviews from '../../hook/useReview';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    console.log(reviews)
    return (
        <div className='w-3/4 mx-auto my-10'>
            {

                reviews.map(review => <div key={review._id} className="my-6 font-sans flex items-center">
                    <img className='w-24 h-24' src={review.picture} alt="" />
                    <div className='ml-10'>
                        <h3 className='text-2xl font-semibold'>{review.name}</h3>
                        <p>{review.about}</p>
                        <p><b>Rating :</b> {review.rating}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Reviews;