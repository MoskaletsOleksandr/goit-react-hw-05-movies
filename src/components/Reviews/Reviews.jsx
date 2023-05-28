import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieReviews } from "services/themoviedb-api";
import { ReviewList, ReviewItem, Author, Content } from "./Reviews.styled";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await searchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <ReviewList>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewItem key={review.id}>
            <Author>Author: {review.author}</Author>
            <Content>{review.content}</Content>
          </ReviewItem>
        ))
      ) : (
        <ReviewItem>No reviews available.</ReviewItem>
      )}
    </ReviewList>
  );
};

export default Reviews;
