import React from "react";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <h3 className="home__container__h3">Welcome to my world</h3>
        <h1 className="home__container__h1">Hi, im Aitor Jurquet</h1>
        <Fade left delay={4500}>
          <h2 className="home__container__span">Web Developper</h2>
        </Fade>
        <h1 className="home__container__h1">Based in bask country</h1>
        <div />
      </div>
    </div>
  );
};

export default Home;
