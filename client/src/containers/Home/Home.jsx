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
      <section className="container home-section" id="about-us">
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
            <p>
              Jonathan Watson Web Development is a digital platform designed to
              help developers upskill.
            </p>
            <p>
              Whether you're a recent bootcamp grad looking for your first job,
              a Junior Developer working on a promotion, or a Senior Software
              Engineer looking to stay sharp, we can help.
            </p>
          </div>
        </div>
      </section>
      <section className="container home-section" id="meet-jonathan">
        <div className="row">
          <div className="col s12 m4 push-m8">
            <img
              src={JonathanWatson}
              alt="Jonathan Watson Headshot"
              className="home-photo"
            />
          </div>
          <div className="col s12 m8 pull-m4">
            <h2>Meet Jonathan</h2>
            <p>
              Jonathan is a Senior Software Engineer in the Greater Atlanta
              Area. In addition to extensive experience as a developer he served
              as Adjunct Instructor at Georgia Tech Professional Education,
              teaching their Web Development Bootcamp.
            </p>
          </div>
        </div>
      </section>
      <section className="container home-section" id="upcoming-events">
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
            <h3>
              Summer CI/CD - Tuesdays this Summer - 7:00PM (ET) - 9:00PM (ET)
            </h3>
            <p>
              One of the weakest areas for Bootcamp grads and Junior Developers
              is CI/CD. Often considered a part of DevOps, CI/CD plays a vital
              role in ensuring code quality and performance. This summer, I'll
              be walking through setting up a CI/CD pipeline using GitHub
              Actions. With this in place, we'll discuss and implement:
              <ul>
                <li>ESLint</li>
                <li>Unit Testing</li>
                <li>End-to-End Testing</li>
                <li>Deployment to Heroku</li>
                <li> and more!</li>
              </ul>
              First Session Starts June 15!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
