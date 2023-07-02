import React, { useState } from "react";
import { Modal, Box, TextField } from "@mui/material";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import "../styles/UpdateForm.css";

function UpdateForm({ movie, getMovies }) {
  const { title, synopsis, year, rating, review, name, poster, id } = movie;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newTitle, setNewTitle] = useState(title);
  const [newSynopsis, setNewSynopsis] = useState(synopsis);
  const [newYear, setNewYear] = useState(year);
  const [newRating, setNewRating] = useState(rating);
  const [newReview, setNewReview] = useState(review);
  const [newName, setNewName] = useState(name);
  const [newPoster, setNewPoster] = useState(poster);

  const updateMovie = () => {
    const url = `https://6467ba1760c8cb9a2c9bb3ba.mockapi.io/api/w12/movies/${id}`;
    const newMovie = {
      title: newTitle,
      synopsis: newSynopsis,
      year: newYear,
      rating: newRating,
      review: newReview,
      name: newName,
      poster: newPoster,
    };

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        getMovies();
        setOpen(false);
      })
      .then(() => {
        const url = `https://6467ba1760c8cb9a2c9bb3ba.mockapi.io/api/w12/movies/${id}`;
      });
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box className="review-update-card">
          <h4>Edit Movie and Review Details</h4>
          <form className="review-entry">
            <TextField
              fullWidth
              id="outlined"
              label="Movie Title"
              onChange={(event) => setNewTitle(event.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="outlined"
              label="Release Year"
              onChange={(event) => setNewYear(event.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="outlined"
              label="Poster"
              helperText="Full path to the poster image"
              onChange={(event) => setNewPoster(event.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              multiline
              rows={2}
              id="outlined"
              label="Synopsis"
              onChange={(event) => setNewSynopsis(event.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              id="outlined"
              label="Reviewer Name"
              onChange={(event) => setNewName(event.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              multiline
              rows={2}
              id="outlined"
              label="Review"
              onChange={(event) => setNewReview(event.target.value)}
            />
            <br></br>
            <br></br>
            <Rating
              name="simple-controlled"
              defaultValue={0}
              onChange={(event) => setNewRating(event.target.value)}
            />
            <br></br>
            <br></br>
            <Button size="medium" onClick={updateMovie}>
              Update
            </Button>
          </form>
        </Box>
      </Modal>

      <Button size="small" onClick={handleOpen}>
        EDIT
      </Button>
    </>
  );
}

export default UpdateForm;
