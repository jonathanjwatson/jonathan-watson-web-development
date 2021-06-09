import React from "react";
import "./Home.css";
import ComputerProgrammer from "../../assets/images/computer-programmer.jpg";
import Planning from "../../assets/images/planning.jpg";
import JonathanWatson from "../../assets/images/jonathanwatson.jpg";

const Home = () => {
  return (
    <>
      <div className="home-header">
        <h1 className="center-align" id="home-title">
          What Will You Learn&nbsp;Today?
        </h1>
      </div>
      <section className="container home-section">
        <div className="row">
          <div className="col s12 m4">
            <img
              src={ComputerProgrammer}
              alt="Computer Programmer"
              className="home-photo"
            />
          </div>
          <div className="col s12 m8">
            <h2>About Us</h2>
            <p>Something</p>
          </div>
        </div>
      </section>
      <section className="container home-section">
        <div className="row">
          <div className="col s12 m8">
            <h2>About Jonathan Watson</h2>
            <p>
              Jonathan is a Senior Software Engineer in the Greater Atlanta
              Area. In addition to extensive experience as a developer he served
              as Adjunct Instructor at Georgia Tech Professional Education,
              teaching their Web Development Bootcamp.
            </p>
          </div>
          <div className="col s12 m4">
            <img
              src={JonathanWatson}
              alt="Jonathan Watson Headshot"
              className="home-photo"
            />
          </div>
        </div>
      </section>
      <section className="container home-section">
        <div className="row">
          <div className="col s12 m4">
            <img
              src={Planning}
              alt="Planning Next Events"
              className="home-photo"
            />
          </div>
          <div className="col s12 m8">
            <h2>Upcoming Events</h2>
            <p>Something</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
