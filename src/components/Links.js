import React, { Component } from "react";
import tmdb from "../assets/tmdb-cap.png";
import mpdb from "../assets/mpdb-cap.png";
import tpdb from "../assets/tpdb-cap.png";

import "../styles/Links.css";

export default class Links extends Component {
  render() {
    return (
      <>
        <h2>
          Below are links to the best places to find high quality movie poster
          artwork. I am not saying I know this because I have a Plex server with
          68TB of movies on it.
        </h2>
        <div className="block">
          <img src={tmdb} className="site-thumb" alt="TMDB" />
          <h4>
            The Movie Database
            <br />
            <a href="https://www.themoviedb.org/">themoviedb.org</a>
          </h4>
        </div>
        <div className="block">
          <img src={mpdb} className="site-thumb" alt="MPDB" />
          <h4>
            Movie Poster DB
            <br />
            <a href="https://www.movieposterdb.com/">movieposterdb.com</a>
          </h4>
        </div>
        <div className="block">
          <img src={tpdb} className="site-thumb" alt="TPDB" />
          <h4>
            The Poster Database
            <br />
            <a href="https://theposterdb.com/">theposterdb.com</a>
          </h4>
        </div>
      </>
    );
  }
}
