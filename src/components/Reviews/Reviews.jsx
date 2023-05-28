import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { searchMovieReviews } from "services/themoviedb-api";
import { ReviewList, ReviewItem, Author, Content } from "./Reviews.styled";

const Reviews = () => {
      const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
      const location = useLocation();

    
     useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await searchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };

         fetchMovieCast();
     }, [movieId]);
    
    return (
        <ReviewList>
            {reviews.map((review) => {
                return (
                    <ReviewItem key={review.id}>
                        <Author>Author: {review.author}</Author>
                        <Content>{review.content}</Content>
                    </ReviewItem>
                )
            })}
        </ReviewList>
    )
};

export default Reviews;