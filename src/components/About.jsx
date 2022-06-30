import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <img
          className="about__container__img"
          src="/assets/profilPic.png"
          alt="me,myself and I"
        />
        <div className="about__container__text">
          <h1 className="about__container__text__h1">About me</h1>
          <p className="about__container__text__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            omnis voluptates, ducimus expedita consectetur assumenda sed
            laudantium cum sunt repellendus dicta explicabo dolores ea incidunt,
            vel accusamus? Repudiandae, sed blanditiis.
          </p>
          <ul className="about__container__text__ul">
            <li className="about__container__text__ul__li">Web technologies</li>
            <li className="about__container__text__ul__li">Soft skills</li>
            <li className="about__container__text__ul__li">Experiences</li>
            <li className="about__container__text__ul__li">Education</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
