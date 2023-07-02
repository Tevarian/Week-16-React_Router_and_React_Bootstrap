import React from "react";
import Button from "@mui/material/Button";

const DeleteMovie = ({ handleDeleteMovie }) => {
  return (
    <>
      <Button size="small" onClick={handleDeleteMovie}>
        DELETE
      </Button>
    </>
  );
};

export default DeleteMovie;
