import React, { Component } from "react";
import Header from "./Header";
import MovieList from "./MovieList";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <MovieList />
      </>
    );
  }
}
