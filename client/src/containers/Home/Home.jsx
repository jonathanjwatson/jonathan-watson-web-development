import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-header">
        <h1 className="center-align" id="home-title">
          What Will You Learn&nbsp;Today?
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s4">Image will go here.</div>
          <div className="col s8">
            <h2>About</h2>
            <p>Something</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
