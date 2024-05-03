// PopularPage.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const PopularContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #0a0a5c;
`;

const MovieCard = styled.div`
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  position: relative;
  width: 250px;
  background-color: rgb(32, 32, 124);
  color: white;
  overflow: hidden;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(32, 32, 124, 0.9);
  }
`;

const MovieTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

const MovieRating = styled.p`
  font-size: 16px;
  margin-left: 60%;
  margin-bottom: 5px;
`;

const MovieOverview = styled.p`
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoviePoster = styled.img`
  max-width: 100%;
  border-radius: 5px;
  transition: filter 0.3s;
  ${MovieCard}:hover & {
    filter: brightness(70%);
  }
  ${MovieCard}:hover ~ ${MovieOverview} {
    opacity: 1;
  }
`;

const API_KEY = 'API_KEY';

const PopularPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopular();
  }, []);

  return (
    <PopularContainer>
      {movies.map(movie => (
        <MovieCard key={movie.id}>
          <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`} />
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieRating>평점: {movie.vote_average}</MovieRating>
          <MovieOverview>{movie.overview}</MovieOverview>
        </MovieCard>
      ))}
    </PopularContainer>
  );
};

export default PopularPage;
