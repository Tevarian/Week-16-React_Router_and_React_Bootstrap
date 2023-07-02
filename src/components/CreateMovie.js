import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Rating from "@mui/material/Rating";
import "../styles/MovieList.css";

const CreateMovie = ({ getMovies }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");

  const createNewMovie = (movie) => {
    const MOVIE_API =
      "https://6467ba1760c8cb9a2c9bb3ba.mockapi.io/api/w12/movies";
    const newMovie = { title, year, synopsis, rating, review, name, poster };

    fetch(MOVIE_API, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getMovies();
    });
  };

  return (
    <div className="review-card">
      <form className="review-entry">
        <TextField
          fullWidth
          id="outlined"
          label="Movie Title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          id="outlined"
          label="Release Year"
          onChange={(event) => setYear(event.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          id="outlined"
          label="Poster"
          helperText="Full path to the poster image"
          onChange={(event) => setPoster(event.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          multiline
          rows={2}
          id="outlined"
          label="Synopsis"
          onChange={(event) => setSynopsis(event.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          id="outlined"
          label="Reviewer Name"
          onChange={(event) => setName(event.target.value)}
        />
        <br></br>
        <br></br>
        <TextField
          fullWidth
          multiline
          rows={2}
          id="outlined"
          label="Review"
          onChange={(event) => setReview(event.target.value)}
        />
        <br></br>
        <br></br>
        <Rating
          name="simple-controlled"
          defaultValue={0}
          onChange={(event) => setRating(event.target.value)}
        />
        <br></br>
        <br></br>
        <Button size="medium" onClick={createNewMovie}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateMovie;
