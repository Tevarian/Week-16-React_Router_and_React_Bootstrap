import React, { useEffect, useMemo, useState } from "react";
import Rating from "@mui/material/Rating";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import UpdateForm from "./UpdateForm";
import CreateMovie from "./CreateMovie";
import DeleteMovie from "./DeleteMovie";
import "../styles/MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState("");
  const reviews = useMemo(() => {
    return movies;
  }, [movies]);

  const getMovies = () => {
    const MOVIE_API =
      "https://6467ba1760c8cb9a2c9bb3ba.mockapi.io/api/w12/movies";

    fetch(MOVIE_API)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = (movie) => {
    const MOVIE_API = `https://6467ba1760c8cb9a2c9bb3ba.mockapi.io/api/w12/movies/${movie.id}`;

    fetch(MOVIE_API, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        setMovies(movies.filter((review) => review.id !== movie.id));
      }
    });
  };

  return (
    <>
      <div className="reviews-container">
        {reviews &&
          reviews.map((movie, index) => {
            return (
              <div className="review-card" key={index}>
                <div className="title">{movie.title}</div>
                <div className="release-year">({movie.year})</div>
                <div>
                  <img
                    src={movie.poster}
                    className="poster"
                    alt="Movie Poster"
                  />
                </div>
                <div className="card-content">
                  <div className="synopsis">Synopsis: {movie.synopsis}</div>
                  <div className="review-block">
                    <div className="name-review-row">
                      <div>{movie.name}</div>
                      <div>
                        <Rating
                          value={movie.rating}
                          precision={1}
                          size="small"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="review-text">{movie.review}</div>
                  </div>
                </div>
                <div className="functions">
                  <ButtonGroup variant="outlined">
                    <Button size="small">SHARE</Button>
                    <UpdateForm getMovies={getMovies} movie={movie} />
                    <DeleteMovie handleDeleteMovie={() => deleteMovie(movie)} />
                  </ButtonGroup>
                </div>
              </div>
            );
          })}
          <CreateMovie getMovies={getMovies} />
      </div>
    </>
  );
};

export default MovieList;
