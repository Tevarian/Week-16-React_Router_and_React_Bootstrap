import React, { Component } from "react";
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="headerContent">
        <div>
          <h3>Movie Reviews!</h3>
          <p className="headerText">
            Please browse our reviews! If you would like to add your own just
            scroll past the reviews to the end of the page and fill out the
            form. Thanks for visiting!
          </p>
        </div>
        <div>
          <img
            className="headerPic"
            src="https://media.tenor.com/FifKimCGC5IAAAAd/snatch-funny-angle.gif"
            alt="Snatch Movie Quote: It was at a funny angle"
          ></img>
        </div>
      </div>
    );
  }
}
