import React, { useState } from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaSearchDollar,
  FaFileVideo,
  FaCode,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaCss3,
  FaSass,
  FaAngular,
  FaVuejs,
  FaDocker,
} from "react-icons/fa";
import { SiMongodb, SiJavascript, SiHtml5, SiJquery, SiSemanticweb } from "react-icons/si";
import { DiScrum } from "react-icons/di";

const Services = () => {
  const [header] = React.useState({
    subHeading: "Services",
    text: "My services and skills",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaCode className="commonIcons" />,
      heading: "Front-end Developer",
      text: "“If you think math is hard, try web design.” – Trish Parr",
      headingtwo: "Languages:",
      language: (
        <ul>
          <li>
            <SiHtml5 /> HTML
          </li>
          <li>
            <FaCss3 /> CSS
          </li>
          <li>
            <FaSass /> SASS
          </li>
        </ul>
      ),
      headingthree: "Dev Tools:",
      devtools: (
        <ul>
          <li>
            <FaBootstrap /> Bootstrap
          </li>
          <li><SiSemanticweb />  Semantic UI</li>
          <li>
            <FaReact /> React
          </li>
          <li>
            <FaAngular /> Angular
          </li>
          <li>
            <FaVuejs /> Vue
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      icon: <FaDatabase className="commonIcons" />,
      heading: "Back-end Developer",
      text: "“Talk is cheap. Show me the code.” – Linus Torvalds",
      headingtwo: "Languages:",
      language: (
        <p>
          <SiJavascript /> Javascript, ES6
        </p>
      ),
      headingthree: "Dev Tools:",
      devtools: (
        <ul>
          <li>
            <FaNodeJs /> Node.js, NPM
          </li>
          <li>
            <SiMongodb /> MongoDB
          </li>
          <li>
            <FaDocker /> Docker
          </li>
          <li>
            <FaGithub /> Git, Github
          </li>
          <li>
            <DiScrum /> Scrum, Agile
          </li>
        </ul>
      ),
    },
  ]);

  return (
    <div id="services" className="services">
      <div className="container ">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <hr />
                  <br />
                  <div className="services__box-p">{info.text}</div>
                  <div className="services__box-header">{info.headingtwo}</div>
                  <div className="services__box-p">{info.language}</div>
                  <div className="services__box-header">
                    {info.headingthree}
                  </div>
                  <div className="services__box-p">{info.devtools}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
